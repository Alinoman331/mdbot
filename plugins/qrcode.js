 const { cmd } = require('../command');

cmd({
    pattern: "qr",
    alias: ["qrcode", "makeqr"],
    desc: "Instantly generates a QR code from a provided link or text",
    category: "utility",
    use: ".qr <text/link>",
    react: "🔲",
    filename: __filename
},
async (conn, mek, m, { from, q, reply, pushName }) => {
    try {
        // 1. Check if the user actually provided text or a link
        if (!q) {
            return reply("❌ Please provide a link or text!\n\n*Example:* `.qr https://whatsapp.com/channel/yourchannel`");
        }

        reply("⏳ Generating your QR Code...");

        // 2. Encode the text and send it to the QR API
        // encodeURIComponent ensures spaces and special characters don't break the URL
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(q)}&margin=10`;

        // 3. Create a nice caption for the image
        const caption = `*🔲 ALI MD QR GENERATOR 🔲*\n\nHere is your custom QR code, ${pushName || 'Friend'}! 🚀`;

        // 4. Send the final QR image back to the chat
        await conn.sendMessage(from, { 
            image: { url: qrApiUrl }, 
            caption: caption 
        }, { quoted: mek });

    } catch (error) {
        console.error("QR Command Error:", error);
        reply("❌ An error occurred while generating the QR code. Please try again!");
    }
});

console.log("✅ QR Plugin Loaded: qr");