const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"ALI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBWeElvNEpsdEhCM0x3ZFdidmhaSysxL2lUenk4ZkZOOVF2dzNaUUlrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnNHZS9jbnhkZjhpd1YxS205T3JoRnJGVnU3REgvc0VFZGxjSlJVY0dIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTGdMRVJxMVRBemFZYVNHdEtwTVAyNWJjUytUY3ZMS1h6c3o3bVdKYVdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCaW9ETStXQng0V1V4Vm50OHJzb29BUHZFMnYwbDNyU1Z1TFp6U29tU1d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLMFhqSFBRNlB4U2pabldvQkRGUjdVaGJVUmtYcmZJL3VHaW82SW5qRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY0TlN4ak81MmZYMHJWWUF2ejdQMlQwb05iRWFmalluNVpkRWlNdWpHSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dNZVFaTzdtZlBxMWZhNGpWV0NKVEhFblNTZ2s1d1pMbXkvakxHc3gxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlFjdU90djNiVGoxNlhuN2lWc3JlVjNBdjg0U2UxcnlORCtSUGREK0lpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhVVRHVHE3ZkR5NEdjd21WWDVKNmZjSjBzTEo4R0xaRnQvTThnM09iZW53TGpPQWxCQnBRSk53ek1UZmkwL1lrOUtyd0JRanVlZDVXRktsYlBnVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJxbFdvbHNLN0xPa3BPbWcwc1VHUFNzOXVlR1kyMkErbGZuVncwT0tyUWVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzNjAzMDA2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM2QjRCODZCQjJFRjgxNjE2MkZFNTREREM3RjZEODYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTE2NDQyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM2MDMwMDYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzQ3MUQ4NDM4NjI3NDMyRERGM0YwNTg4RDYyODJCRCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxMTY0NDI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMzYwMzAwNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDREZBQzI1MDQ0QUM0M0I0NjAyRUU5MTEwRjVGQTMzIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODExNjQ0Mjd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTEQ0NlpXMjgiLCJtZSI6eyJpZCI6IjkyMzAzNjAzMDA2MDo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU5MTkzNjE3MTc4Nzc1OjdAbGlkIiwibmFtZSI6Is6x25TblNuU4piE77iPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbjcvSU1FRUlIVHFkRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoYTFGOVJpZC9kUUpYam53YXpNRmdkcE1DL0cvVk1MQjJWanZ2cjQ1NFc4PSIsImFjY291bnRTaWduYXR1cmUiOiIzVDVNUDByam4xakw1UU5MdU9LTHNyQmoyeFpTME9ISXFndFhnQzlDYUE3dElsNUtPSm1KTnFmT0NtbzBmL3JzeTZFQjV3WFpSQ21lUHllTGU0OWlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK2NiTHhjWmV4bjRNSm5CVG50WkFoRXYyUHFIQlptVXFMYUd0ZjFnSkdwN3RXRG9DL1F4ekFiU1NXekR4RXoveS95TEo0QU00aE84YnIvK1lnV2FPamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTkxOTM2MTcxNzg3NzU6N0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVd0UmZVWW5mM1VDVjQ1OEdzekJZSGFUQXZ4djFUQ3dkbFk3NzYrT2VGdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgxMTY0NDI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdDaSJ9", // add your Session Id

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
