const { cmd } = require('../command');
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const axios = require('axios');
const FormData = require('form-data');

// ====================== HELPER FUNCTION ======================
// This function safely downloads the image from the WhatsApp chat
async function downloadMedia(message) {
    let type = Object.keys(message)[0];
    let msg = message[type];
    if (type === 'messageContextInfo') {
        type = Object.keys(message)[1];
        msg = message[type];
    }
    const stream = await downloadContentFromMessage(msg, type.replace('Message', ''));
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
}

// ====================== COMMAND LOGIC ======================
cmd({
    pattern: "upscale",
    alias: ["hd", "enhance", "remini"],
    desc: "Enhances and upscales a low-quality image to HD",
    category: "utility",
    use: ".upscale [reply to image]",
    react: "✨",
    filename: __filename
},
async (conn, mek, m, { from, reply, quoted, pushName }) => {
    try {
        // 1. Check if the user actually replied to an image
        const isImage = mek.message?.imageMessage || (quoted && quoted.mtype === 'imageMessage');
        
        if (!isImage) {
            return reply("❌ Please reply to a low-quality image with `.upscale` to enhance it!");
        }

        // 2. Let the user know the bot is working (AI upscaling takes a few seconds)
        await reply("⏳ *Analyzing and enhancing your image...* Please wait! ✨");

        // 3. Extract and download the image buffer from the quoted message
        const targetMessage = quoted ? quoted.message : mek.message;
        const imageBuffer = await downloadMedia(targetMessage);

        // 4. Send the image to a free AI Upscaling API (using a standard public endpoint)
        // We use FormData to package the image file properly for the internet
        let formData = new FormData();
        formData.append("image", imageBuffer, { filename: "image.jpg", contentType: "image/jpeg" });

        // Note: Using a public open API for image enhancement. 
        // If this specific endpoint ever goes down, you can easily swap the URL.
        const apiResponse = await axios.post('https://api.vyturex.com/upscale', formData, {
            headers: {
                ...formData.getHeaders()
            },
            responseType: 'arraybuffer' // We want the raw image data back, not text
        });

        const enhancedImageBuffer = Buffer.from(apiResponse.data, 'binary');

        // 5. Create a clean caption and send the HD image back
        const caption = `*✨ ALI MD ULTRA HD ✨*\n\nHere is your enhanced image, ${pushName || 'Friend'}! 🚀`;

        await conn.sendMessage(from, { 
            image: enhancedImageBuffer, 
            caption: caption 
        }, { quoted: mek });

    } catch (error) {
        console.error("Upscale Command Error:", error);
        reply("❌ An error occurred while upscaling the image. The image might be too large or the API is currently busy.");
    }
});

console.log("✅ Upscale Plugin Loaded: upscale, hd, enhance");
