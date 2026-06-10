const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpFaTR2NDN3SWpHNzliVlNTMFk5N2RaMS95dE1xa0dJa2NqQnRNRTgxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaERCM0U1aTl5NHA1Tm1YRjJjbExpUWlGWGxTMUFRRDVRbzdqRnl1eWNCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSTNBN3lFaDZTWTVIK1YwbU9yNyt0ZnhGQjBwR25XczBJL2lZTDFlSEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRVM3UW5ZS09GVXdHMDd6ZlNhQ05vQ2wvaFFEalVaN3dWRUZTL3grK20wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMcUdrVUpSbWJBNTNnTk03bEtobVE3YnQvanEzYnp2QTY1WGhUVkp5V289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE2aWFXWXlPYmpqaW5TakgzS1BLVWxoYzRTWldVZVFkU3hZZ1EveUlMWHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNDWHpGdTNOL2hoZS9LRnUrOWRvdk13UW5lTVJ2OVNtbjV1bU5vZ1hFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1kwVTZ4ZTVZVktpa2NVL0lFSlppTTJLTkVvSnhNWnBVamRKeStDeS9pST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJEenN2NEJ0S05kdjViOXBKS1lZUGRwWW1iWW1yYXBkNmpETXNFTGV2Vy9NWTB2UlhRVmJDeU9GMU5hUTNCS1hMbTREdDIyRGlFN3lPblZ6THROV0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IitpNzNUdXBiV2pOUVlYYkV1bkxtM1VtK0tGaGNjMkNmS2RiVFZPdSsycUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjg4MDA0NDQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0JCNkZGQzgzMkQ2QzUxODQ4Q0E2NDM4ODUwQ0U5QiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMDczOTY5fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlhOU0VGSFRKIiwibWUiOnsiaWQiOiI5MjMyODgwMDQ0NDg6NTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MzQ2Mjg1MDQzNzk5OjU5QGxpZCIsIm5hbWUiOiLOsfCdmbvwnZqSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdmx2Y2NGRUtpUXBORUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvTHhhMDhaUTFzdU5DWVRZMUZTeEJaTjNXZUJHcStYenlvZ3dmS3JpOGdzPSIsImFjY291bnRTaWduYXR1cmUiOiJQWDlYbWE1R0pjaGFrcW5vNzlOcHMrZm0wTzc3b2V2MC9jb1J3V0NzbWRpNEFCcXVNelYrTWJodGtiTHoyRktHbXpDTnBaWnhhZEpqM1hHd0RjOVhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQTFMc29EUGF3dXQ4QWdwNW44WFhyMEhzMHBQaExzK1c1UXloNS9qMHlOdFhaYTdUa1JMZXNTdkswaG1rTDJKaGdSUm9IWm92RjgvTHl4dnR1MEkyQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MzQ2Mjg1MDQzNzk5OjU5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmeThXdFBHVU5iTGpRbUUyTlJVc1FXVGQxbmdScXZsODhxSU1IeXE0dklMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWdnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODEwNzM5NjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWJVIn0=", // add your Session Id 
    
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
