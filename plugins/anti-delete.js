const { cmd } = require('../command');
const { getAnti, setAnti } = require('../data/antidel');

cmd({
    pattern: "antidelete",
    alias: ['antidel'],
    desc: "toggle anti delete",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { reply, text, isCreator }) => {

    if (!isCreator) return reply("Only owner");

    const status = await getAnti();

    if (!text || text === "status") {
        return reply(`ANTI-DELETE: ${status ? "ON" : "OFF"}`);
    }

    if (text === "on") {
        await setAnti(true);
        return reply("Anti-delete ON");
    }

    if (text === "off") {
        await setAnti(false);
        return reply("Anti-delete OFF");
    }

    return reply("Use: on / off / status");
});
