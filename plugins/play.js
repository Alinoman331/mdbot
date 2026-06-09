
const { cmd } = require("../command");
const axios = require("axios");
const yts = require("yt-search");

cmd({
    pattern: "song",
    alias: ["ytaudio", "play", "mp3", "music"],
    react: "🎵",
    desc: "Download YouTube audio",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        const q = args.join(" ");

        if (!q) {
            return reply(
                "🎵 *Usage:* .song <query/url>\nExample: .song Alan Walker faded"
            );
        }

        await conn.sendMessage(from, {
            react: { text: "⏳", key: m.key }
        });

        async function fetchVideoInfo(text) {
            const isYtUrl = /(youtube\.com|youtu\.be)/i.test(text);

            if (isYtUrl) {
                const videoId = text.match(
                    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
                )?.[1];

                if (!videoId) throw new Error("Invalid YouTube URL");

                const videoInfo = await yts({ videoId });

                return {
                    url: `https://youtu.be/${videoId}`,
                    info: videoInfo
                };
            } else {
                const search = await yts(text);

                if (!search.videos.length) {
                    throw new Error("No results found");
                }

                return {
                    url: search.videos[0].url,
                    info: search.videos[0]
                };
            }
        }

        async function fetchAudioData(videoUrl) {
            const api =
                `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;

            const res = await axios.get(api, {
                timeout: 15000
            });

            if (!res.data?.status || !res.data?.audio) {
                throw new Error("Audio not available");
            }

            return res.data;
        }

        const { url: videoUrl, info: videoInfo } =
            await fetchVideoInfo(q);

        const songData = await fetchAudioData(videoUrl);

        await conn.sendMessage(from, {
            image: {
                url: songData.thumbnail || videoInfo.thumbnail
            },
            caption:
                `🎧 *${songData.title || videoInfo.title}*\n\n` +
                `⏱️ Duration: ${videoInfo.timestamp}\n` +
                `👤 Artist: ${videoInfo.author?.name || "Unknown"}\n` +
                `👀 Views: ${videoInfo.views?.toLocaleString() || "N/A"}\n\n` +
                `> © α𝙻𝙸_𝙼𝙳`
        }, { quoted: mek });

        await conn.sendMessage(from, {
            audio: { url: songData.audio },
            mimetype: "audio/mpeg",
            fileName: `${songData.title || "audio"}.mp3`,
            ptt: false
        }, { quoted: mek });

        await conn.sendMessage(from, {
            react: { text: "✅", key: m.key }
        });

    } catch (err) {
        console.error("SONG PLUGIN ERROR:", err);

        reply(
            `❌ Error: ${err.message || "Something went wrong"}`
        );

        await conn.sendMessage(from, {
            react: { text: "❌", key: m.key }
        });
    }
});
