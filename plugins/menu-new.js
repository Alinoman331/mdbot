const config = require('../config');
const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const {
  generateWAMessageContent,
  generateWAMessageFromContent
} = require('@whiskeysockets/baileys');

cmd({
  pattern: "menu",
  react: "🔥",
  alias: ["m"],
  desc: "Get command list",
  category: "main",
  filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
  try {

    const categories = [
      {
        title: "𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔",
        desc: `

*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*❁┇ʜᴇʟʟᴏ : @${sender.split('@')[0]}
*┇*❁┇ʙᴏᴛ : ${config.BOT_NAME}
*┇*❁┇ᴍᴏᴅᴇ : ${config.MODE}
*┇*❁┇ᴜᴘᴛɪᴍᴇ : ${runtime(process.uptime())}
*┇*❁┇ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
*┇*❁┇ᴠᴇʀsɪᴏɴ : 1.0.0
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*❁┇
*┇*❁╰┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
`,
        button: {
          text: "❀ α𝙻𝙸_𝙼𝙳 ❀",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

      {
        title: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃",
      desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋⬇️󟀠⃟  ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ *_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳_* ⃟⃟ ⃟ ⃟ ⃟ ⃟  ⃟⬇️
*┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *_ғᴀᴄᴇʙᴏᴏᴋ_*
*┇*✾┋. *_ᴘɪɴᴛᴇʀᴇsᴛ_*
*┇*✾┋. *_ᴍᴇᴅɪᴀғɪʀᴇ_*
*┇*✾┋. *_sᴏɴɢ_*
*┇*✾┋. *_ᴛɪᴋᴛᴏᴋ_* 
*┇*✾┋. *_ɢᴅʀɪᴠᴇ_*
*┇*✾┋. *_ᴘʟᴀʏ_*
*┇*✾┋. *_ᴛɪᴋs_*
*┇*✾┋. *_ᴀᴘᴋ_*
*┇*✾┋. *_ᴠɪᴅᴇᴏ_*
*┇*✾┋. *_ɪᴍɢ_*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
          
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

      {
        title: "𝐎𝐖𝐍𝐄𝐑",
    desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋👑󟀠⃟ ⃟ ⃟ ⃟  ⃟ ⃟ ⃟ ⃟ ⃟ *_𝙾𝚆𝙽𝙴𝚁_*  ⃟ ⃟ ⃟ ⃟ ⃟ ⃟  ⃟ ⃟👑
*┇*✾┋*᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *ping*
*┇*✾┋. *owner*
*┇*✾┋. *autoreact* 
*┇*✾┋. *antilink*
*┇*✾┋. *runtime*
*┇*✾┋. *setprefix*
*┇*✾┋. *uptime*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝐎𝐖𝐍𝐄𝐑",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

      {
        title: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓",
        desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋󟀠⃟ ⃟ ⃟ ⃟ ⃟  ⃟ ⃟ *_𝙲𝙾𝙽𝚅𝙴𝚁𝚃_*  ⃟ ⃟ ⃟⃟ ⃟ ⃟ ⃟🔁
*┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *_sᴛɪᴄᴋᴇʀ_*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝗚𝗖",
          url: "https://chat.whatsapp.com/G5EuQGqKK8CGQdreU0bi0i?mode=gi_t"
        },
        image: "https://up6.cc/2026/05/178015055142181.jpg"
      },

      {
        title: "𝐀𝐈 𝐌𝐄𝐍𝐔",
        desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋🤖󟀠⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ *_𝙰𝙸-𝙼𝙴𝙽𝚄_*  ⃟ ⃟ ⃟ ⃟ ⃟ ⃟🤖
*┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *_ʙᴏᴛ_*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

      {
        title: "𝐆𝐑𝐎𝐔𝐏",
        desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋👥󟀠⃟  ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ *_𝙶𝚁𝙾𝚄𝙿_* ⃟ ⃟ ⃟  ⃟ ⃟ ⃟ ⃟👥
*┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *_ᴏɴʟɪɴᴇ_*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

      {
        title: "𝐎𝐓𝐇𝐄𝐑",
        desc: `
*╭┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
*┇*❁╭┉┉┉┉┉┉┉┉┉┉┉┉┉━•⟢
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇⚘┇❀┇
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇❀┇  🅓⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇⚘┇  🅜⃞
*┇*❁┇⚘┇❀┇⚘┇❀┇  🅘⃞
*┇*❁┇⚘┇❀┇⚘┇  🅛⃞
*┇*❁┇⚘┇❀┇  🅐⃞
*┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋🧩 ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ *_𝙾𝚃𝙷𝙴𝚁_*  ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ ⃟ 🧩
*┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
*┇*✾┋. *_ᴡᴇᴀᴛʜᴇʀ_* 
*┇*✾┋. *_sᴀᴠᴇ_*
*┇*✾┋. *_ᴍᴇɴᴜ_*
*┇*✾┋. *_ɢɪɴғᴏ_*
*┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      }
    ];

    const cards = [];
    for (let i = 0; i < categories.length; i++) {
      const item = categories[i];

      const img = (await generateWAMessageContent(
        { image: { url: item.image } },
        { upload: conn.waUploadToServer }
      )).imageMessage;

      cards.push({
        header: { title: item.title, hasMediaAttachment: true, imageMessage: img },
        body: { text: item.desc },
        footer: { text: `📖 Page ${i + 1} of ${categories.length}` },
        nativeFlowMessage: {
          buttons: [{
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: item.button.text,
              url: item.button.url,
              merchant_url: item.button.url
            })
          }]
        }
      });
    }

    const msg = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "⿻l ꙰❀ ᴬᴸᴵ - ᴹᴰ ❀ ꙰⿻" },
              footer: { text: "Swipe ⬅️➡️ to explore all commands" },
              carouselMessage: { cards }
            }
          }
        }
      },
      { quoted: mek }
    );

    await conn.relayMessage(from, msg.message, {
      messageId: msg.key.id
    });

  } catch (e) {
    console.error("MENU ERROR:", e);
    reply("❌ Menu can't be load");
  }
});
