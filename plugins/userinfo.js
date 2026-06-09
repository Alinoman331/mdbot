const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "userinfo",
    alias: ["wa", "whatsappinfo", "profile"],
    react: "👤",
    desc: "Get WhatsApp user profile info",
    category: "tools",
    use: ".userinfo 923xxxxxxxxx",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {

        const number = args[0];
        if (!number) {
            return reply("📌 Example:\n.userinfo 923213509846");
        }

        const url = `https://omegatech-api.dixonomega.tech/api/tools/whatsapp-proile?number=${encodeURIComponent(number)}`;

        const res = await axios.get(url, { timeout: 15000 });
        const data = res?.data;

        if (!data?.success || !data?.data) {
            return reply("❌ No user found or invalid number");
        }

        const user = data.data;

        const caption =
`╭━━〔 *WHATSAPP PROFILE INFO* 〕━━╮
┃ 📱 Number: ${user.number}
┃ 👤 Name: ${user.name || "N/A"}
┃ 🔗 Chat: ${user.link}
╰━━━━━━━━━━━━━━━━━━━━━━╯

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ α𝙻𝙸_𝙼𝙳*`;

        if (user.profile) {
            await conn.sendMessage(from, {
                image: { url: user.profile },
                caption: caption
            }, { quoted: mek });
        } else {
            await reply(caption);
        }

    } catch (e) {
        console.log("USERINFO ERROR:", e);
        reply("❌ Failed to fetch user info");
    }
});
