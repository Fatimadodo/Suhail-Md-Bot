const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020674834";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_32_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLYldIY3VKZzJKUjROSHF5WjZmeGE1NUZqRjJ0aG9IVmZ1MjlOWDBOMm9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOZFlBWTBrN1FFR19oZkhkWkhKeUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlNDIwZmQ0LTc1ZWMtNGVkYi04ZTVhLWYxYzIxNmYxOTBhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAyMzQsXG4gICAgICAxMjYsXG4gICAgICAyMTYsXG4gICAgICAzNixcbiAgICAgIDMxLFxuICAgICAgMTYwLFxuICAgICAgMjUwLFxuICAgICAgMjQ4LFxuICAgICAgMTI3LFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgNjEsXG4gICAgICAzNCxcbiAgICAgIDk2LFxuICAgICAgMjksXG4gICAgICA5MixcbiAgICAgIDE5NyxcbiAgICAgIDEzMyxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyNDUsXG4gICAgICAyMjMsXG4gICAgICAyMTEsXG4gICAgICA2NCxcbiAgICAgIDkxLFxuICAgICAgMzMsXG4gICAgICAyLFxuICAgICAgMTQ3LFxuICAgICAgMjAzLFxuICAgICAgNTIsXG4gICAgICA0NSxcbiAgICAgIDYxLFxuICAgICAgNzYsXG4gICAgICAxOTMsXG4gICAgICA0MixcbiAgICAgIDIwNyxcbiAgICAgIDI3LFxuICAgICAgNjQsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwyVkMzU1lFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIwNjc0ODM0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRG9kb2NvbGxlY3Rpb25zXCIsXG4gICAgXCJsaWRcIjogXCIxNTEwMjgyNDY4MzExNjg6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNrNDZjQ0VNK2svcmdHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJYXFBaDVOTkZIeUFldlRBcnBtVTF3WHRWYmtSRXFTQnBqNS81ZGUyeW00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRqeE15dHgwdjUzNlc0dUM2azQ2eXkvWXo2bTlVRmxGbUhHMzE2RlpqakxYanVPQUdmak0xK3hsYTVLVUhOenQyOVRXcjlvMjNNL3ZscEptcEJ6akJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF6VmlMRktwRk9Scm9zdmRWT1I1TzhxSjFjQTBCelRDblc2a1ZVNmd5YjF0aVpHdy9STUhSQ1g2MzhJZGl5RFduUWFaVU9JRlNqekxzckVYVEh3Q2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjA2NzQ4MzQ6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAxMjIzMjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
