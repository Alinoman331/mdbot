const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "couplepp",
    alias: ["couple", "cpp"],
    react: "💑",
    desc: "Get couple profile pictures",
    category: "image",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {

        await conn.sendMessage(from, {
            text: "💑 *Fetching couple profile pictures...*"
        }, { quoted: mek });

        const response = await axios.get(
            "https://omegatech-api.dixonomega.tech/api/random/couple-pp",
            { timeout: 15000 }
        );

        if (!response.data?.success || !response.data?.result) {
            return reply("❌ API failed to fetch couple pictures");
        }

        const { male, female } = response.data.result;

        if (!male && !female) {
            return reply("❌ No images received from API");
        }

        // Send male PP
        if (male) {
            await conn.sendMessage(from, {
                image: { url: male },
                caption: "👨 *Male Couple Profile Picture*"
            }, { quoted: mek });
        }

        // Send female PP
        if (female) {
            await conn.sendMessage(from, {
                image: { url: female },
                caption: "👩 *Female Couple Profile Picture*"
            }, { quoted: mek });
        }

    } catch (err) {
        console.log("CouplePP Error:", err);

        reply("❌ Error fetching couple profile pictures. Try again later.");
    }
});
