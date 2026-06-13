const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VkK1hvMTFVK082LzNrb3ZnblMzZ0p0RTB2bXpkdUJ6S0tNRnBZcCsyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJTYUVhS2tRZExPRXBnWk02UXU2QzZ4OHhFSWY3dHRHT2xtVVhMSVltVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTEJXaFc4aFlZM0FmNDlZb0VDcCthaWkwK1F5R0Jud3kzQ2FGUXhqaEc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrd05GdUQvdVZ0MC9lMzFqakZvdkZNM00wcXdzQVRDaG5tRWtEQTlLRERZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMdUk3ZG9DZGZUUE5HZ25mQm1iSWRDM29tNUlRQ1ZKb0JKTXpuL0xPSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik43MGVDK1lNcUxlTENMV01PL1loOWRvWTE3aUs2bW41ZDVpM0c4alFPeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1oQ1RIVmxGVGtYR3lsU0o5MzlyS2s2OGx4RndrK1dYT2NKeUJSNTUxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JNL0JOOVFpdnV2bXRUakt3cjBuSzJQTkFJQjNvY0pha1U0d3pYb0loYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXeFk3a2lQdU0vYjJxMWFDb0x2QmlOeXlRby9senVGaEhabmRLSU43REFlWCtJOHFHL0dKbzQ2bDhDTlhBcG1ORTQ0TmxJR29ad0kyN01VZERKSEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJZUTBKYzN5dm1Iemk2U0JuSnVHY0xSVzZjamRGK253R244V2ZvTm0ycCtZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzNjAzMDA2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMyMzNEQTg4Q0QxMTI2MEU2MDdCNDQ4NTY5RDA0N0YiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTM2NTQ2OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM2MDMwMDYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0ZGQzI4NzkyMUU3QUFGMjI1RkIyMDczQTI0NEIzMiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMzY1NDY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMzYwMzAwNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDNjNCODgzMjhFMEVCMEI0QkQ4Q0UzOTdCQzEwMjYwIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODEzNjU0Njl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzNjAzMDA2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM3RDJFMzMzRTYyRjlFNUFGREQwOTYxNzkyNzA0RTYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTM2NTQ3MH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxM045OVkxTSIsIm1lIjp7ImlkIjoiOTIzMDM2MDMwMDYwOjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTkxOTM2MTcxNzg3NzU6OUBsaWQiLCJuYW1lIjoizrHblNuU25TimITvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ092Ny9JTUVFTlQxdGRFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhhMUY5UmlkL2RRSlhqbndhek1GZ2RwTUMvRy9WTUxCMlZqdnZyNDU0Vzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitYOXd6bE04Y0RyVG9KWi85SThXdXFDbHhsS1VlZDlMS2pqc1pIMHZPSVNaL2VkajJBQVlGcGM5UkpGSnlodGE4T2ZidUZ5NjRmNUlKbklmMHJxd0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBN0MyVDNrMVdpSU5FYXdLaWxFQ0xNNk5vMms0bmhnVGxlbGRaWkw2V0RGSDlQVlBpQnBGQzR6YTViYVZ3TURoakxpbkFvbzhrWE1PRDFIRW9KQVFEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1OTE5MzYxNzE3ODc3NTo5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZV3RSZlVZbmYzVUNWNDU4R3N6QllIYVRBdnh2MVRDd2RsWTc3NitPZUZ2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODEzNjU0NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGdCIn0=", // add your Session Id

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
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
