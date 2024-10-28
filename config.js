import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['59172945992', 'FG98', true],
  ['5491168352204']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ' 
global.author = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ' 

//--info FG
global.botName = 'ʏɪʀᴏ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰᴄ'
global.fgig = 'https://instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
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
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
