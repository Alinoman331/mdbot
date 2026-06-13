const { cmd } = require('../command');

cmd({
    pattern: "getprofile",
    alias: ["pp", "profilepic", "picture"],
    react: "📷",
    desc: "Get user's profile picture",
    category: "utility",
    filename: __filename
// Yahan humne "isGroup" ko add kiya hai taake bot ko pata chale chat group hai ya inbox
}, async (conn, mek, m, { from, args, reply, sender, isGroup }) => {
    try {
        let userId;
        
        // 1. Agar kisi ke message ka reply kiya hai
        if (mek.message?.extendedTextMessage?.contextInfo?.participant) {
            userId = mek.message.extendedTextMessage.contextInfo.participant;
        } 
        // 2. Agar kisi ko @ tag kiya hai (Fixed for Baileys)
        else if (mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userId = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        }
        // 3. Agar kisi ka number type kiya hai
        else if (args[0] && args[0].match(/\d+/)) {
            const number = args[0].replace(/[^0-9]/g, '');
            userId = number + '@s.whatsapp.net';
        }
        // 4. Default: Agar kuch nahi diya
        else {
            // Agar chat inbox (private) hai toh saamne wale ki DP laye, warna group mein aapki apni DP
            userId = isGroup ? sender : from;
        }

        // DP fetch karna
        const ppUrl = await conn.profilePictureUrl(userId, 'image');
        
        if (!ppUrl) {
            return reply("❌ Profile picture not found or user has hidden it.");
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
        
        if (error.message?.includes('404') || error.message?.includes('not found')) {
            reply("❌ Saamne wale ki DP private hai ya usne koi DP nahi lagayi hui.");
        } else {
            reply("❌ Error fetching profile picture. Please try again.");
        }
        
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
    }
});

// Group profile picture command (Yeh bilkul theek tha)
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

        const ppUrl = await conn.profilePictureUrl(from, 'image');
        
        if (!ppUrl) {
            return reply("❌ Group has no profile picture!");
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
