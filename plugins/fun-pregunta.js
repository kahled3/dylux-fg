let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب سؤالك ليتم الرد عليه\nمثل\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `╭━〔 سؤال 〕━⬣  
سوال:  *${text}*
✅ جواب: *${['لا','اي', 'ممكن', 'امممم بفكر', 'اكيد لا', 'ربما لا', 'ربما نعم', 'بفكر في امر' ].getRandom()}*
༺════ •⊰『 𝒚𝒖𝒏𝒂 』⊱• ════༻`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'YUNA BOT', null, null, [
['معاودة السوال', `${usedPrefix + command} ${text}`]
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|سوال|يونا$/i  
export default handler






