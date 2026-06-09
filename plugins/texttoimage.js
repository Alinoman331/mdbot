const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "texttoimage",
    alias: ["txt2img", "aiimg", "nano"],
    react: "🎨",
    desc: "Generate image from text using AI",
    category: "ai",
    use: ".texttoimage <prompt>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {

        const prompt = args.join(" ");

        if (!prompt) {
            return reply("🖼️ Example:\n.texttoimage pakistan flag");
        }

        await reply(`⏳ Generating image for:\n"${prompt}"`);

        const response = await axios.get(
            `https://omegatech-api.dixonomega.tech/api/ai/nano-banana-pro?prompt=${encodeURIComponent(prompt)}`,
            { timeout: 120000 }
        );

        const data = response.data;

        const imageUrl =
            data?.image ||
            data?.result ||
            data?.url ||
            data?.image_url;

        if (!imageUrl) {
            return reply("❌ No image returned from API.");
        }

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption:
`🖼️ *AI GENERATED IMAGE*

📌 Prompt: ${prompt}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ α𝙻𝙸_𝙼𝙳*`
        }, { quoted: mek });

    } catch (e) {
        console.log("TEXT2IMG ERROR:", e);
        reply(`❌ Error: ${e.message || "Failed to generate image"}`);
    }
});
