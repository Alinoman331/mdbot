const { cmd } = require("../command");
const axios = require("axios");
const fetch = require("node-fetch");

cmd({
    pattern: "tiktok",
    alias: ["tt", "ttdl"],
    react: "🎵",
    desc: "Download TikTok videos",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        const ttUrl = args.join(" ").trim();

        if (!ttUrl) {
            return reply("📌 *Usage:* .tiktok <url>");
        }

        if (!ttUrl.includes("tiktok.com") &&
            !ttUrl.includes("vm.tiktok.com") &&
            !ttUrl.includes("vt.tiktok.com")) {
            return reply("❌ Invalid TikTok link");
        }

        await conn.sendMessage(from, {
            react: { text: "🎵", key: m.key }
        });

        let videoUrl = null;
        let title = "";

        // API 1: tikwm
        try {
            const r1 = await axios.post(
                "https://www.tikwm.com/api/",
                new URLSearchParams({ url: ttUrl, hd: 1 }),
                { timeout: 15000 }
            );

            if (r1.data?.code === 0 && r1.data?.data?.play) {
                videoUrl = r1.data.data.play;
                title = r1.data.data.title || "";
            }
        } catch (e) {}

        // API 2: bk9 fallback
        if (!videoUrl) {
            try {
                const r2 = await fetch(
                    `https://api.bk9.dev/download/tiktok?url=${encodeURIComponent(ttUrl)}`
                );
                const d2 = await r2.json();

                if (d2?.status && d2?.BK9?.BK9) {
                    videoUrl = d2.BK9.BK9;
                }
            } catch (e) {}
        }

        if (!videoUrl) return reply("❌ Failed to download video");

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: `🎬 *TIKTOK DOWNLOADED*\n${title ? "📝 " + title : ""}\n\n> © α𝙻𝙸_𝙼𝙳`
        }, { quoted: mek });

    } catch (err) {
        console.log(err);
        reply("❌ Error downloading TikTok video");
    }
});
