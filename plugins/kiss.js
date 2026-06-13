const { cmd } = require('../command');

const stickerData = {
    kiss: {
        emoji: '😘',
        // Notice we wrapped the GIF link in the wsrv.nl proxy to force it into a .webp!
        urls: [
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/f5/16/74/f51674406082b9a1db6972740fc51179.gif&output=webp&n=-1",
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/7e/8e/31/7e8e310cb233d5267a1bfdc5c9d2eb05.gif&output=webp&n=-1"
        ]
    },
    hug: {
        emoji: '🫂',
        urls: [
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif&output=webp&n=-1",
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/f5/16/74/f51674406082b9a1db6972740fc51179.gif&output=webp&n=-1",
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/7e/8e/31/7e8e310cb233d5267a1bfdc5c9d2eb05.gif&output=webp&n=-1",            
            "https://wsrv.nl/?url=https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif&output=webp&n=-1"
        ]
    }
};

Object.keys(stickerData).forEach(action => {
    const data = stickerData[action];
    
    cmd({
        pattern: action,
        desc: `Send a romantic ${action} sticker`,
        category: "fun",
        use: `.${action}`,
        react: data.emoji,
        filename: __filename
    },
    async (conn, mek, m, { from, reply }) => {
        try {
            const randomStickerUrl = data.urls[Math.floor(Math.random() * data.urls.length)];
            
            // Sending the pre-converted webp file directly
            await conn.sendMessage(from, { 
                sticker: { url: randomStickerUrl } 
            }, { quoted: mek });

        } catch (error) {
            console.error(`${action} Sticker Error:`, error);
            reply(`❌ Server conversion failed again.`);
        }
    });
});

console.log("✅ Cloud-Converted Sticker Actions Loaded");
