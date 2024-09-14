let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*MENSAJE:* ${pesan}`
  let teks = `⎈ : 𝙊𝘾𝙀𝘼𝙉 𝘾𝙊𝙍𝙋
     ┉┅━━━━━━━━━━┅┉ 
   ${oi}\n\n 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 :\n`
  for (let mem of participants) {
  teks += `🌊°•  @${mem.id.split('@')[0]}\n`}
  teks += `𝙊𝘾𝙀𝘼𝙉 𝘾𝙊𝙍𝙋`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler