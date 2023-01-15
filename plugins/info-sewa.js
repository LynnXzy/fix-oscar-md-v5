let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '20'
let ss = '35'
let sp = '45'
let sv = '80'
//premium
let ph = '10'
let pn = '20'
let pp = '40'
let pv = '45'
let ppm = '55'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _Rm ${ph} (1 minggu)_
┊⫹⫺ *Normal:* _Rm ${pn} (1 bulan)_
┊⫹⫺ *Pro:* _Rm ${pp} (4 bulan)_
┊⫹⫺ *Vip:* _Rm ${pv} (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _Rm ${ppm} (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Maxis:* ['60147675746']
• *Digi:* ['60149431385']

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: ` SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Sewa', description: 'PRICE: Rm' + sh + ' (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Sewa', description: 'PRICE: Rm' + sn + ' (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.orsewa *Paket:* STANDAR • Sewa', description: 'PRICE: Rm' + ss + ' (2 bulan)' },
	{title: "🔖 PRO", rowId: '.orsewa *Paket:* PRO • Sewa', description: 'PRICE: Rm' + sp + ' (4 bulan)' },
	{title: "🔖 VIP", rowId: '.orsewa *Paket:* VIP • Sewa', description: 'PRICE: Rm' + sv + ' (12 bulan)' },
	]
    }, {
    title: ` PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Premium', description: 'PRICE: Rm' + ph + ' (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Premium', description: 'PRICE: Rm' + pn + ' (1 bulan)' },
	{title: "🌟 PRO", rowId: '.orsewa *Paket:* PRO • Premium', description: 'PRICE: Rm' + pp + ' (4 bulan)' },
	{title: "🌟 VIP", rowId: '.orsewa *Paket:* VIP • Premium', description: 'PRICE: Rm' + pv + ' (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.orsewa *Paket:* PERMANENT • Premium', description: 'PRICE: Rm' + ppm + ' (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: namebot,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

module.exports = handler
