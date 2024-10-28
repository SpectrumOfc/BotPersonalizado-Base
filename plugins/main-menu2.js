
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
꧁✦ *𝐋𝐈𝐒𝐓𝐀 𝐌𝐄𝐍Ú 2* ✦꧂

┏━━━━━ *𝐀𝐔𝐃𝐈𝐎𝐒* ━━━━━┓ 
┃ Bot
┃ Buenos dias
┃ Buenas tardes
┃ Buenas noches
┃ Fino señores
┃ Sad
┗━━━━━━━━━━━━━━━━━━┛
`
    let pp = './src/fg_logo.jpeg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
