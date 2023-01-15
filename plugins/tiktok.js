import axios from 'axios'
import { JSDOM } from 'jsdom'

async function tiktokScrape(link) {
    let domain = 'https://www.tikwm.com/';
    let res = await axios.post(domain+'api/', {}, {
        headers: {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
        },
        params: {
            url: link,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1
        }
    })

    /* id: '7188277988549496066',
    region: 'SG',
    title: 'The thick smoke tho ðŸ¥² #sgnews #sgfire ',
    cover: '/video/cover/7188277988549496066.webp',
    duration: 12,*/

    return {
        nowm: domain+res.data.data.play, 
        wm: domain+res.data.data.wmplay, 
        music: domain+res.data.data.music, 
        tittle: domain+res.data.data.title, 
        cover: domain+res.data.data.cover, 
    }
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const url = await tiktokScrape(args[0]) 
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url.nowm, 'tiktok.mp4', `Done`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

export default handler
