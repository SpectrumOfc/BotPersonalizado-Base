import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
m.react('🐈‍⬛')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐎𝐅𝐂\nNICKNAME:𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐎𝐅𝐂\nORG: 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐎𝐅𝐂\nTITLE:soft\nitem1.TEL;waid=5214274130309:+52 1 427 413 0309\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/SpectrumOfc\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: cuentaoficialspectrum@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇲🇽 MÉXICO;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date: 09-12-2007\nEND:VCARD`
let vcard2 = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝐘𝐈𝐑𝐎 𝐁𝐎𝐓\nNICKNAME:𝐘𝐈𝐑𝐎 𝐁𝐎𝐓\nORG: 𝐘𝐈𝐑𝐎 𝐁𝐎𝐓\nTITLE:soft\nitem1.TEL;waid=5217911032956:+52 1 791 103 2956\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/SpectrumOfc\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: cuentaoficialspectrum@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇲🇽 MÉXICO;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date: 09-12-2007\nEND:VCARD`
let vcard3 = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝐎𝐖𝐍𝐄𝐑\nNICKNAME:𝐎𝐖𝐍𝐄𝐑\nORG: 𝐎𝐖𝐍𝐄𝐑\nTITLE:soft\nitem1.TEL;waid=5215643260308:+52 1 56 4326 0308\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/SpectrumOfc\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: cuentaoficialspectrum@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇲🇽 MÉXICO;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date: 09-12-2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: packname, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `*👋 Hola ${edtr}, este es el contacto de mi creador*`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator|creador|dueño)$/i

export default handler
