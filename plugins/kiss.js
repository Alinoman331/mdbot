const { cmd } = require("../command");
const axios = require("axios");

cmd(
    {
        pattern: "kiss",
        desc: "Send an animated kiss reaction GIF.",
        category: "fun",
        react: "💋",
        filename: __filename,
        use: "@tag (optional)",
    },
    async (conn, mek, m, { from, quoted }) => {
        try {
            const getBuffer = async (url) => {
                const res = await axios.get(url, { responseType: "arraybuffer" });
                return Buffer.from(res.data);
            };

            let sender = `@${mek.sender.split("@")[0]}`;
            let mentionedUser = m.mentionedJid?.[0] || (quoted && quoted.sender);
            let isGroup = m.isGroup;

            let targetText = mentionedUser
                ? `@${mentionedUser.split("@")[0]}`
                : "everyone";

            let message;

            if (mentionedUser) {
                message = `${sender} kissed ${targetText}`;
            } else if (isGroup) {
                message = `${sender} kissed everyone`;
            } else {
                message = `> α𝙻𝙸_𝙼𝙳 🖤`;
            }

            // STEP 1: Typing state / Preparation
            await conn.sendMessage(from, {
                text: `💋 *Preparing kiss...*`
            }, { quoted: mek });

            await new Promise(r => setTimeout(r, 700));

            // STEP 2: Getting closer animation
            await conn.sendMessage(from, {
                text: `😘 *${sender} is getting closer to ${targetText}...*`,
                mentions: [mek.sender, mentionedUser].filter(Boolean)
            }, { quoted: mek });

            await new Promise(r => setTimeout(r, 900));

            // 🔥 WORKING MP4 LINKS FOR WHATSAPP GIFS (NO BLANK SCREEN)
            const gifs = [
                "https://media.tenor.com/F02UpDzvBQQAAAPo/anime-kiss.mp4",
                "https://media.tenor.com/tvURmD-R0U4AAAPo/kiss-anime.mp4",
                "https://media.tenor.com/el26ZqC0lHIAAAPo/anime-kiss.mp4",
                "https://media.tenor.com/jnndAhA8X7EAAAPo/anime-kiss.mp4"
            ];

            const gifUrl = gifs[Math.floor(Math.random() * gifs.length)];

            // ✅ BUFFER FETCH
            const buffer = await getBuffer(gifUrl);

            // Send final animated GIF (MP4 playing as loop)
            await conn.sendMessage(from, {
                video: buffer,
                gifPlayback: true,
                caption: message,
                mentions: [mek.sender, mentionedUser].filter(Boolean)
            }, { quoted: mek });

        } catch (error) {
            console.log("Kiss Error:", error);
            await conn.sendMessage(from, {
                text: `❌ *KISS COMMAND ERROR*\n\n${error.message || error}`
            }, { quoted: mek });
        }
    }
);
