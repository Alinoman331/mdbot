const { cmd } = require('../command');

// We create our own mini-database of direct GIF links so we don't need APIs!
const actionData = {
    kiss: {
        emoji: '😘', actionText: 'kissed',
        gifs: [
            "https://i.pinimg.com/originals/f5/16/74/f51674406082b9a1db6972740fc51179.gif",
            "https://i.pinimg.com/originals/7e/8e/31/7e8e310cb233d5267a1bfdc5c9d2eb05.gif",
            "https://media1.tenor.com/m/7z1x0zG906QAAAAd/anime-kiss.gif"
        ]
    },
    hug: {
        emoji: '🫂', actionText: 'hugged',
        gifs: [
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
            "https://media1.tenor.com/m/kLZsXyGkWpAAAAAd/anime-hug.gif"
        ]
    },
    slap: {
        emoji: '🖐️', actionText: 'slapped',
        gifs: [
            "https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11fd5040cd8141f62dd4.gif",
            "https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8e0f.gif",
            "https://media1.tenor.com/m/PeJyXy01SKQQAAAd/slap-anime.gif"
        ]
    },
    pat: {
        emoji: '🥺', actionText: 'patted',
        gifs: [
            "https://i.pinimg.com/originals/2e/27/d5/2e27d56f50b1d83ce9e3bce7fb2e2bc1.gif",
            "https://i.pinimg.com/originals/d4/60/a4/d460a4e76a66b7dfbc464b584eb266e9.gif",
            "https://media1.tenor.com/m/Vz5cGLuHcwgAAAAd/pat-anime.gif"
        ]
    }
};

Object.keys(actionData).forEach(actionName => {
    const data = actionData[actionName];
    
    cmd({
        pattern: actionName,
        desc: `Send an anime ${actionName} GIF to someone`,
        category: "fun",
        use: `.${actionName} [@user]`,
        react: data.emoji,
        filename: __filename
    },
    async (conn, mek, m, { from, q, reply, pushName }) => {
        try {
            const mentionedUsers = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
            let targetName = "everyone";
            let mentions = [];

            if (mentionedUsers.length > 0) {
                targetName = `@${mentionedUsers[0].split('@')[0]}`;
                mentions = mentionedUsers;
            } else if (q) {
                targetName = q;
            }

            // 1. Pick a random GIF from our hardcoded list above
            const randomGif = data.gifs[Math.floor(Math.random() * data.gifs.length)];
            
            // 2. Create the custom caption
            const caption = `${data.emoji} *${pushName || 'Someone'}* ${data.actionText} *${targetName}*!`;

            // 3. Send the GIF direct link as an image file so WhatsApp easily digests it
            await conn.sendMessage(from, { 
                image: { url: randomGif },
                caption: caption,
                mentions: mentions
            }, { quoted: mek });

        } catch (error) {
            console.error(`${actionName} Command Error:`, error);
            reply(`❌ Oops! Something went wrong while sending the image.`);
        }
    });
});

console.log("✅ Offline Anime Actions Plugin Loaded: kiss, hug, slap, pat");
