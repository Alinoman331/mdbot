const { cmd } = require('../command');
const axios = require('axios');

// We create an array of all the actions we want to build
const actions = [
    { name: 'kiss', emoji: '😘', actionText: 'kissed' },
    { name: 'hug', emoji: '🫂', actionText: 'hugged' },
    { name: 'slap', emoji: '🖐️', actionText: 'slapped' },
    { name: 'pat', emoji: '🥺', actionText: 'patted' }
];

// This loop automatically creates a unique command for every action above!
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
            // 1. Figure out who we are targeting
            const mentionedUsers = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
            let targetName = "everyone";
            let mentions = [];

            if (mentionedUsers.length > 0) {
                targetName = `@${mentionedUsers[0].split('@')[0]}`;
                mentions = mentionedUsers; // Save mentions to tag them in the message
            } else if (q) {
                targetName = q; // If they just typed a name without @
            }

            // 2. Fetch the random GIF from the stable Nekos API
            const apiUrl = `https://nekos.best/api/v2/${action.name}`;
            const response = await axios.get(apiUrl);
            
            // 3. Extract the image URL from the API response
            const gifUrl = response.data.results[0].url;

            // 4. Create a cute caption
            const caption = `${action.emoji} *${pushName || 'Someone'}* ${action.actionText} *${targetName}*!`;

            // 5. Send it to the chat as an autoplaying GIF
            await conn.sendMessage(from, { 
                video: { url: gifUrl }, 
                gifPlayback: true,
                caption: caption,
                mentions: mentions
            }, { quoted: mek });

        } catch (error) {
            console.error(`${action.name} Command Error:`, error);
            reply(`❌ Oops! Failed to fetch the ${action.name} GIF. Please try again!`);
        }
    });
});

console.log("✅ Anime Actions Plugin Loaded: kiss, hug, slap, pat");
