const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NSWU1kc0xId3Y4VkdMZWduR1NwRUw4OE5PVDRsc2JMRk5DSGRYbUtGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGhXdmp4NzVVNk9rRTJnUGZwNkRtNVJXOE9sWlpwZEVudFZabDdydDhIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTy9meFlKTUhBdDRtb0N1OHZicEZGbmlQRWc3cGxmR085VzNUcHV6UEVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpaUNZZFNNeXFNVE1PWjdQakVPa2RhZ1ZLUG1xNVZLbG9VMjBDWnJGRndJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPcUIzcEJRdDlRN0hzTUNWWDBBdmF3RTRlS2JIMnVtUnJDVTBNUmgxbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc4MTRzbE45c1VCS1N3MEdQNFd0NWNTSjVpdGVNTVVobFNsdmdyZEUzQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5VMVcxQWJFWkZwQU9DeFFGZndHRFl3UDBFa2M2QkhjcnA5THpNSnVGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNNVG9mMlUyemp0blgrRC84cXdERTg4Tzlud01kUFViMmpnaHJJQW9CRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ1RDJNcVQwdU9zS2RIQUFhTm9CRlFPN3VlWmZKNnB1OUxVdmdKNWFOT1RBSnNjYWMrWWRFWHNwVUcxVGF3MXBMamhRTnFGSUI3VjNsRlRIaXBRSGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJYSXhpenZrM05QZGxzcldnRlNBYkVZR0VPOGRxalN0T0lKcmxGMVhDSHRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik45OTg3TUZYIiwibWUiOnsiaWQiOiI5MjMyODgwMDQ0NDg6NjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MzQ2Mjg1MDQzNzk5OjYyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXpsdmNjRkVJWFZzTkVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL0x4YTA4WlExc3VOQ1lUWTFGU3hCWk4zV2VCR3ErWHp5b2d3ZktyaThncz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibFgwdFBVTkdWZkNxbTQ3TDl4WHVjb0pieG9aZmRmZEtPU2FYQS8zYWFKL1BnNHpVek5JVWhnLzBtR2lRZVcvUUhhVDdyVWoxOWozQ2hhL0ZOb0M0RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IllvOHVJYVJTeU5ZbG42MkFNQ1lpeEJMNDdpYUV2bnFsZWxjQWsrcENwRU1PZk05K2NJdXRhUnNOTEZZMGhCRHRUaURVOE8vQU00b3RQNGI1dTJVRWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM0NjI4NTA0Mzc5OTo2MkBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnk4V3RQR1VOYkxqUW1FMk5SVXNRV1RkMW5nUnF2bDg4cUlNSHlxNHZJTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgxMjc5MzcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1iZyJ9", // add your Session Id

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
