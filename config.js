import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['5214274130309', '𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐎𝐅𝐂', true],
  ['525636167834', '𝐎𝐖𝐍𝐄𝐑', true],
  ['525643260308', '𝐘𝐈𝐑𝐎 𝐁𝐎𝐓', true],
  ['5214274130309']
] 

global.mods = [''] 
global.prems = ['5214274130309', '5214274130309']
global.APIs = { 
  
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { 
  
  'https://api.fgmods.xyz': 'm2XBbNvz' 
}


global.packname = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ' 
global.author = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ' 


global.botName = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ'
global.fgig = 'https://instagram.com/' 
global.fgsc = 'https://github.com/SpectrumOfc' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://ibb.co/QfyL9Wy/logo.jpgs' 


global.id_canal = '120363316264159575@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.bgp = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.bgp2 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.bgp3 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
