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
    async (conn, mek, m) => {
        try {

            const getBuffer = async (url) => {
                const res = await axios.get(url, { responseType: "arraybuffer" });
                return Buffer.from(res.data);
            };

            let sender = `@${mek.sender.split("@")[0]}`;
            let mentionedUser = m.mentionedJid?.[0] || (m.quoted && m.quoted.sender);
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

            // STEP 1
            await conn.sendMessage(mek.chat, {
                text: `💋 *Preparing kiss...*`
            }, { quoted: mek });

            await new Promise(r => setTimeout(r, 700));

            // STEP 2
            await conn.sendMessage(mek.chat, {
                text: `😘 *${sender} is getting closer to ${targetText}...*`,
                mentions: [mek.sender, mentionedUser].filter(Boolean)
            }, { quoted: mek });

            await new Promise(r => setTimeout(r, 900));

            // 🔥 YOUR CATBOX GIFS (SAFE NOW)
            const gifs = [
                "https://up6.cc/2026/06/178049675568411.gif",
                "https://up6.cc/2026/06/178049675573372.gif",
                "https://up6.cc/2026/06/178049675575183.gif",
                "https://up6.cc/2026/06/178049675576154.gif"
            ];

            const gifUrl = gifs[Math.floor(Math.random() * gifs.length)];

            // ✅ BUFFER FIX (NO MEDIA ERROR)
            const buffer = await getBuffer(gifUrl);

            await conn.sendMessage(mek.chat, {
                video: buffer,
                gifPlayback: true,
                caption: message,
                mentions: [mek.sender, mentionedUser].filter(Boolean)
            }, { quoted: mek });

        } catch (error) {
            console.log("Kiss Error:", error);

            await conn.sendMessage(mek.chat, {
                text: `❌ *KISS COMMAND ERROR*\n\n${error.message || error}`
            }, { quoted: mek });
        }
    }
);
