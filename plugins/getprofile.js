const { cmd } = require('../command');

cmd({
    pattern: "getprofile",
    alias: ["gpp", "profilepic", "picture"],
    react: "📷",
    desc: "Get user's profile picture",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, sender, isGroup }) => {
    try {
        let userId;
        
        // 1. Agar kisi ke message ka reply kiya hai
        if (mek.message?.extendedTextMessage?.contextInfo?.participant) {
            userId = mek.message.extendedTextMessage.contextInfo.participant;
        } 
        // 2. Agar kisi ko @ tag kiya hai
        else if (mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userId = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        }
        // 3. Agar kisi ka number type kiya hai
        else if (args[0] && args[0].match(/\d+/)) {
            const number = args[0].replace(/[^0-9]/g, '');
            userId = number + '@s.whatsapp.net';
        }
        // 4. Default
        else {
            userId = isGroup ? sender : from;
        }

        // 🌟 THE FIX: Dual-Fetch System 🌟
        let ppUrl;
        try {
            // Pehle HD quality DP fetch karne ki koshish karega
            ppUrl = await conn.profilePictureUrl(userId, 'image');
        } catch (err) {
            try {
                // Agar HD fail ho jaye, toh Normal quality fetch karega
                ppUrl = await conn.profilePictureUrl(userId);
            } catch (err2) {
                // Agar dono fail ho jayein matlab DP sach mein private/removed hai
                return reply("❌ Saamne wale ki DP private hai ya usne koi DP nahi lagayi hui.");
            }
        }

        if (!ppUrl) {
            return reply("❌ DP nahi mili.");
        }

        const caption = `📷 *Profile Picture*\n\n👤 User: ${userId.split('@')[0]}\n🔗 Download URL: ${ppUrl}`;
        
        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: caption,
            quoted: mek
        });

        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error('Profile picture error:', error);
        reply(`❌ Error: ${error.message || "Unknown error"}\nYeh user shayad exist nahi karta ya iska account naya hai.`);
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
    }
});

// Group profile picture command
cmd({
    pattern: "grouppp",
    alias: ["groupicon", "gcicon"],
    react: "🏙️",
    desc: "Get group's profile picture",
    category: "group",
    filename: __filename
}, async (conn, mek, m, { from, reply, isGroup }) => {
    try {
        if (!isGroup) {
            return reply("❌ This command only works in groups!");
        }

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(from, 'image');
        } catch (err) {
            try {
                ppUrl = await conn.profilePictureUrl(from);
            } catch (err2) {
                return reply("❌ Group has no profile picture!");
            }
        }

        const groupMetadata = await conn.groupMetadata(from);
        const caption = `🏙️ *Group Profile Picture*\n\n📛 Group: ${groupMetadata.subject}\n👥 Participants: ${groupMetadata.participants.length}\n🔗 Download URL: ${ppUrl}`;
        
        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: caption,
            quoted: mek
        });

        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error('Group profile picture error:', error);
        reply("❌ Error fetching group profile picture. The group might have no icon.");
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
    }
});
