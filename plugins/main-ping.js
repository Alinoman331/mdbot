const axios = require("axios");

async function getVideoBuffer(url) {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(res.data);
}
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const fs = require("fs");

// DYNAMIC BOT NAME SYSTEM - Changes every time
const botNameTemplates = [
    // Standard Styles
    { name: "𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗", type: "script" },
{ name: "ᴾᴿᴼˣᴬᴮᴰᵁᴸᴸᴬᴴ", type: "smallcaps" },
{ name: "𝕻𝕽𝕺𝖝𝕬𝕭𝕯𝖀𝕷𝕷𝕬𝕳", type: "boldfraktur" },
{ name: "𝔓𝔯𝔬𝔵𝔄𝔅𝔇𝔘𝔏𝔏𝔄ℌ", type: "fraktur" },
{ name: "✿𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗✿", type: "flowers" },
{ name: "꧁𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯꧂", type: "bamboo" },

    
    // New Unique Styles
    { name: "༺P⃟R⃟O⃟x⃟A⃟B⃟D⃟U⃟L⃟L⃟A⃟H⃟༻", type: "circle" },
{ name: "『𝐏𝐑𝐎𝐱𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇』", type: "bold" },
{ name: "【ＰＲＯｘＡＢＤＵＬＬＡＨ】", type: "fullwidth" },
{ name: "≛PROxABDULLAH≛", type: "star" },
{ name: "『ᴘʀᴏˣᴀʙᴅᴜʟʟᴀʜ』", type: "small" },
{ name: "『ᑭᖇO᙭ᗩᗷᗪᑌᒪᒪᗩᕼ』", type: "box" },
{ name: "⟦𝙿𝚁𝙾𝚡𝙰𝙱𝙳𝚄𝙻𝙻𝙰𝙷⟧", type: "mono" },
{ name: "『𝘗𝘙𝘖𝘹𝘈𝘉𝘋𝘜𝘓𝘓𝘈𝘏』", type: "italic" },
{ name: "『𝙋𝙍𝙊𝙭𝘼𝘽𝘿𝙐𝙇𝙇𝘼𝙃』", type: "boldsans" },
{ name: "『𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗』", type: "scriptbold" },
{ name: "『𝕻𝖗𝖔𝖝𝕬𝕭𝕯𝖀𝕷𝕷𝕬𝕳』", type: "frakturbold" },
{ name: "『🅟🅡🅞🅧🅐🅑🅓🅤🅛🅛🅐🅗』", type: "negative" },
{ name: "『🄿🅁🄾🅇🄰🄱🄳🅄🄻🄻🄰🄷』", type: "squared" },
{ name: "『🅿🆁🅾🆇🅰🅱🅳🆄🅻🅻🅰🅷』", type: "sans" },
{ name: "『🇵 🇷 🇴 🇽 🇦 🇧 🇩 🇺 🇱 🇱 🇦 🇭』", type: "flags" },
{ name: "『P҉R҉O҉x҉A҉B҉D҉U҉L҉L҉A҉H҉』", type: "sparkles" },
{ name: "『P⃣R⃣O⃣x⃣A⃣B⃣D⃣U⃣L⃣L⃣A⃣H⃣』", type: "keycap" },
{ name: "『P⃠R⃠O⃠x⃠A⃠B⃠D⃠U⃠L⃠L⃠A⃠H⃠』", type: "slash" },
{ name: "『P̶r̶o̶x̶A̶b̶d̶u̶l̶l̶a̶h̶』", type: "strike" },
{ name: "『P̾r̾o̾x̾A̾b̾d̾u̾l̾l̾a̾h̾』", type: "zigzag" },
{ name: "『P̲r̲o̲x̲A̲b̲d̲u̲l̲l̲a̲h̲』", type: "underline" },
{ name: "『P̳r̳o̳x̳A̳b̳d̳u̳l̳l̳a̳h̳』", type: "doubleline" },
{ name: "『P͓̽r͓̽o͓̽x͓̽A͓̽b͓̽d͓̽u͓̽l͓̽l͓̽a͓̽h͓̽』", type: "shadow" },
{ name: "『P̆r̆ŏx̆Ăb̆d̆ŭl̆l̆ăh̆』", type: "arc" },
{ name: "『P͜͡r͜͡o͜͡x͜͡A͜͡b͜͡d͜͡u͜͡l͜͡l͜͡a͜͡h͜͡』", type: "ligature" },
{ name: "『P⃤R⃤O⃤x⃤A⃤B⃤D⃤U⃤L⃤L⃤A⃤H⃤』", type: "triangle" },
{ name: "『P̺͆R̺͆O̺͆x̺͆A̺͆B̺͆D̺͆U̺͆L̺͆L̺͆A̺͆H̺͆』", type: "subtext" },
{ name: "『P⃟R⃟O⃟x⃟A⃟B⃟D⃟U⃟L⃟L⃟A⃟H⃟』", type: "circlefill" },
{ name: "『P⃦R⃦O⃦x⃦A⃦B⃦D⃦U⃦L⃦L⃦A⃦H⃦』", type: "dotted" },
{ name: "『P⃧R⃧O⃧x⃧A⃧B⃧D⃧U⃧L⃧L⃧A⃧H⃧』", type: "parentheses" },
{ name: "『P⃨R⃨O⃨x⃨A⃨B⃨D⃨U⃨L⃨L⃨A⃨H⃨』", type: "diamond" },
{ name: "『P⃩R⃩O⃩x⃩A⃩B⃩D⃩U⃩L⃩L⃩A⃩H⃩』", type: "asterisk" },
{ name: "『P⃪R⃪O⃪x⃪A⃪B⃪D⃪U⃪L⃪L⃪A⃪H⃪』", type: "double" },
{ name: "『P⃫R⃫O⃫x⃫A⃫B⃫D⃫U⃫L⃫L⃫A⃫H⃫』", type: "triple" },
{ name: "『P⃬R⃬O⃬x⃬A⃬B⃬D⃬U⃬L⃬L⃬A⃬H⃬』", type: "quadruple" },
{ name: "『P⃭R⃭O⃭x⃭A⃭B⃭D⃭U⃭L⃭L⃭A⃭H⃭』", type: "circleoutline" },
{ name: "『P⃮R⃮O⃮x⃮A⃮B⃮D⃮U⃮L⃮L⃮A⃮H⃮』", type: "square" },
{ name: "『P⃯R⃯O⃯x⃯A⃯B⃯D⃯U⃯L⃯L⃯A⃯H⃯』", type: "diamondsolid" },
{ name: "『P⃰R⃰O⃰x⃰A⃰B⃰D⃰U⃰L⃰L⃰A⃰H⃰』", type: "asteriskfill" }

];

