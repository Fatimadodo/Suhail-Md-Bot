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

  sessionName:process.env.SESSION_ID || "SUHAIL_20_38_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWN2l4eHJSQmkvWTQyUURNZFZIc2Nkd2gwQm90KzlEMDVUSFJ3T2VhRlNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFZU9PZjA0QVR2dUFFandSUVBuSlJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3M2E4ODBkLWQ2NWUtNDVjYi05MmI4LTdiNjBiYmFhYmY1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxNTMsXG4gICAgICAxNjcsXG4gICAgICAyMzUsXG4gICAgICAxNSxcbiAgICAgIDEzMyxcbiAgICAgIDE0NCxcbiAgICAgIDk2LFxuICAgICAgMjEyLFxuICAgICAgMTcxLFxuICAgICAgOTUsXG4gICAgICAxMzMsXG4gICAgICA5NyxcbiAgICAgIDE2NCxcbiAgICAgIDIwLFxuICAgICAgMTYwLFxuICAgICAgMTYwLFxuICAgICAgOTMsXG4gICAgICA5NixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDMwLFxuICAgICAgMTYwLFxuICAgICAgMjM0LFxuICAgICAgMjMsXG4gICAgICAyNDYsXG4gICAgICAyMzIsXG4gICAgICAxNzUsXG4gICAgICAxNzIsXG4gICAgICAxNDYsXG4gICAgICAyMjIsXG4gICAgICAxNDksXG4gICAgICAxNTMsXG4gICAgICA4NSxcbiAgICAgIDExMyxcbiAgICAgIDIwMixcbiAgICAgIDIwOCxcbiAgICAgIDI1MixcbiAgICAgIDIyMixcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQTVSUVZEUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDY3NDgzNDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRvZG9jb2xsZWN0aW9uc1wiLFxuICAgIFwibGlkXCI6IFwiMTUxMDI4MjQ2ODMxMTY4OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1ajQ2Y0NFTXE2dDdjR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWFxQWg1Tk5GSHlBZXZUQXJwbVUxd1h0VmJrUkVxU0JwajUvNWRlMnltND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMOGkxWkxOOW9Fa1NFNG05TUljMWUvb3JrclljRnlWNUxBY1F2anBWNG1wRVFmdHVnaVdRZUxhL0QxZ2pYRUJTYk9MNGlnNGN6MTNCZTltNExxcXdCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmOWZXVDlYZXFnenpyYmVETFhaKzRaUEpEQWtKeFRNQWFKUGxwek52UnQzeHJDdFh0d3lUUTgyNnRBS0oxeGxqMlBvbkFJRnhNcVFvODBiQUIxdHhnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwNjc0ODM0OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2ODY0NzE4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
