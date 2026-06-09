const { cmd } = require("../command");
const axios = require("axios");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Facebook downloader (group stable)",
  category: "download",
  react: "📘",
  filename: __filename,
  use: ".fb <url>"
}, async (conn, m, store, { from, q, reply }) => {
  try {

    if (!q) return reply("❌ Send Facebook URL");

    if (!q.includes("facebook.com") && !q.includes("fb.watch")) {
      return reply("❌ Invalid Facebook link");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const api = `https://omegatech-api.dixonomega.tech/api/download/all?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(api, { timeout: 60000 });

    if (!data?.success || !data?.result?.video?.length) {
      return reply("❌ Failed to fetch video");
    }

    // Always prefer SD for stability
    const video = data.result.video.find(v => v.quality === "SD")
                 || data.result.video.find(v => v.quality === "HD");

    if (!video?.url) return reply("❌ No video found");

    // 🔥 IMPORTANT FIX: ALWAYS BUFFER (NO STREAMING IN GROUPS)
    const buffer = await axios.get(video.url, {
      responseType: "arraybuffer",
      timeout: 60000,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    await conn.sendMessage(from, {
      video: Buffer.from(buffer.data),
      mimetype: "video/mp4",
      caption:
        `📘 FACEBOOK VIDEO\n\n` +
        `🎬 Quality: ${video.quality}\n` +
        `⚡ Group Safe Mode\n\n` +
        `> © α𝙻𝙸_𝙼𝙳`
    }, { quoted: m });

    await conn.sendMessage(from, {
      react: { text: "✅", key: m.key }
    });

  } catch (err) {
    console.log("FB ERROR:", err);

    reply("❌ Group failed. Try again (Facebook CDN limit issue).");
  }
});
