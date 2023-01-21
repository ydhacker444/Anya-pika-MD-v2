const fs = require('fs')

const chalk = require('chalk')

global.botname = "Queen Anya" 

global.botLanguage = "default" // 𝗗𝗲𝗳𝗮𝘂𝗹𝘁 || 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 || 𝗛𝗶𝗻𝗱𝗶 || 𝗔𝗿𝗮𝗯𝗶𝗰 \\

global.author = "𝙋𝙄𝙆𝘼"  

global.packname = "𝙌𝙐𝙀𝙀𝙉✯𝘼𝙉𝙔𝘼✯𝘽𝙊𝙏"  

global.myweb = "https://github.com/PikaBotz" // You can put any link 

global.waterMark = "×͜× King ✘ Pika™ ✓" // Your own watermark 

global.headerText = "Anya by Pika" // text for header of menu         

global.DocumentTitle = "MASTER⚔️PIKA" 

global.ownername = "DevBaloch"   // Owner name //        

global.ownernumber = ['923461253726'] 

global.socialm = "𝗜𝗻𝘀𝘁𝗮 : DevBaloch" // 𝗜𝗻𝘀𝘁𝗮 : || 𝗚𝗶𝘁𝗵𝘂𝗯 : || 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : \\

global.ytname = "YT: Ytname"   // Yt chanel name //

global.continent = "Asia" // your continent name 

global.region = "Pakistan" // your country name

global.state = "Rujhan" // your state name

global.district = "Kashmoor" // your district name

global.timezone = "Shahwali" // search on google if you don't know the timezone of your country //





//------------ 🌟 Premium Users 🌟-------------\\

global.premium = ['923461253726','923461253726']  // available soon

global.sudo = ['923461253726','923461253726']  // Co - Owners //

global.prefa = ['-','🥵','🔥']

//--------Random bot name for Info section--------\\

name16 = "𓄂⍣⃝ 🇦𝚗𝚢𝚊 𓆩×͜×𓆪ꪾ️"

name17 = "*Λ⃝ͷ🇾Λ 𓆩×͜×𓆪ꪾ*"

name18 = "*Λ⃝ͷʏΛ 𓆩×͜×𓆪ꪾ*"

//--------Random footer message-----------\\

footer1 = ` `

footer2 =` `

//--------Left message "Nikal msg"--------\\

nikalmsg1 = 'Kis ko Bol Raha Hai Pata Hai Mein kon Hu DevBaloch Mera Name hai' 

 
nikalmsg2 = 'Abey dil se bura lagta hai bhai 😂.'

//--------Random Tag msg--------\\

tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚, 𝘊𝘰𝘮𝘦 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘯𝘥 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘢𝘸𝘦𝘴𝘰𝘮𝘦 𝘉𝘰𝘵.' 

tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 

tag3 = '𝘈𝘣𝘦𝘺 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘢𝘰 𝘺𝘢𝘢𝘳!😑' 

tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 𝘢𝘵 𝘵𝘩𝘪𝘴 𝘢𝘥𝘷𝘢𝘯𝘤𝘦 𝘉𝘰𝘵.😚' 

tag5 = '𝘠𝘢𝘢𝘳 𝘬𝘺𝘢 𝘉𝘰𝘵 𝘩𝘢𝘪❤️' 

tag6 = '𝘐𝘵𝘯𝘢 𝘮𝘻𝘢 𝘬𝘺𝘶 𝘢𝘢 𝘳𝘩𝘢 𝘩𝘢𝘪...𝘛𝘶𝘯𝘦 𝘩𝘢𝘸𝘢 𝘮𝘦 𝘣𝘩𝘢𝘯𝘨 𝘮𝘪𝘭𝘢𝘺𝘢 𝘩𝘢𝘪!🥵' 

tag7 = '𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?' 

tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...𝘤𝘰𝘮𝘦 𝘩𝘦𝘳𝘦 𝘨𝘶𝘺𝘴 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘖𝘗 𝘉𝘰𝘵!🔥' 

tag9 = '𝘠𝘰𝘶 𝘢𝘭𝘭 𝘴𝘩𝘰𝘶𝘭 𝘵𝘳𝘺 𝘵𝘩𝘪𝘴 𝘤𝘶𝘵𝘦 𝘈𝘯𝘺𝘢❤️🍫' 

tag10 = '𝘈𝘺𝘰𝘰 𝘈𝘯𝘺𝘢 𝘪𝘴 𝘉𝘦𝘴𝘵!!😚' 

global.mess = {

    success: 'Work done 𝗗𝗮𝗿𝗹𝗶𝗻𝗴❤️',

    admin: "Baby!\nThis command is only for 𝗔𝗱𝗺𝗶𝗻𝘀...So i can't process your command babe. 😑", // User "\n" for change the line 

    botAdmin: 'Pihle Mujhi Admin Karo',

    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿..',

    group: "Baka !!!!!\nYou can't use this command in a 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁 !😑",

    private: 'Such a baka !!\nThis command is only for 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀. 🥲',

    bot: "Ye Sirf BOT Karskta Hai App Nahi",

    wait: "Mein Search Kar Rha Hu App Tab Tak Face Mask😁 Karo",

    linkm: 'Link Deleted Karo Yar?',

    error: 'Mere Ko Nahi Mila ',

    sudo: "*Hey User 👋....*\nYou can't use this command because this command is only for my co-owner.", 

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

    ban: 'You have been banned by the 𝗼𝘄𝗻𝗲𝗿 😡, if you want to be 𝘂𝗻𝗯𝗮𝗻𝗻𝗲𝗱, chat owner.',

    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo 𝗜𝗔𝗦 - 𝗬𝗔𝗦 bano lekin nhii tumhe to nudity dekhni hai 👏',

    banChat: 'Mera Bot Banned Hugya Hai!, App  Dosre Number Par Baat Karr.'

}

//--------------- Menu images ----------------\\

global.Menuimage = fs.readFileSync("https://i.imgur.com/0IAv7Lk.jpeg")

global.thumnnaiIs = fs.readFileSync("https://i.imgur.com/0IAv7Lk.jpeg")

//--------------- Systemjc Function --------------\\

global.autoTyping = false 

global.autoreadpmngc = true 

global.autoReadGc = true 

global.autoRecord = true 

global.available = true

global.autoTyping = true 

//----------- Users Userlimit -----------\\

global.userLimit = {

premium: "Infinity",  // premium users 

free: 12,            // Free users

}

/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})
