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
*┌┉「⚡SYSTEM INFO」┉┐*
*│* 👤 *User:* @${sender.split('@')[0]}
*│* 🤖 *Bot:* ${config.BOT_NAME}
*│* ⚙️ *Mode:* ${config.MODE}
*│* ⏱️ *Uptime:* ${runtime(process.uptime())}
*│* 🖥️ *Platform:* ${os.platform()}
*│* 🏷️ *Version:* 1.0.0
*└┉┉┉┉┉┉┉┉┉┉┉┉┘*
`,
        button: {
          text: "❀ α𝙻𝙸_𝙼𝙳 ❀",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178101799208131.png"
      },

{
        title: "𝐔𝐒𝐄𝐅𝐔𝐋𝐋-𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒",
        desc: `
*╭┉┉┉┉┉┉┉┉┉┉━┈⊰*
*┇*❁╭┉┉┉┉┉┉┉━┈⊷
*┇*✾┋. *_antidelete_*
*┇*✾┋. *autoreact*
*┇*✾┋. *_couple or cpp_*
*┇*✾┋. *_hack---😂_*
*┇*✾┋. *_ᴍᴇɴᴜ_*
*┇*✾┋. *_sim or database_*
*┇*✾┋. *_smsbomb or smsbomber_*
*┇*✾┋. *_sᴛɪᴄᴋᴇʀ or s_*
*┇*✾┋. *_setprefix_*
*┇*✾┋. *_ᴡᴇᴀᴛʜᴇʀ_* 
*┇*✾┋. *_sᴀᴠᴇ_*
*┇*✾┋. *_vv or vv2-view-once_*
*┇*✾╰┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉━┈⊰*
`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178111593061651.jpg"
      },


      {
        title: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃",
      desc: `
*╭┉┉┉┉┉┉┉┉┉┉━┈⊰*
*┇*❁╭┉┉┉┉┉┉┉━┈⊷
*┇*✾┋. *_ғᴀᴄᴇʙᴏᴏᴋ_*
*┇*✾┋. *_instagram_*
*┇*✾┋. *_ᴛɪᴋᴛᴏᴋ_* 
*┇*✾┋. *_ᴘɪɴᴛᴇʀᴇsᴛ_*
*┇*✾┋. *_sᴏɴɢ or play_*
*┇*✾┋. *_ᴠɪᴅᴇᴏ_*
*┇*✾┋. *_ɪᴍɢ_*
*┇*✾┋. *_ᴀᴘᴋ or ᴍᴇᴅɪᴀғɪʀᴇ_*
*┇*✾╰┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉━┈⊰*
`,
        button: {
          text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
          
        },
        image: "https://up6.cc/2026/06/178111533227781.jpg"
      },

      {
        title: "𝐎𝐖𝐍𝐄𝐑",
    desc: `
*╭┉┉┉┉┉┉┉┉┉┉━┈⊰*
*┇*❁╭┉┉┉┉┉┉┉━┈⊷
*┇*✾┋. *ping*
*┇*✾┋. *owner*
*┇*✾┋. *set-mode*
*┇*✾┋. *bot=status=alive*
*┇*✾┋. *antilink*
*┇*✾┋. *runtime*
*┇*✾┋. *uptime*
*┇*✾╰┉┉┉┉┉┉┉━┈⊷
*╰┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
        button: {
          text: "𝐎𝐖𝐍𝐄𝐑",
          url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
        },
        image: "https://up6.cc/2026/06/178111568691251.jpg"
      },

      
//       {
//         title: "𝐀𝐈 𝐌𝐄𝐍𝐔",
//         desc: `
// *╭┉┉┉┉┉┉┉┉┉┉┉┉━┈᛭*
// *┇*❁╭┉┉┉┉┉┉┉┉┉━•⟢
// *┇*❁┇ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
// *┇*✾┋ *᛭┉┉┉┈┈┈┈┈┈┉┉┉᛭*
// *┇*✾╰┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊷
// *╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉━┈⊰*`,
//         button: {
//           text: "𝗖𝗛𝗔𝗡𝗡𝗘𝗟",
//           url: "https://whatsapp.com/channel/0029Vb8C0KE6rsQt5xpfZf1m"
//         },
//         image: "https://up6.cc/2026/06/178101799208131.png"
//       },

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
