const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PROxABDULLAH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhOSUFQMXlYVGIxRlhNckRkY2JEZlI1TUU2YkZob0c3N0haekNPd2tIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkZoNnhBMFk1RTVEZDU0a0RFdmlJT3Vadk15MmNhS3hkUGNONWl2Z3kxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTDhiZFpUWVhlaVcyUTdzYm55aTU5Y1pvRHAxdGlBdW5UTFJnRG1EMEVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQW9aS2cxakZWYUQxMk5KSlRrdHhBRThvb25LQk1Wam1BeC8rbmxpaGhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGVkJneXBVdUdnMjF6emJzdW9lMGNPOEt0MHMyNHU5aVF1OEgwRXAwbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvK2xXQjlvMDZiL1ZBdWpXb2s3VkI5M3pQeE9YaGZ2QnZWYzFQUk4zejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JSU2pVTkx1UWNMMlhVdWFBYURydTQ0SmZETHVSU2hEMDVPdlZpd1Uydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1paNnUva0JOUzRxSlNFaHVTeWVKTXBsVWhtUjNuQVN6ZGtTa212UWltZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpJSXhnRkc3N2ZOa3dsVHBCTVc5dHM4OGgxT2NZeUJhenY4L2c5OUlVWmhOSjlLS29XNmlDWldTaHBvMHR6SHlPYlBTNGlFLzhuM2I5b1U3QmF1bWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiI0K3oxZmx0Zk9tdklnekNOcXlaQndZaGN4aVRFSXhJRUxOaW5QNWRtMGFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijc5MjIwNzYxMTg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTRCNUMxODNCMDdCMkM1NUIyQjM2RTQxRTIzRTZGRiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgwNDkwOTg4fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijc5VjZFNUxSIiwibWUiOnsiaWQiOiI3OTIyMDc2MTE4NzoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4Hwk4apUMqA4bSPeEHKmeG0heG0nMqfyp/htIDKnPCThqrqp4IiLCJsaWQiOiIzMzE5MTY3NTAzNTg1OToxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3QndEMFE0c1dBMFFZWUZDQUJLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdTWG9hWEdvV2NWV1pzTytBOW5pZ0ZsdnBCM0FrY1hZL040cEFiNC9vRFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQ3Um5OeXlUcTdGcStOcmwyVTFnbDVHaitNTGplYmROSlFvQ0FIV3N6UXY3UklLWWNVNU81cnp2QXY3Z3ByM3ZFL0FFc3JCdHZEMEluMkJiVFBVY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvMGRxSElKUjlhUlJPRTFSczlpYmpsMy9LUVJwdVUwdG9pdlpOditNSVlpYjhUY3RyZzBNcU1vNGl3emJYN0JjUENDVFUza21CZFhCU2pUT0dkQU1nZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjMzMTkxNjc1MDM1ODU5OjE5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRWw2R2x4cUZuRlZtYkR2Z1BaNG9CWmI2UWR3SkhGMlB6ZUtRRytQNkExIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODA0OTA5ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHZ5In0=", // add your Session Id 
    
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
