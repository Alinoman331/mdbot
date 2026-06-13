const { cmd } = require('../command');
const axios = require('axios');

const actions = [
    { name: 'kiss', emoji: '😘', actionText: 'kissed' },
    { name: 'hug', emoji: '🫂', actionText: 'hugged' },
    { name: 'slap', emoji: '🖐️', actionText: 'slapped' },
    { name: 'pat', emoji: '🥺', actionText: 'patted' }
];

actions.forEach(action => {
    cmd({
        pattern: action.name,
        desc: `Send an anime ${action.name} GIF to someone`,
        category: "fun",
        use: `.${action.name} [@user]`,
        react: action.emoji,
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

            // 🌟 FIX 1: Switched to Waifu.pics API (Bulletproof and server-friendly)
            const apiUrl = `https://api.waifu.pics/sfw/${action.name}`;
            
            // Added headers to pretend we are a browser, preventing API blocks
            const response = await axios.get(apiUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            
            const gifUrl = response.data.url;
            const caption = `${action.emoji} *${pushName || 'Someone'}* ${action.actionText} *${targetName}*!`;

            // 🌟 FIX 2: The Double-Send Fallback
            try {
                // First, try sending as an autoplaying GIF video
                await conn.sendMessage(from, { 
                    video: { url: gifUrl },
                    gifPlayback: true,
                    caption: caption,
                    mentions: mentions
                }, { quoted: mek });
            } catch (videoError) {
                // If the server lacks FFmpeg and crashes, silently catch it and send as an image instead!
                await conn.sendMessage(from, { 
                    image: { url: gifUrl },
                    caption: caption,
                    mentions: mentions
                }, { quoted: mek });
            }

        } catch (error) {
            console.error(`${action.name} Command Error:`, error);
            reply(`❌ Oops! API connection failed. Please try again!`);
        }
    });
});

console.log("✅ Anime Actions Plugin Loaded: kiss, hug, slap, pat");