// Get random bot name
function getRandomBotName() {
    return botNameTemplates[Math.floor(Math.random() * botNameTemplates.length)].name;
}

// ORIGINAL PING COMMAND (Your ping2 renamed as ping)
cmd({
    pattern: "ping",
    alias: ["speed"],
    desc: "Clean animated ping command",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply, sender, pushname }) => {
    try {

        const start = Date.now();

        await reply("⚡ Pinging system...");

        await new Promise(r => setTimeout(r, 700));

        const end = Date.now();
        const ping = end - start;

        const emojis = ["⚡", "🚀", "🔥", "💎", "✨"];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        let status = "FAST";
        if (ping > 300) status = "NORMAL";
        if (ping > 700) status = "SLOW";

        const text =
`╭━━〔 ⚡ *PING RESULT* 〕━━╮
┃ *⏱️ Speed:* ${ping} ms
┃ *📊 Status:* ${status}
┃ *${emoji} Node:* ACTIVE
╰━━━━━━━━━━━━━━━╯

*👤 User: *${pushname || "User"}
*📱 Number:* ${sender.split("@")[0]}
*🖥️ RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)} MB
*⚙️ CPU:* ${os.cpus().length} Core

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ α𝙻𝙸_𝙼𝙳*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],

                forwardingScore: 999,
                isForwarded: true,

                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363409858415673@newsletter",
                    newsletterName: "α𝙻𝙸_𝙼𝙳",
                    serverMessageId: 1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log("PING ERROR:", e);
        reply("❌ Ping failed");
    }
});
