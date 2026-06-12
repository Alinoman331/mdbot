const { cmd } = require('../command');
const config = require('../config');
const os = require('os');

cmd({
    pattern: "alive",
    alias: ["status", "bot", "online", "check"],
    desc: "🤖 Animated Card Bot Status",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, isGroup }) => {
    try {

        const start = Date.now();

        // ANIMATION FRAME
        const frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
        const spin = frames[Math.floor(Math.random() * frames.length)];

        // SYSTEM INFO
        const totalRAM = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

        const uptime = process.uptime();
        const uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

        const cpu = os.cpus();
        const cpuModel = cpu[0].model.split('@')[0];
        const cores = cpu.length;

        const responseTime = Date.now() - start;

        const speed =
            responseTime < 500 ? "⚡ Ultra Fast" :
            responseTime < 1000 ? "🚀 Fast" :
            "📊 Normal";

        // GREETING
        const hour = new Date().getHours();
        const greet =
            hour < 12 ? "Good Morning 🌅" :
            hour < 17 ? "Good Afternoon ☀️" :
            hour < 21 ? "Good Evening 🌆" :
            "Good Night 🌙";

        let groupInfo = "";
        if (isGroup) {
            const meta = await conn.groupMetadata(from);
            groupInfo = `👥 Members: ${meta.participants.length}`;
        }

        // CARD STYLE UI
        const text = `
╔═════════════════════╗
║         α𝙻𝙸_𝙼𝙳  🤖 ║
╠═════════════════════╣
║ ${spin} BOT STATUS LIVE
╠═════════════════════╣
║ ⚡ Bot: ${config.BOT_NAME || "α𝙻𝙸_𝙼𝙳"}
║ 👑 Owner: ${config.OWNER_NAME || "α𝙻𝙸"}
║ ⏳ Uptime: ${uptimeText}
║ 📡 Speed: ${speed} (${responseTime}ms)
║ 💾 RAM: ${usedRAM}MB / ${totalRAM}GB
║ 🧠 CPU: ${cpuModel} (${cores} cores)
║ 📍 Chat: ${isGroup ? "Group" : "Private"}
${isGroup ? "║ " + groupInfo : ""}
╠═════════════════════╣
║ ${greet}
║ 👤 ${pushname || "User"}
║ 🤖 Status: ONLINE ✅
╚═════════════════════╝
`.trim();

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});
