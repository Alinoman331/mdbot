const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "img",
    alias: ["image", "searchimg"],
    react: "🫧",
    desc: "Search images (clean mode)",
    category: "other",
    use: ".img <query>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {

        const query = args.join(" ");
        if (!query) {
            return reply("🖼️ Example: .img Pakistan");
        }

        // ONLY ONE SEARCH MESSAGE
        await reply(`🔍 Searching images for: ${query}`);

        const url = `https://omegatech-api.dixonomega.tech/api/Search/pinterest?query=${encodeURIComponent(query)}&scope=pins`;
        const { data } = await axios.get(url);

        if (!data?.success || !data?.results?.length) {
            return reply("❌ No images found.");
        }

        // keep only valid images
        const images = data.results.filter(i => i.image);

        const selected = images
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);

        for (const img of selected) {

            await conn.sendMessage(from, {
                image: { url: img.image },
                caption: `> © α𝙻𝙸_𝙼𝙳`
            }, { quoted: mek });

            await new Promise(r => setTimeout(r, 1000));
        }

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
