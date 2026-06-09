const { cmd } = require("../command");
const axios = require("axios");
// 🔥 normalize number (03xx / 923xx → 33xx format used by API)
function normalizeNumber(num = "") {
    num = num.toString().replace(/[^0-9]/g, "");

    if (num.startsWith("92")) {
        num = num.slice(2); // remove 92
    }

    if (num.startsWith("0")) {
        num = num.slice(1); // remove 0
    }

    return num;
}

cmd({
    pattern: "sim",
    alias: ["data", "database","simdatabase"],
    react: "🔥",
    desc: "Private company contact lookup (OWNER ONLY)",
    category: "private",
    filename: __filename
}, async (conn, mek, m, { reply, args, isGroup, sender }) => {
    try {

        if (!args[0]) {
            return reply("📌 Usage: .sim 03xxxxxxxxx or 923xxxxxxxxx");
        }

        const number = normalizeNumber(args[0]);

        let res;

        try {
            res = await axios.get(
                `https://apisaqib.vercel.app/api/v1/1005?number=${encodeURIComponent(number)}`,
                { timeout: 15000 }
            );
        } catch (err) {
            return reply("❌ API not reachable (network error)");
        }

        const data = res?.data;

        if (!data || data.success !== true) {
            return reply("❌ Invalid API response");
        }

        const records = data?.data?.records;

        if (!Array.isArray(records) || records.length === 0) {
            return reply("❌ No records found");
        }

        let text = `🔥 *ULTRA SIM DATABASE*\n\n`;
        text += `📱 *Query:* ${data.data.input_query || number}\n`;
        text += `\n📊 *Records:* ${records.length}\n\n`;

        for (let i = 0; i < records.length; i++) {
            const r = records[i] || {};
            text += `👤 *Record ${i + 1}*\n\n`;
            text += `*Name:* ${r.full_name || "N/A"}\n\n`;
            text += `*Phone:* ${r.phone || "N/A"}\n\n`;
            text += `*CNIC:* ${r.cnic || "N/A"}\n\n`;
            text += `*Address:* ${r.address || "N/A"}\n\n`;
           
        }

        text += `\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ α𝙻𝙸_𝙼𝙳*`;

        return reply(text);

    } catch (e) {
        console.log("CONTACT ERROR:", e);
        return reply("❌ Unexpected error occurred.");
    }
});
