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

  sessionName:process.env.SESSION_ID || "SUHAIL_12_36_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4bHpRMHVmTW1wSW1nelBYS1JHV2tzTVRpNVphV2xYOE9CM09wbE0waVg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3RU1JZk5HUlE1YXcxSTN6N2g5TWl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3NzljNDUyLTFmNjgtNDliMy04YTExLWMwY2YzNzk0NzQ0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAyMTMsXG4gICAgICAxOCxcbiAgICAgIDIyOSxcbiAgICAgIDE1NSxcbiAgICAgIDExMSxcbiAgICAgIDE2MSxcbiAgICAgIDE4OSxcbiAgICAgIDkyLFxuICAgICAgMTAzLFxuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgNTQsXG4gICAgICAzMSxcbiAgICAgIDE0LFxuICAgICAgMTcwLFxuICAgICAgOCxcbiAgICAgIDIyMixcbiAgICAgIDE4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgNzksXG4gICAgICAxNzAsXG4gICAgICAxNTEsXG4gICAgICA5MSxcbiAgICAgIDcsXG4gICAgICA2LFxuICAgICAgNjUsXG4gICAgICAyMTAsXG4gICAgICA2NyxcbiAgICAgIDIzNSxcbiAgICAgIDUsXG4gICAgICAxMDcsXG4gICAgICAyNTMsXG4gICAgICA5OSxcbiAgICAgIDIwNyxcbiAgICAgIDI0MSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMURSTDdMSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDY3NDgzNDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRvZG9jb2xsZWN0aW9uc1wiLFxuICAgIFwibGlkXCI6IFwiMTUxMDI4MjQ2ODMxMTY4OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDazQ2Y0NFSk9LL3JnR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWFxQWg1Tk5GSHlBZXZUQXJwbVUxd1h0VmJrUkVxU0JwajUvNWRlMnltND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNHhaTUZndmgvL0NXaU5ibktOaWRFajNtbVM1L1dLQ2pJZG81ZG40NWdvQjdvb0FXWEd5QXhXNU9wRXM4TFpXTHVkZjg0dlkrZElKREpKSnlmSzBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFVmxZK2hsbTJibFVEYmJ1Z25QS3ArNktlbC9SbUVvZDVvUHF4RDBsYXJCczR2RTZwbVoxN1ZVNVdjdE5rcmVGaVhJT0JpbjNsdmZyWDFTd1cxdUhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwNjc0ODM0OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTE4OTg3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
