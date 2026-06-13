const { cmd } = require('../command');

// A mini-database of direct, safe GIF URLs that the bot will convert into stickers
const stickerData = {
    kiss: {
        emoji: '😘',
        urls: [
            "https://i.giphy.com/media/G3va31oGhenUZx14CB/giphy.gif",
            "https://i.giphy.com/media/FqWAhOulhvl16/giphy.gif",
            "https://i.giphy.com/media/nyzO7EhwQWlzi/giphy.gif"
        ]
    },
    hug: {
        emoji: '🫂',
        urls: [
            "https://i.giphy.com/media/3M4NpbLCTxBqU/giphy.gif",
            "https://i.giphy.com/media/lrr9VkEEeP4TC/giphy.gif",
            "https://i.giphy.com/media/wnsgren9NtITS/giphy.gif"
        ]
    }
};

// Automatically create commands for both .kiss and .hug
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
            // 1. Pick a random URL from the list
            const randomStickerUrl = data.urls[Math.floor(Math.random() * data.urls.length)];
            
            // 2. Send it directly as a sticker! 
            await conn.sendMessage(from, { 
                sticker: { url: randomStickerUrl } 
            }, { quoted: mek });

        } catch (error) {
            console.error(`${action} Sticker Error:`, error);
            reply(`❌ Oops! Failed to send the ${action} sticker.`);
        }
    });
});

console.log("✅ Sticker Actions Plugin Loaded: kiss, hug");
