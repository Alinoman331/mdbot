const { cmd } = require("../command");
const axios = require("axios");
const FormData = require("form-data");
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");

const freevideo = {
  api: {
    base: "https://www.freeaivideos.org",
    endpoint: {
      generate: "/api/video_generation",
      request: (id) => `?request_id=${id}&prompt=`
    }
  },

  headers: {
    "user-agent": "Mozilla/5.0",
    "origin": "https://www.freeaivideos.org",
    "referer": "https://www.freeaivideos.org/",
    "accept": "*/*"
  },

  generate: async ({ prompt, imageBuffer = null }) => {
    const form = new FormData();

    form.append("prompt", prompt || "animate this image");

    if (imageBuffer) {
      form.append("initialFrame", imageBuffer, {
        filename: "image.jpg",
        contentType: "image/jpeg"
      });
    }

    try {
      const { data } = await axios.post(
        `${freevideo.api.base}${freevideo.api.endpoint.generate}`,
        form,
        {
          headers: {
            ...freevideo.headers,
            ...form.getHeaders()
          },
          timeout: 60000
        }
      );

      return {
        success: true,
        request_id: data?.request_id
      };
    } catch (e) {
      return {
        success: false,
        error: e.response?.data?.error || e.message
      };
    }
  },

  poll: async (requestId, timeout = 600000) => {
    const url =
      `${freevideo.api.base}${freevideo.api.endpoint.generate}` +
      `${freevideo.api.endpoint.request(requestId)}`;

    const start = Date.now();

    while (Date.now() - start < timeout) {
      try {
        const { data } = await axios.get(url, {
          headers: freevideo.headers
        });

        if (data?.video_url) {
          return {
            success: true,
            data
          };
        }
      } catch {}

      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    return {
      success: false,
      error: "Generation timeout."
    };
  }
};

cmd({
  pattern: "aivideo",
  alias: ["genvideo", "freevideo"],
  desc: "Generate AI video from prompt or image",
  category: "ai",
  react: "🎬",
  filename: __filename,
  use: ".aivideo <prompt>"
}, async (conn, m, store, { from, q, reply }) => {
  try {

    let imageBuffer = null;

    const quoted =
      m.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    if (quoted?.imageMessage) {
      const stream = await downloadContentFromMessage(
        quoted.imageMessage,
        "image"
      );

      let buffer = Buffer.from([]);

      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }

      imageBuffer = buffer;
    }

    if (!q && !imageBuffer) {
      return reply(
`🎬 *AI VIDEO GENERATOR*

Usage:
.aivideo A cat walking in rain

OR

Reply to an image:
.aivideo`
      );
    }

    const prompt = q || "animate this image";

    await conn.sendMessage(from, {
      react: {
        text: "⏳",
        key: m.key
      }
    });

    await reply(
`🎬 *AI VIDEO GENERATOR*

📝 Prompt: ${prompt}

⏳ Request sent...
Please wait 2-5 minutes.`
    );

    const generate = await freevideo.generate({
      prompt,
      imageBuffer
    });

    if (!generate.success || !generate.request_id) {
      return reply(
        `❌ Failed to start generation.\n\n${generate.error || "Unknown error"}`
      );
    }

    const result = await freevideo.poll(generate.request_id);

    if (!result.success) {
      return reply(`❌ ${result.error}`);
    }

    const videoBuffer = await axios.get(
      result.data.video_url,
      {
        responseType: "arraybuffer",
        timeout: 120000,
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    await conn.sendMessage(
      from,
      {
        video: Buffer.from(videoBuffer.data),
        mimetype: "video/mp4",
        caption:
`🎬 AI VIDEO GENERATED

📝 Prompt: ${prompt}

> © PROxABDULLAH-MD`
      },
      { quoted: m }
    );

    await conn.sendMessage(from, {
      react: {
        text: "✅",
        key: m.key
      }
    });

  } catch (err) {
    console.log("AI VIDEO ERROR:", err);

    reply(
      `❌ Error: ${err.message}`
    );
  }
});
