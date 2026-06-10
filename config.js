const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJSTWtaU2VMWk1YdFFlSTc0WGc5QUtDd0hvbEx2a1M3ZGpla0daS3kzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVZKTlV4Q3VSOUNlditoNlY0TVc3dTlHVG9pZnV6bHpVOEpKT0VZWVZFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR210SHA1ZnNBbDdkVXhyMlRZd1I2RXp5bGplNHdaODlXVHdaY2REMW44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SlIzbjJUWlZnRlliMEVvbTdOSEhoQ3hLSy93cjh6VTU0dzhmTzZmVnlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOeU4vVFk3emV6L0w2akJDa0ZXUmJnL3YrMkFHbStTS2EzWUlvcnE4WFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhCc0hLR0U1SFFIM2hBK0pwa0RNNmp3aXFrdjJNd0VELzd2ZXNrUVFaZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5jU3owajNDTFhtTWNJSTdYWXVtQXZRYlBuSUJOSDB2azEzWUNjZWZYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFBqcjF4VnRhNDF1QUozVUlPS3BUUVNNYzYzdjQwQ0ZNUEJId2JGSExHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCOGdpTTd3a3JRUGUrSHAvcFJFN3UyYkZPaUxaOHJtaWVjV3FMWitZaWwxdzREby81NEdUcVZWaCtQYUJ5elJITDBPd2gzb3hsQnVmektZQVR0Tml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6ImJsWkVRRVB0N081NGFXOWkwNzBhZitZTXpUS0lTTW1hK3RSa2dOMHRPSms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM2MDMwMDYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0M3MzFBMjNDNDU2NDAyQzkwRDVCNDRDMDFFNDYyRCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMDkyOTk0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMzYwMzAwNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMjc2MDU5RTcwRDE1NDQ4OTA2NkFDN0EyRDYxNkU5IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODEwOTI5OTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzNjAzMDA2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM1MjMyM0E5QkMzMTZFNkMwNDEyQ0Q1OTY4M0I0MzAiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTA5Mjk5NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM2MDMwMDYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzM2NjY0MEMxQkNDRTNDRDVBMzA0N0M3OTIxRDE1MiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMDkyOTk2fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilk5MkZXTUwxIiwibWUiOnsiaWQiOiI5MjMwMzYwMzAwNjA6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1OTE5MzYxNzE3ODc3NTo1QGxpZCIsIm5hbWUiOiLOsduU25TblOKYhO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2Y3L0lNRUVQeWtwZEVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaGExRjlSaWQvZFFKWGpud2F6TUZnZHBNQy9HL1ZNTEIyVmp2dnI0NTRXOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHp4d1dJMUlUVEE0dklxbWdqK0tPc3ROcVhSeGt1dEVLVTNUS0hnM29adnhIL0gxZWJvN01pZUNSeEFDQmlKZ0FOa0FFMERKVmNrYU0reGsyWUw0Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlV5ckFvZ2JjRXhYd3h2SnQ1dUtsNGdHNE5WQTg3NHNZLzVJdEZ0M1lKblRWUTg3c2JuWkxVcFlxVE94Yy94MWxaRENwT2RKK1pvQVBrYXEycGM1bGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTU5MTkzNjE3MTc4Nzc1OjVAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllXdFJmVVluZjNVQ1Y0NThHc3pCWUhhVEF2eHYxVEN3ZGxZNzc2K09lRnYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MTA5Mjk5MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNTkcifQ==", // add your Session Id
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY α𝙻𝙸_𝙼𝙳*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE ?? true,
    
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://up6.cc/2026/06/178101799208131.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "α𝙻𝙸_𝙼𝙳",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "α𝙻𝙸_𝙼𝙳",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923036030060",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "α𝙻𝙸_𝙼𝙳",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ α𝙻𝙸_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://up6.cc/2026/06/178101799208131.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive α𝙻𝙸_𝙼𝙳",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923036030060",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
