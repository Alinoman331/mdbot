const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "uptime",
    alias: ["runtime", "up"],
    desc: "Show bot uptime (clean + animated styles)",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const startTime = new Date(Date.now() - process.uptime() * 1000);

        // small animation frames
        const spinner = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
        const spin = spinner[Math.floor(Math.random() * spinner.length)];

        // STYLE 1: Modern Clean Box
        const style1 = `
╭━━━『 UPTIME STATUS 』━━━╮
┃ ${spin} Running: ${uptime}
┃ 🕒 Started: ${startTime.toLocaleString()}
┃ ⚡ Status: Online
╰━━━━━━━━━━━━━━━━━━━━━━╯
${config.DESCRIPTION}`.trim();

        // STYLE 2: Minimal Clean
        const style2 = `
⏱️ UPTIME REPORT
────────────────
• ${uptime}
• Since: ${startTime.toLocaleTimeString()}
• Bot: ${config.BOT_NAME}
────────────────`.trim();

        // STYLE 3: Animated Feel
        const style3 = `
╔═⟦ ${spin} LIVE STATUS ⟧═╗
║ ⏳ ${uptime}
║ 🕰️ ${startTime.toLocaleString()}
║ 📡 ${config.BOT_NAME} ONLINE
╚══════════════════╝`.trim();

        const styles = [style1, style2, style3];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, {
            text: selectedStyle,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363409858415673@newsletter',
                    newsletterName: config.OWNER_NAME || 'α𝙻𝙸_𝙼𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
