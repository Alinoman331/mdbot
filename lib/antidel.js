const { isJidGroup } = require('@whiskeysockets/baileys');

const AntiDelete = async (conn, update) => {
    try {
        const id = update.key?.id;
        if (!id) return;

        // GET MESSAGE FROM REAL BAILEYS STORE
        const msg = global.store?.loadMessage(update.key.remoteJid, id);

        if (!msg) return;

        const sender = (msg.key.participant || msg.key.remoteJid)?.split('@')[0];
        const deleter = (update.key.participant || update.key.remoteJid)?.split('@')[0];

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "MEDIA MESSAGE";

        const finalMsg =
`🚨 ANTI-DELETE ALERT

👤 Sender: @${sender}
🗑️ Deleted By: @${deleter}
💬 Message: ${text}`;

        await conn.sendMessage(conn.user.id, {
            text: finalMsg,
            mentions: [
                sender + "@s.whatsapp.net",
                deleter + "@s.whatsapp.net"
            ]
        });

    } catch (e) {
        console.log("AntiDelete Error:", e.message);
    }
};

module.exports = { AntiDelete };
