const { cmd } = require('../command');

cmd({
    pattern: "getprofile",
    alias: ["pp", "profilepic", "picture", "gpp"], // "gpp" alias added for your convenience
    react: "📷",
    desc: "Get user's profile picture",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, sender, isGroup }) => {
    try {
        let userId = sender; 

        if (mek.message?.extendedTextMessage?.contextInfo?.participant) {
            userId = mek.message.extendedTextMessage.contextInfo.participant;
        } 
        else if (mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userId = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        } 
        else if (!isGroup) {
            userId = from;
        } 
        else if (args[0]) {
            userId = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(userId, 'image');
        } catch (apiError) {
            try {
                ppUrl = await conn.profilePictureUrl(userId);
            } catch (innerError) {
                ppUrl = null;
            }
        }

        if (!ppUrl) {
            return reply("🔒 *DP Nahi Mili!* Iski 2 wajah ho sakti hain:\n1. Us bande ne DP nahi lagayi.\n2. Usne Privacy lagayi hui hai (Nobody ya My Contacts).");
        }

        // 🌟 THE NUMBER FIX 🌟
        // Yeh line WhatsApp ke internal tags (:15) waghera ko remove kar ke saaf number nikalegi
        let cleanNumber = userId.split('@')[0].split(':')[0];

        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: `📷 *Profile Picture*\n\n👤 Number: +${cleanNumber}`,
            quoted: mek
        });

        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error(error);
        reply("❌ Ek unexpected error aaya hai. Dobara check karein.");
    }
});
