/** 
 - Create By Deff
 - Contact Me on https://wa.me/+6289501060783
 - Follow iG : @deff.xyz
 - Thanks Dika Ardente & Zack Mans & Thunder Team & Xnone Team
*/
process.on('uncaughtException', console.error) //Safe Log Error
/*-----[⬇️MODULE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
require("../connect/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const maker = require('mumaker')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const did = require('didyoumean') 
var sim = require('similarity') 
const ra = require('ra-api') 
const cheerio = require('cheerio')
const Jimp = require('jimp')

/*-----[⬇️Scrape & Function]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const { aiovideodl } = require('./lib/scraper.js')
const cerpen = require('./lib/cerpen.js')
//Function
const { color, bgcolor } = require("./lib/color")
let hit = [];
const { addCmd, AddHituser } = require("./lib/hitbot.js");
const { addChange } = require("./lib/change.js");
let { msgFilter } = require('./lib/antispam')
let _sewa = require("./lib/sewa");
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list.js')
const captcha = fs.readFileSync('./worker/src/captcha/captcha.json');
/*-----[⬇️DATABASE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let sewa = JSON.parse(fs.readFileSync('./worker/src/sewa.json'));
let commund = JSON.parse(fs.readFileSync('./worker/src/dashboard/datacmd.json'));
let hitbot = JSON.parse(fs.readFileSync('./worker/src/dashboard/command.json'));
let userHit = JSON.parse(fs.readFileSync('./worker/src/dashboard/userhit.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./worker/src/list/list.json'));
let bad = JSON.parse(fs.readFileSync('./worker/src/Toxic/bad.json'))
let mute = JSON.parse(fs.readFileSync('./worker/src/mute/mute.json'));
let changelog = JSON.parse(fs.readFileSync('./worker/src/changelog/change.json'))
const register = JSON.parse(fs.readFileSync('./worker/src/register/user.json'))
const capuser = JSON.parse(fs.readFileSync('./worker/src/captcha/capuser.json'))

global.db = JSON.parse(fs.readFileSync('./worker/src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    grup : {}, 
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// UCAPAN WAKTU By Mans
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
// TANGGAL By Zack Mans 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)


//----
let multipref = true;
let oneprefix = false;
let preff = "!"
/*-----[⬇️Module Export]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
if (multipref) {
   var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
  } else if (oneprefix) {
    prefix = preff
  }
const allcmd = [`${prefix}menu`,`${prefix}sticker`,`${prefix}play`,`${prefix}addlist`,`${prefix}list`,`${prefix}cerpen`,`${prefix}ytmp3`,`${prefix}ytmp4`,`${prefix}ping`,`${prefix}dashboard`,`${prefix}updatelist`,`${prefix}dellist`,`${prefix}owner`,`${prefix}cowner`,`${prefix}tes`,`${prefix}linkgroup`,`${prefix}setppgc`,`${prefix}setname`,`${prefix}setdesc`,`${prefix}ephemeral`,`${prefix}hidetag`,`${prefix}tagall`,`${prefix}promote`,`${prefix}demote`,`${prefix}upvote`,`${prefix}cekvote`,`${prefix}hapusvote`,`${prefix}antilink`,`${prefix}welcome`,`${prefix}add`,`${prefix}kick`,`${prefix}revoke`,`${prefix}group`,`${prefix}editinfo`,`${prefix}ceksewa`,`${prefix}instagram`,`${prefix}tiktok`,`${prefix}facebook`,`${prefix}igstory`,`${prefix}jpeg`,`${prefix}mp4`,`${prefix}gimage`,`${prefix}ytsearch`,`${prefix}searchgc`,`${prefix}happymod`,`${prefix}servermc`,`${prefix}mcpedl`,`${prefix}google`,`${prefix}pinterest`,`${prefix}layarkaca-search`,`${prefix}smeme`,`${prefix}swm`,`${prefix}stickerwm`,`${prefix}emojimix`,`${prefix}tomp3`,`${prefix}tovn`,`${prefix}tourl`,`${prefix}togif`,`${prefix}tomp4`,`${prefix}toimage`,`${prefix}quotes`,`${prefix}inspect`,`${prefix}getname`,`${prefix}nulis`,`${prefix}kalkulator`,`${prefix}quoted`,`${prefix}join`,`${prefix}tohuruf`,`${prefix}volume`,`${prefix}bass`,`${prefix}blown`,`${prefix}deep`,`${prefix}earrape`,`${prefix}fast`,`${prefix}fat`,`${prefix}nightcore`,`${prefix}reverse`,`${prefix}robot`,`${prefix}slow`,`${prefix}tupai`,`${prefix}translate`,`${prefix}halah`,`${prefix}hilih`,`${prefix}huluh`,`${prefix}holoh`,`${prefix}math`,`${prefix}tictactoe`,`${prefix}delttt`,`${prefix}tebak`,`${prefix}family100`,`${prefix}suitpvp`,`${prefix}3dbox`,`${prefix}roadwarning`,`${prefix}icecold`,`${prefix}luxury`,`${prefix}cloud`,`${prefix}summersand`,`${prefix}horrorblood`,`${prefix}thunder`,`${prefix}pornhub`,`${prefix}glitch`,`${prefix}avenger`,`${prefix}space`,`${prefix}ninjalogo`,`${prefix}marvelstudio`,`${prefix}lionlogo`,`${prefix}wolflogo`,`${prefix}steel3d`,`${prefix}wallgravity`,`${prefix}merdeka-news`,`${prefix}kontan-news`,`${prefix}cnbc-news`,`${prefix}tribun-news`,`${prefix}indozone-news`,`${prefix}kompas-news`,`${prefix}detik-news`,`${prefix}daily-news`,`${prefix}inews-news`,`${prefix}okezone-news`,`${prefix}sindo-news`,`${prefix}tempo-news`,`${prefix}antara-news`,`${prefix}cnn-news`,`${prefix}fajar-news`,`${prefix}setcmd`,`${prefix}listcmd`,`${prefix}delcmd`,`${prefix}lockcmd`,`${prefix}addmsg`,`${prefix}listmsg`,`${prefix}getmsg`,`${prefix}getmsg`,`${prefix}delmsg`,`${prefix}addlist`,`${prefix}dellist`,`${prefix}updatelist`,`${prefix}list`,`${prefix}owner`,`${prefix}listpc`,`${prefix}listgc`,`${prefix}mcserver`,`${prefix}sc`,`${prefix}ping`,`${prefix}afk`,`${prefix}cekupdate`,`${prefix}getscmd`,`${prefix}delete`,`${prefix}infochat`,`${prefix}request`,`${prefix}report`,`${prefix}donate`,`${prefix}listonline`,`${prefix}self`,`${prefix}sewa`,`${prefix}listsewa`,`${prefix}public`,`${prefix}bcall`,`${prefix}bcgroup`,`${prefix}chat`,`${prefix}antitag`,`${prefix}ban`,`${prefix}cowner`,`${prefix}doge`,`${prefix}catalog`,`${prefix}mute`,`${prefix}attp`,`${prefix}patrick`,`${prefix}patrik`,`${prefix}bucinsticker`,`${prefix}gura`,`${prefix}gurastick`]
const isCmd = body.startsWith(prefix)
const command = body.toLowerCase().split(' ')[0] || ''
const Det = command.startsWith(prefix) 
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await sock.decodeJid(sock.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
// Group
const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)

// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isMuted = m.isGroup ? mute.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
//======================================================
function _0x479c(){const _0x3ac40c=['208845wDCksC','sendMessage','./worker/media/image/randomMenu/wpmobile.png','1605670fVAfXe','3097464LiuRyJ','14pllJGY','4pmtTwE','30078xEiMXa','6129423ZEnwFG','967272uJKrbN','14834HxBxAv'];_0x479c=function(){return _0x3ac40c;};return _0x479c();}(function(_0xc11c98,_0x55b314){const _0x1e8fcf=_0x39f7,_0x46c20b=_0xc11c98();while(!![]){try{const _0x5353c1=parseInt(_0x1e8fcf(0x1ac))/0x1*(parseInt(_0x1e8fcf(0x1b1))/0x2)+parseInt(_0x1e8fcf(0x1ae))/0x3+parseInt(_0x1e8fcf(0x1ad))/0x4*(-parseInt(_0x1e8fcf(0x1b5))/0x5)+parseInt(_0x1e8fcf(0x1b0))/0x6+-parseInt(_0x1e8fcf(0x1b2))/0x7+-parseInt(_0x1e8fcf(0x1b6))/0x8+parseInt(_0x1e8fcf(0x1af))/0x9;if(_0x5353c1===_0x55b314)break;else _0x46c20b['push'](_0x46c20b['shift']());}catch(_0x507211){_0x46c20b['push'](_0x46c20b['shift']());}}}(_0x479c,0x35373));function _0x39f7(_0x42df4e,_0x4c2652){const _0x479c2e=_0x479c();return _0x39f7=function(_0x39f724,_0x18ba93){_0x39f724=_0x39f724-0x1ac;let _0x4da050=_0x479c2e[_0x39f724];return _0x4da050;},_0x39f7(_0x42df4e,_0x4c2652);}const ads=_0x4944e0=>{const _0x4261fc=_0x39f7;sock[_0x4261fc(0x1b3)](from,{'text':_0x4944e0,'contextInfo':{'externalAdReply':{'title':'WHASTAPP\x20BOT','mediaType':0x3,'renderLargerThumbnail':![],'showAdAttribution':!![],'body':'🤫','thumbnail':fs['readFileSync'](_0x4261fc(0x1b4)),'sourceUrl':'https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y='}}});};

function _0x4f83(_0x33d432,_0x492efd){const _0x1e64ee=_0x1e64();return _0x4f83=function(_0x4f8383,_0x336169){_0x4f8383=_0x4f8383-0x19c;let _0x399ddb=_0x1e64ee[_0x4f8383];return _0x399ddb;},_0x4f83(_0x33d432,_0x492efd);}function _0x1e64(){const _0xc58426=['3025053QEYmnG','41060fdFuCE','Command\x20Not\x20Found','236PjVUoX','122985pWIDdW','4369070ElFvWi','thum','8WCkEeE','https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y=','310051hgmyzL','8517LFHvMU','6322074RnRzTu','Akurasi\x20:\x20','70OKkFmg','36EFORPK'];_0x1e64=function(){return _0xc58426;};return _0x1e64();}(function(_0x175ad9,_0x2eb448){const _0x22ebcf=_0x4f83,_0x914527=_0x175ad9();while(!![]){try{const _0xbabf60=-parseInt(_0x22ebcf(0x1a3))/0x1+-parseInt(_0x22ebcf(0x19d))/0x2*(-parseInt(_0x22ebcf(0x1a9))/0x3)+-parseInt(_0x22ebcf(0x1a2))/0x4*(-parseInt(_0x22ebcf(0x1a0))/0x5)+parseInt(_0x22ebcf(0x19e))/0x6*(parseInt(_0x22ebcf(0x1a8))/0x7)+-parseInt(_0x22ebcf(0x1a6))/0x8*(parseInt(_0x22ebcf(0x19f))/0x9)+parseInt(_0x22ebcf(0x1a4))/0xa+-parseInt(_0x22ebcf(0x1aa))/0xb;if(_0xbabf60===_0x2eb448)break;else _0x914527['push'](_0x914527['shift']());}catch(_0x432348){_0x914527['push'](_0x914527['shift']());}}}(_0x1e64,0x3db1e));const detect=_0xe915a8=>{const _0x7ec85f=_0x4f83;sock['sendMessage'](from,{'text':_0xe915a8,'contextInfo':{'externalAdReply':{'title':_0x7ec85f(0x19c)+anu2,'mediaType':0x3,'renderLargerThumbnail':!![],'showAdAttribution':!![],'body':_0x7ec85f(0x1a1),'thumbnail':global[_0x7ec85f(0x1a5)],'sourceUrl':_0x7ec85f(0x1a7)}}});};

(function(_0x19b188,_0x3dc56a){var _0x310ccf=_0x5f1b,_0x22d77b=_0x19b188();while(!![]){try{var _0x300344=parseInt(_0x310ccf(0x8f))/0x1*(parseInt(_0x310ccf(0x8c))/0x2)+parseInt(_0x310ccf(0x89))/0x3+-parseInt(_0x310ccf(0x87))/0x4+-parseInt(_0x310ccf(0x8b))/0x5+parseInt(_0x310ccf(0x88))/0x6*(parseInt(_0x310ccf(0x90))/0x7)+-parseInt(_0x310ccf(0x8d))/0x8+parseInt(_0x310ccf(0x86))/0x9;if(_0x300344===_0x3dc56a)break;else _0x22d77b['push'](_0x22d77b['shift']());}catch(_0x70bd49){_0x22d77b['push'](_0x22d77b['shift']());}}}(_0xde2a,0xd0982));function _0x5f1b(_0x2c778f,_0x581614){var _0xde2ae5=_0xde2a();return _0x5f1b=function(_0x5f1ba7,_0x244585){_0x5f1ba7=_0x5f1ba7-0x86;var _0x4d9fb0=_0xde2ae5[_0x5f1ba7];return _0x4d9fb0;},_0x5f1b(_0x2c778f,_0x581614);}function _0xde2a(){var _0x28d96c=['getBufferAsync','4435035JHRiCI','53194ueNzCc','4045072VulEzo','resize','5atGAYk','13783lcEFmo','21847995jaugBj','5661620ijyXJS','1566HgjRVh','1763997eVmgeD'];_0xde2a=function(){return _0x28d96c;};return _0xde2a();}const reSize=async(_0x1ee377,_0xe3d0b2,_0xec9a74)=>{return new Promise(async(_0x2ddc2d,_0x3069e0)=>{var _0x2dac28=_0x5f1b,_0x397265=await Jimp['read'](_0x1ee377),_0x428d80=await _0x397265[_0x2dac28(0x8e)](_0xe3d0b2,_0xec9a74)[_0x2dac28(0x8a)](Jimp['MIME_JPEG']);_0x2ddc2d(_0x428d80);});};
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
sock.relayMessage(jid, order.message, { messageId: order.key.id})
}
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
//Register Function ======================================================
let addRegisterUser = (userid) => {
	let obj = { id: userid }
	register.push(obj)
	fs.writeFileSync('./worker/src/register/user.json', JSON.stringify(register))
	}
let cekUser = (sender) => {
	let status = false
	Object.keys(register).forEach((i) => {
		if (register[i].id === sender) {
			status = true
			}
			})
			return status
			}
const isRegister = cekUser(sender)
//Checker======================================================
_sewa.expiredCheck(sock, sewa)
if (isMuted && !isAdmins){ return }

//Random menu======================================================
men = ['wpmobile','wpmobile2']
rndmmenu =  men[Math.floor(Math.random() * (men.length))]
//Cmd Function======================================================
// console log command ketika dalam private chat
    if (!m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }
    
// console log command ketika dalam group
    if (m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }

if (command) {
await sock.sendPresenceUpdate('composing', m.chat)
sock.sendReadReceipt(from, m.sender, [m.key.id])
}
if (Det && m.isGroup && !isRegister) {
m.reply('Silahkan Cek pesan pribadi bot untuk mendaftar') 
}
if (Det && !isRegister ) { //By Deff (Nyomot nama jan diapus :)) 
 datta = captcha
 jsonData = JSON.parse(datta);
    de = Math.floor(Math.random() * jsonData.length);
    data = jsonData[de];
   console.log(data)//hasil di tampilkan di cmd
    jawaban = data.kode
    gambar = data.captcha
capuser[m.sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase()}  
  fs.writeFileSync("./worker/src/captcha/capuser.json", JSON.stringify(capuser))

          
        sock.sendMessage(
         sender, 
         { 
         caption: `*Hello ${pushname}*\nSilahkan Daftar dulu\nSebutkan kode Verifikasi diatas ini`, 
         location: { 
          jpegThumbnail: await reSize(gambar, 200, 200) 
         }, 
         footer: 'Deffbotz ~ Deff', mentions: [sender] 
         })
sock.sendMessage(sender, { text : 'Sebutkan kode diatas untuk verifikasi'}) 
         return
       }
var _0x463103=_0x483b;function _0x27fb(){var _0x3b4884=['30zictXY','13003047vkiMwx','6952429tvDRtD','328gpXOwd','jawaban','./worker/src/captcha/capuser.json','1832476ohIcQr','reply','3hyjHoQ','writeFileSync','toLowerCase','hasOwnProperty','755446YGJaCh','335qQkOoa','split','240177GJkGpC','1795162cgqodL','59592taKNhc','sender'];_0x27fb=function(){return _0x3b4884;};return _0x27fb();}function _0x483b(_0x3e021a,_0x2edc53){var _0x27fb33=_0x27fb();return _0x483b=function(_0x483bd4,_0x4455d4){_0x483bd4=_0x483bd4-0x1e5;var _0x2995e2=_0x27fb33[_0x483bd4];return _0x2995e2;},_0x483b(_0x3e021a,_0x2edc53);}(function(_0x4a3173,_0x54942f){var _0x22044e=_0x483b,_0x49b17e=_0x4a3173();while(!![]){try{var _0x29c58c=parseInt(_0x22044e(0x1e5))/0x1+parseInt(_0x22044e(0x1e9))/0x2+-parseInt(_0x22044e(0x1f4))/0x3*(-parseInt(_0x22044e(0x1f2))/0x4)+parseInt(_0x22044e(0x1e6))/0x5*(parseInt(_0x22044e(0x1ea))/0x6)+-parseInt(_0x22044e(0x1e8))/0x7*(-parseInt(_0x22044e(0x1ef))/0x8)+-parseInt(_0x22044e(0x1ed))/0x9+parseInt(_0x22044e(0x1ec))/0xa*(-parseInt(_0x22044e(0x1ee))/0xb);if(_0x29c58c===_0x54942f)break;else _0x49b17e['push'](_0x49b17e['shift']());}catch(_0x15cfdb){_0x49b17e['push'](_0x49b17e['shift']());}}}(_0x27fb,0xcdac9));capuser[_0x463103(0x1f7)](m[_0x463103(0x1eb)][_0x463103(0x1e7)]('@')[0x0])&&!isCmd&&(jawaban=capuser[sender[_0x463103(0x1e7)]('@')[0x0]][_0x463103(0x1f0)],budy[_0x463103(0x1f6)]()==jawaban&&(addRegisterUser(sender),m[_0x463103(0x1f3)]('Sukses\x20Mendaftar')),delete capuser[m['sender'][_0x463103(0x1e7)]('@')[0x0]],fs[_0x463103(0x1f5)](_0x463103(0x1f1),JSON['stringify'](capuser)));

if (bad.includes(body)) {
tos = ['Astaghfirullah','Heh mulut jaga','Gapernah diajarin cara ngomong?','Dih🤢','Toxic teross']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin) 
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik join untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./worker/media/image/Deff.jpg'), 2022, "DEFF~MD", "6289501060783@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}

// AntiLink
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await sock.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
ads(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return ads(bvl)
if (m.key.fromMe) return ads(bvl)
if (isCreator) return ads(bvl)
kice = m.sender
await sock.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
sock.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
// Public & Self
if (!sock.public) {
if (!m.key.fromMe) return
}
if (isCmd) {
axios.get('https://api.countapi.xyz/hit/Deff/visits').then(({
data
}) => hit.all = data.value)
axios.get(`https://api.countapi.xyz/hit/Deff${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
data
}) => hit.today = data.value)
}
// add command
let addHit = (sender, command) => {
hitbot.push({
"id": sender,
"command": command
})
fs.writeFileSync('./worker/src/dashboard/hit.json', JSON.stringify(hitbot))
}

// Anu cmd nya
if (isCmd) {
addHit(sender, command)
AddHituser(sender, userHit)
}
if (!isCmd && m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
sock.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
sock.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
//======================================================
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}
//======================================================

// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
ads(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
ads(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}



// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./worker/src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)


// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebaklagu[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebakgambar[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebakkata[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebaklirik[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await sock.sendButtonText(m.chat, [{ buttonid: '##tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
sock.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
sock.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
sock.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) sock.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) sock.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) sock.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
sock.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) sock.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) sock.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
sock.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ads(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// ads(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
ads({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: sock.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
sock.ev.emit('messages.upsert', msg)
}
const textImg = (teks) => {
sock.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./worker/media/image/wpmobile.png')}) 
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "DEFFBOTZ ~ DEFF", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "DEFFBOTZ ~ DEFF",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'DEFFBOTZ ~ DEFF', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '#0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"ZackMans Official",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'ZackMans Official',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = sock.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = sock.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
 }
}
let head = `*╭───╼[ _DEFFBOTZ-DEFF_ ]╾──➲*`
let left = "*│*"
let branch = "*├*"
let bracketmenu = "*┞─╼「"
let F = "」*"
let A = "*┟*"
let B = "*┞*"
let stick = "*╿*"
let borderlist = "*╭╾───────────────╼╮*"
let borderlistend = "*╰╾───────────────╼╯*"
let opener = "*╭─────────────────╮*"
let closing = "*╰─────────────────╯*"
let headtqto = "*╭╾─「 _Thanks To✨_ 」╾───╮*"
let endbordertqto = "*╰╾───────────────╾╯*"
let end = "*╰╾────────────────╼*"
const listmn = `
${head}
${left}
${left} Library : Baileys - Multi Device
${left} Language : JavaScript
${left}
${bracketmenu} PROFILE BOT ${F} 
${left} Owner : ${owner.length}
${left} Pendaftar : ${register.length}
${left}
${bracketmenu} PROFILE GROUP ${F} 
${left} Antilink : ${AntiLink? "on" : "off"}
${left} Welcome : ${welcm? "on" : "off"}
${closing}
${readmore}
${head}
${bracketmenu} _Group_ ${F} 
${branch} ${prefix}linkgroup 
${branch} ${prefix}setppgc 
${branch} ${prefix}setname 
${branch} ${prefix}setdesc 
${branch} ${prefix}ephemeral 
${branch} ${prefix}hidetag 
${branch} ${prefix}tagall 
${branch} ${prefix}promote 
${branch} ${prefix}demote 
${branch} ${prefix}vote 
${branch} ${prefix}devote 
${branch} ${prefix}upvote 
${branch} ${prefix}cekvote 
${branch} ${prefix}hapusvote 
${branch} ${prefix}antilink <on/off>
${branch} ${prefix}welcome <on/off>
${branch} ${prefix}autorevoke <on/off>
${branch} ${prefix}add 
${branch} ${prefix}kick 
${branch} ${prefix}revoke 
${branch} ${prefix}group <open/close>
${branch} ${prefix}editinfo <open/close>
${branch} ${prefix}ceksewa 
${branch} ${prefix}mute
${bracketmenu} _Downloader_ ${F}
${branch} ${prefix}instagram 
${branch} ${prefix}tiktok 
${branch} ${prefix}twitter 
${branch} ${prefix}facebook 
${branch} ${prefix}youtube 
${branch} ${prefix}igstory 
${branch} ${prefix}jpeg 
${branch} ${prefix}mp4 
${bracketmenu} _Search_ ${F}
${branch} ${prefix}gimage 
${branch} ${prefix}ytsearch 
${branch} ${prefix}searchgc 
${branch} ${prefix}play 
${branch} ${prefix}happymod 
${branch} ${prefix}servermc 
${branch} ${prefix}mcpedl 
${branch} ${prefix}google 
${branch} ${prefix}pinterest 
${branch} ${prefix}layarkaca-search 
${bracketmenu} _Convert_ ${F}
${branch} ${prefix}sticker 
${branch} ${prefix}smeme 
${branch} ${prefix}stickerwm 
${branch} ${prefix}tomp3 
${branch} ${prefix}tovn 
${branch} ${prefix}toaudio 
${branch} ${prefix}togif 
${branch} ${prefix}tourl 
${branch} ${prefix}tomp4 
${branch} ${prefix}toimage 
${bracketmenu} _Text Feature_ ${F}
${branch} ${prefix}cerpen <query in the list>
${branch} ${prefix}quotes 
${bracketmenu} _Tools_ ${F} 
${branch} ${prefix}inspect 
${branch} ${prefix}getname 
${branch} ${prefix}getpic 
${branch} ${prefix}nulis 
${branch} ${prefix}kalkulator 
${branch} ${prefix}quoted 
${branch} ${prefix}join 
${branch} ${prefix}fliptext 
${branch} ${prefix}tohuruf 
${branch} ${prefix}volume 
${branch} ${prefix}bass
${branch} ${prefix}blown
${branch} ${prefix}deep
${branch} ${prefix}earrape
${branch} ${prefix}fast
${branch} ${prefix}fat
${branch} ${prefix}nightcore
${branch} ${prefix}reverse
${branch} ${prefix}robot
${branch} ${prefix}slow
${branch} ${prefix}tupai
${branch} ${prefix}translate 
${bracketmenu} _Fun_ ${F}
${branch} ${prefix}halah 
${branch} ${prefix}hilih 
${branch} ${prefix}huluh 
${branch} ${prefix}heleh 
${branch} ${prefix}holoh 
${branch} ${prefix}math 
${branch} ${prefix}tictactoe 
${branch} ${prefix}delttt 
${branch} ${prefix}tebak 
${branch} ${prefix}family100 
${branch} ${prefix}suitpvp 
${bracketmenu} _Sticker Telegram_ ${F}
${branch} ${prefix}emoji 
${branch} ${prefix}emojimix 
${branch} ${prefix}emojimix2
${branch} ${prefix}attp 
${branch} ${prefix}doge unde
${branch} ${prefix}patrick
${branch} ${prefix}bucinsticker
${bracketmenu} _Maker_ ${F} 
${branch} ${prefix}3dbox   
${branch} ${prefix}drapwater   
${branch} ${prefix}lion2   
${branch} ${prefix}papercut   
${branch} ${prefix}transformer   
${branch} ${prefix}herryp   
${branch} ${prefix}neondevil   
${branch} ${prefix}3dstone   
${branch} ${prefix}3davengers   
${branch} ${prefix}thunder   
${branch} ${prefix}window   
${branch} ${prefix}graffiti   
${branch} ${prefix}pornhub   
${branch} ${prefix}glitch   
${branch} ${prefix}blackping   
${branch} ${prefix}glitch3   
${branch} ${prefix}glitch2   
${branch} ${prefix}3dspace   
${branch} ${prefix}lion   
${branch} ${prefix}3dneon   
${branch} ${prefix}neon   
${branch} ${prefix}greenneon   
${branch} ${prefix}bokeh   
${branch} ${prefix}hollographic   
${branch} ${prefix}bear   
${branch} ${prefix}wolf   
${branch} ${prefix}joker   
${branch} ${prefix}dropwater   
${branch} ${prefix}neonlight   
${branch} ${prefix}thewall   
${branch} ${prefix}natural   
${branch} ${prefix}carbon   
${branch} ${prefix}pencil   
${branch} ${prefix}blackpink  
${branch} ${prefix}neon  
${branch} ${prefix}greenneon  
${branch} ${prefix}advanceglow  
${branch} ${prefix}futureneon  
${branch} ${prefix}sandwriting  
${branch} ${prefix}sandsummer  
${branch} ${prefix}sandengraved  
${branch} ${prefix}metaldark  
${branch} ${prefix}neonlight  
${branch} ${prefix}holographic  
${branch} ${prefix}text1917  
${branch} ${prefix}minion  
${branch} ${prefix}deluxesilver  
${branch} ${prefix}newyearcard  
${branch} ${prefix}bloodfrosted  
${branch} ${prefix}halloween  
${branch} ${prefix}jokerlogo  
${branch} ${prefix}fireworksparkle  
${branch} ${prefix}natureleaves  
${branch} ${prefix}bokeh  
${branch} ${prefix}toxic  
${branch} ${prefix}strawberry  
${branch} ${prefix}box3d  
${branch} ${prefix}roadwarning  
${branch} ${prefix}icecold  
${branch} ${prefix}luxury  
${branch} ${prefix}cloud  
${branch} ${prefix}summersand  
${branch} ${prefix}horrorblood  
${branch} ${prefix}thunder  
${bracketmenu} _Information_ ${F}
${branch} ${prefix}merdeka-news 
${branch} ${prefix}kontan-news 
${branch} ${prefix}cnbc-news 
${branch} ${prefix}tribun-news 
${branch} ${prefix}indozone-news 
${branch} ${prefix}kompas-news 
${branch} ${prefix}detik-news 
${branch} ${prefix}daily-news 
${branch} ${prefix}inews-news 
${branch} ${prefix}okezone-news 
${branch} ${prefix}sindo-news 
${branch} ${prefix}tempo-news 
${branch} ${prefix}antara-news 
${branch} ${prefix}cnn-news 
${branch} ${prefix}fajar-news 
${bracketmenu} _Storage_ ${F}
${branch} ${prefix}setcmd 
${branch} ${prefix}listcmd 
${branch} ${prefix}delcmd 
${branch} ${prefix}lockcmd 
${branch} ${prefix}addmsg 
${branch} ${prefix}listmsg 
${branch} ${prefix}getmsg 
${branch} ${prefix}delmsg 
${branch} ${prefix}addlist 
${branch} ${prefix}dellist 
${branch} ${prefix}updatelist 
${branch} ${prefix}list 
${bracketmenu} _Other_ ${F} 
${branch} ${prefix}owner 
${branch} ${prefix}catalog
${branch} ${prefix}listpc 
${branch} ${prefix}listgc 
${branch} ${prefix}mcserver 
${branch} ${prefix}sc 
${branch} ${prefix}ping 
${branch} ${prefix}afk 
${branch} ${prefix}cekupdate [UpdateBot]
${branch} ${prefix}getscmd [GetSticker]
${branch} ${prefix}delete 
${branch} ${prefix}infochat 
${branch} ${prefix}request 
${branch} ${prefix}report 
${branch} ${prefix}donate 
${branch} ${prefix}listonline 
${bracketmenu} _Owner_ ${F}
${branch} ${prefix}modeprefix
${branch} ${prefix}setprefix
${branch} ${prefix}self 
${branch} ${prefix}sewa <add/del>
${branch} ${prefix}listsewa 
${branch} ${prefix}public 
${branch} ${prefix}bcall 
${branch} ${prefix}bcgroup 
${branch} ${prefix}chat 
${branch} ${prefix}antitag 
${branch} ${prefix}ban <add/del>
${branch} ${prefix}cowner <add/del>
${branch}> / => / $
${borderlistend}`
let tqtq = `
𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨
› Dika Ardnt
› ZackMans
› Rifza
› Deff
› All Friends`

// Case Nye Sini Ngab
switch(command) {
/*case prefix+'verify':{
 if (verify.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
 if (isRegister) return ads('Sudah Terdaftar') 
   
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
 
    }*/
/*case prefix+'addupdate':
             if (!isCreator) return m.reply('Khusus Owner')
             if (!q) return m.reply(`Example: ${command} update fitur`)
           changelog.push(q)
             fs.writeFileSync('./worker/src/changelog/change.json', JSON.stringify(changelog))
             ads(`Update fitur berhasil ditambahkan ke database!`)
             break
      

      case  prefix+'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of changelog) {
             updateList += `࿃ *${i.replace(changelog)}*\n\n`
}
             ads(updateList)
             break*/
case prefix+'emojimix2': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(sender, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
m.reply('Liat Private chat bot untuk melihat hasil') 
} catch {
m.reply("Tidak ditemukan!")
}
}
break
case prefix+'catalog': { // Nemu di Sc chika
tod = await reSize(`./worker/media/image/randomMenu/${rndmmenu}.png`, 200, 200) 
var messa = await prepareWAMessageMedia({ image: tod}, { upload: sock.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `ALL MENU`,
"description": `${listmn}`,
"footerText": `©DEFF`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `© DEFF`,
"url": `hdhhd`
},
"businessOwnerJid": "6289501060783@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftroli })
sock.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case prefix+'mute':
               if (!m.isGroup) return ads('Khusus Grup')
               if (!isAdmins) return ads('Khusus Admin')
               if (args.length < 1) return ads(`${command }enable/disable`)
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return ads(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./worker/src/mute.json', JSON.stringify(mute))
               ads(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./worker/src/mute.json', JSON.stringify(mute))
               ads(`*...:* *MUTE OFF* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya`)
               } else {
               ads(`Pilih enable atau disable`)
}
               break
case prefix+"modeprefix":
if (!isCreator) return ads('Khusus Owner') 
        if (!args.length) return ads(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          oneprefix = false;
          ads("berhasil mengubah ke multi prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          oneprefix = true;
          ads(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          ads("pilih multi, atau oneprefix")
        }
        break
        case prefix+"setprefix":
          if (!q) return ads("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          break

            break
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'doge':
case prefix+'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bucinstick':
case prefix+'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'patrik':
case prefix+'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
sock.sendMessage(from, { sticker : buff}) 
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'list':
            var _0x3fd1da=_0x3867;(function(_0x3bde33,_0x395e18){var _0x4dbaaa=_0x3867,_0x3baed3=_0x3bde33();while(!![]){try{var _0x2ff5d4=-parseInt(_0x4dbaaa(0x1c8))/0x1*(-parseInt(_0x4dbaaa(0x1c6))/0x2)+-parseInt(_0x4dbaaa(0x1c5))/0x3+parseInt(_0x4dbaaa(0x1c3))/0x4+parseInt(_0x4dbaaa(0x1c2))/0x5+-parseInt(_0x4dbaaa(0x1c9))/0x6+-parseInt(_0x4dbaaa(0x1d0))/0x7*(-parseInt(_0x4dbaaa(0x1cb))/0x8)+parseInt(_0x4dbaaa(0x1ca))/0x9*(parseInt(_0x4dbaaa(0x1c4))/0xa);if(_0x2ff5d4===_0x395e18)break;else _0x3baed3['push'](_0x3baed3['shift']());}catch(_0x2da6b6){_0x3baed3['push'](_0x3baed3['shift']());}}}(_0x5a23,0xe33ef));if(!m[_0x3fd1da(0x1c1)])return m[_0x3fd1da(0x1d3)](_0x3fd1da(0x1cc));if(db_respon_list[_0x3fd1da(0x1c7)]===0x0)return m[_0x3fd1da(0x1d3)]('Belum\x20ada\x20list\x20message\x20di\x20database');if(!isAlreadyResponListGroup(from,db_respon_list))return m['reply'](_0x3fd1da(0x1d1));var arr_rows=[];for(let x of db_respon_list){x['id']===from&&arr_rows['push']({'title':x[_0x3fd1da(0x1cd)],'rowId':x['key']});}var listMsg={'text':_0x3fd1da(0x1d4),'buttonText':_0x3fd1da(0x1ce),'footer':'My\x20list','sections':[{'title':groupName,'rows':arr_rows}]};function _0x3867(_0x1b8a5d,_0x2cdc43){var _0x5a237e=_0x5a23();return _0x3867=function(_0x386733,_0x2d8c12){_0x386733=_0x386733-0x1c1;var _0x364d78=_0x5a237e[_0x386733];return _0x364d78;},_0x3867(_0x1b8a5d,_0x2cdc43);}sock[_0x3fd1da(0x1d2)](from,listMsg),addCmd(command[_0x3fd1da(0x1cf)](0x1),0x1,commund);function _0x5a23(){var _0x7d7e29=['194299pdxnuD','Belum\x20ada\x20list\x20message\x20yang\x20terdaftar\x20di\x20group\x20ini','sendMessage','reply','Silahkan\x20Pilih\x20Produk\x20Nya','isGroup','2871355xJGBWu','1599376SgIqMY','18587590LVKtOE','4152429ehrQmm','2CmYbNN','length','169025pxVhTZ','4288284BrUSQJ','9DiBFMd','8WEeNZc','Khusus\x20Grup','key','Click\x20Here!','slice'];_0x5a23=function(){return _0x7d7e29;};return _0x5a23();}
            break
        case prefix+'addlist':
const _0x50758a=_0x515c;function _0x515c(_0x59cac4,_0x3a7ea3){const _0x3a6cd3=_0x3a6c();return _0x515c=function(_0x515cc1,_0x5794cf){_0x515cc1=_0x515cc1-0x15a;let _0x59894f=_0x3a6cd3[_0x515cc1];return _0x59894f;},_0x515c(_0x59cac4,_0x3a7ea3);}(function(_0xec8b99,_0x2f4d95){const _0x5d06b3=_0x515c,_0x4c4087=_0xec8b99();while(!![]){try{const _0x1003d2=-parseInt(_0x5d06b3(0x161))/0x1*(parseInt(_0x5d06b3(0x15b))/0x2)+parseInt(_0x5d06b3(0x16f))/0x3*(-parseInt(_0x5d06b3(0x16c))/0x4)+-parseInt(_0x5d06b3(0x16a))/0x5*(-parseInt(_0x5d06b3(0x16b))/0x6)+-parseInt(_0x5d06b3(0x165))/0x7*(-parseInt(_0x5d06b3(0x167))/0x8)+parseInt(_0x5d06b3(0x15c))/0x9*(-parseInt(_0x5d06b3(0x160))/0xa)+-parseInt(_0x5d06b3(0x169))/0xb+parseInt(_0x5d06b3(0x15e))/0xc;if(_0x1003d2===_0x2f4d95)break;else _0x4c4087['push'](_0x4c4087['shift']());}catch(_0x45f48c){_0x4c4087['push'](_0x4c4087['shift']());}}}(_0x3a6c,0x35940));if(!m['isGroup'])return m[_0x50758a(0x164)]('Khusus\x20Grup');if(!isAdmins&&!isCreator)return m[_0x50758a(0x164)](mess[_0x50758a(0x15d)]);function _0x3a6c(){const _0x574833=['*\x20sudah\x20ada\x20di\x20group\x20ini.','\x20*key@response*\x0a\x0a_Contoh_\x0a\x0a','reply','504kcIAPH','downloadAndSaveMediaMessage','36152uvjfBk','includes','477741xcrFlS','15DRmOmI','448962OznYKT','1243572nQyVFP','./lib/uploader','Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*','3NNPXSv','existsSync','split','\x20tes@apa','slice','2320BohYwd','90hVLcew','admin','6137772qAEfQS','Gunakan\x20dengan\x20cara\x20','255550tqmgQd','200SrNoIv'];_0x3a6c=function(){return _0x574833;};return _0x3a6c();}var args1=q[_0x50758a(0x171)]('@')[0x0],args2=q[_0x50758a(0x171)]('@')[0x1];if(!q[_0x50758a(0x168)]('@'))return m['reply'](_0x50758a(0x15f)+command+_0x50758a(0x163)+command+_0x50758a(0x172));if(isAlreadyResponList(from,args1,db_respon_list))return m[_0x50758a(0x164)]('List\x20respon\x20dengan\x20key\x20:\x20*'+args1+_0x50758a(0x162));if(isImage||isQuotedImage){let {TelegraPh}=require(_0x50758a(0x16d)),media=await sock[_0x50758a(0x166)](quoted),anu=await TelegraPh(media);addResponList(from,args1,args2,!![],''+anu,db_respon_list),m[_0x50758a(0x164)](_0x50758a(0x16e)+args1+'*');if(fs[_0x50758a(0x170)](media))fs['unlinkSync'](media);}else addResponList(from,args1,args2,![],'-',db_respon_list),m[_0x50758a(0x164)](_0x50758a(0x16e)+args1+'*');addCmd(command[_0x50758a(0x15a)](0x1),0x1,commund);
            break
        case prefix+'dellist':
            function _0x41fe(){var _0x360e66=['reply','400870phvjnk','115835CrWUNp','56KDBaRk','admin','3168914jIkLMY','Khusus\x20Grup','Gunakan\x20dengan\x20cara\x20','isGroup','\x20*key*\x0a\x0a_Contoh_\x0a\x0a','*\x20tidak\x20ada\x20di\x20database!','Belum\x20ada\x20list\x20message\x20di\x20database','length','116hKWESj','383994rwEuMi','1474935LEuVpH','Sukses\x20delete\x20list\x20message\x20dengan\x20key\x20*','6585732jxouGg','List\x20respon\x20dengan\x20key\x20*','slice','1gVPfra','1581146RGAZUa'];_0x41fe=function(){return _0x360e66;};return _0x41fe();}var _0x5b6800=_0x304f;(function(_0x3fcb8e,_0x2c6c11){var _0x504a2b=_0x304f,_0xc80d2c=_0x3fcb8e();while(!![]){try{var _0x12b060=parseInt(_0x504a2b(0x1e1))/0x1*(parseInt(_0x504a2b(0x1e2))/0x2)+parseInt(_0x504a2b(0x1dc))/0x3+parseInt(_0x504a2b(0x1da))/0x4*(parseInt(_0x504a2b(0x1e5))/0x5)+-parseInt(_0x504a2b(0x1de))/0x6+-parseInt(_0x504a2b(0x1e8))/0x7+-parseInt(_0x504a2b(0x1e6))/0x8*(-parseInt(_0x504a2b(0x1db))/0x9)+-parseInt(_0x504a2b(0x1e4))/0xa;if(_0x12b060===_0x2c6c11)break;else _0xc80d2c['push'](_0xc80d2c['shift']());}catch(_0x1cadf8){_0xc80d2c['push'](_0xc80d2c['shift']());}}}(_0x41fe,0xa1b28));if(!m[_0x5b6800(0x1eb)])return m[_0x5b6800(0x1e3)](_0x5b6800(0x1e9));function _0x304f(_0x30a3fd,_0x5e5c7e){var _0x41feac=_0x41fe();return _0x304f=function(_0x304f81,_0x483063){_0x304f81=_0x304f81-0x1d7;var _0x1e024e=_0x41feac[_0x304f81];return _0x1e024e;},_0x304f(_0x30a3fd,_0x5e5c7e);}if(!isAdmins&&!isCreator)return m[_0x5b6800(0x1e3)](mess[_0x5b6800(0x1e7)]);if(db_respon_list[_0x5b6800(0x1d9)]===0x0)return m['reply'](_0x5b6800(0x1d8));if(!q)return m[_0x5b6800(0x1e3)](_0x5b6800(0x1ea)+command+_0x5b6800(0x1ec)+command+'\x20hello');if(!isAlreadyResponList(from,q,db_respon_list))return m[_0x5b6800(0x1e3)](_0x5b6800(0x1df)+q+_0x5b6800(0x1d7));delResponList(from,q,db_respon_list),m[_0x5b6800(0x1e3)](_0x5b6800(0x1dd)+q+'*'),addCmd(command[_0x5b6800(0x1e0)](0x1),0x1,commund);
            break
        case prefix+'updatelist': 
          var _0x14cf56=_0x4c7b;(function(_0x359914,_0x43e52a){var _0x54fbd2=_0x4c7b,_0x34ba6d=_0x359914();while(!![]){try{var _0x35f652=-parseInt(_0x54fbd2(0xa1))/0x1*(-parseInt(_0x54fbd2(0x97))/0x2)+parseInt(_0x54fbd2(0x91))/0x3*(-parseInt(_0x54fbd2(0x8e))/0x4)+parseInt(_0x54fbd2(0x8b))/0x5+parseInt(_0x54fbd2(0x92))/0x6*(parseInt(_0x54fbd2(0x8a))/0x7)+-parseInt(_0x54fbd2(0x96))/0x8*(-parseInt(_0x54fbd2(0x8f))/0x9)+-parseInt(_0x54fbd2(0x8d))/0xa+parseInt(_0x54fbd2(0xa0))/0xb*(parseInt(_0x54fbd2(0x89))/0xc);if(_0x35f652===_0x43e52a)break;else _0x34ba6d['push'](_0x34ba6d['shift']());}catch(_0x2ed9e9){_0x34ba6d['push'](_0x34ba6d['shift']());}}}(_0x40f8,0xf1801));if(!m['isGroup'])return m['reply']('Khusus\x20Grup');function _0x4c7b(_0x72a902,_0x15ae66){var _0x40f87f=_0x40f8();return _0x4c7b=function(_0x4c7bc0,_0x2ea124){_0x4c7bc0=_0x4c7bc0-0x89;var _0x51c00d=_0x40f87f[_0x4c7bc0];return _0x51c00d;},_0x4c7b(_0x72a902,_0x15ae66);}if(!isAdmins&&!isCreator)return m['reply'](mess[_0x14cf56(0x99)]);var args1=q[_0x14cf56(0x95)]('@')[0x0],args2=q['split']('@')[0x1];if(!q[_0x14cf56(0x8c)]('@'))return m[_0x14cf56(0x9a)](_0x14cf56(0x93)+command+_0x14cf56(0x9c)+command+_0x14cf56(0x94));if(!isAlreadyResponListGroup(from,db_respon_list))return m[_0x14cf56(0x9a)](_0x14cf56(0x9d)+args1+'*\x20belum\x20terdaftar\x20di\x20group\x20ini');function _0x40f8(){var _0x511157=['admin','reply','downloadAndSaveMediaMessage','\x20*key@response*\x0a\x0a_Contoh_\x0a\x0a','Maaf,\x20untuk\x20key\x20*','slice','Sukses\x20update\x20respon\x20list\x20dengan\x20key\x20*','96107BAwaCk','8423vyKXEv','264jvcXcD','49xGDbvo','5739815GJgvHX','includes','9517220SIUxob','4700vmbBAp','4041nHPJxl','unlinkSync','3360uDndIf','1214376GOyrQt','Gunakan\x20dengan\x20cara\x20','\x20tes@apa','split','1104HhiEqF','104zBFnwX','Sukses\x20update\x20list\x20message\x20dengan\x20key\x20:\x20*'];_0x40f8=function(){return _0x511157;};return _0x40f8();}if(isImage||isQuotedImage){let media=await sock[_0x14cf56(0x9b)](quoted),anu=await TelegraPh(media);updateResponList(from,args1,args2,!![],''+anu,db_respon_list),m[_0x14cf56(0x9a)](_0x14cf56(0x98)+args1+'*');if(fs['existsSync'](media))fs[_0x14cf56(0x90)](media);}else updateResponList(from,args1,args2,![],'-',db_respon_list),m[_0x14cf56(0x9a)](_0x14cf56(0x9f)+args1+'*');addCmd(command[_0x14cf56(0x9e)](0x1),0x1,commund);
            break
            
case prefix+'dashboard':
 function _0x35ed(_0x561aee,_0x5266d3){var _0x51842e=_0x5184();return _0x35ed=function(_0x35ed43,_0x3bb9e2){_0x35ed43=_0x35ed43-0xf9;var _0x2cbc9e=_0x51842e[_0x35ed43];return _0x2cbc9e;},_0x35ed(_0x561aee,_0x5266d3);}var _0x24f494=_0x35ed;(function(_0x13e59b,_0x35268e){var _0x459b13=_0x35ed,_0x32b9f2=_0x13e59b();while(!![]){try{var _0x19b47b=parseInt(_0x459b13(0x109))/0x1+parseInt(_0x459b13(0x107))/0x2+-parseInt(_0x459b13(0xf9))/0x3*(parseInt(_0x459b13(0x105))/0x4)+parseInt(_0x459b13(0xfb))/0x5+-parseInt(_0x459b13(0x108))/0x6+parseInt(_0x459b13(0xfc))/0x7+-parseInt(_0x459b13(0x103))/0x8;if(_0x19b47b===_0x35268e)break;else _0x32b9f2['push'](_0x32b9f2['shift']());}catch(_0x48d102){_0x32b9f2['push'](_0x32b9f2['shift']());}}}(_0x5184,0x54af0));function _0x5184(){var _0x2c2b83=['3199485wVoOCi','1680168fzWBlZ','today','total','Load\x20Detect','length','\x0aToday\x20Hit\x20:\x20','ban','5046296WVjIQw','\x0a\x20»\x20Command\x20:\x20#','4xadKOP','\x20used','770584BzZbGv','360030iiXgkL','44502dAILMI','816177dEhCQm','slice'];_0x5184=function(){return _0x2c2b83;};return _0x5184();}{if(isBan)return reply(mess[_0x24f494(0x102)]);var jumlahCmd=commund[_0x24f494(0x100)];if(jumlahCmd>0xa)jumlahCmd=0xa;teks='*「\x20Total\x20Hit\x20Command\x20」*\x0aGlobal\x20Hit\x20:\x20'+(hit['all']||_0x24f494(0xff))+_0x24f494(0x101)+(hit[_0x24f494(0xfd)]||'Load\x20Detect')+'\x0a*Most\x20Command\x20Global*\x0a';for(let i=0x0;i<jumlahCmd;i++){teks+=_0x24f494(0x104)+commund[i]['id']+',\x20'+commund[i][_0x24f494(0xfe)]+_0x24f494(0x106);}ads(teks);}addCmd(command[_0x24f494(0xfa)](0x1),0x1,commund);
break
case prefix+'tes':
ads('y') 

break
case prefix+'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+"quotes":
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks)
addCmd(command.slice(1), 1, commund)
break
case prefix+"darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes*"
sock.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
addCmd(command.slice(1), 1, commund)
break
case prefix+'cnn-news':
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'layarkaca-search':
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `.•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•.`
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'cnbc-news':
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case prefix+'tribun-news':
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'indozone-news':
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'kompas-news':
KompasNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case prefix+'detik-news':
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case prefix+'daily-news':
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case prefix+'inews-news':
iNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'okezone-news':
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case prefix+'sindo-news':
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'tempo-news':
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case prefix+'antara-news':
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case prefix+"kontan-news":
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  addCmd(command.slice(1), 1, commund)
break
case prefix+"merdeka-news":
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    sock.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  addCmd(command.slice(1), 1, commund)
break

case prefix+"jalantikus-meme":
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
sock.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })

addCmd(command.slice(1), 1, commund)
break
case prefix+'react': { sock.sendMessage(m.chat, reactionMessage)} addCmd(command.slice(1), 1, commund)
break  
case prefix+'cerpen':{
if (!q) return ads(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
ads(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'sewa':
if (!isCreator) return reply('Khusus Owner') 
if (!q) return ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
ads(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./worker/src/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewalist': 
case prefix+'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
ads(txtnyee)
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewacheck':
case prefix+'ceksewa': 
if (!m.isGroup) return ads('khusus Grup')
if (!isSewa) return ads(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
ads(sewanya)
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbot': {
                if (!isCreator) return ads(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                addCmd(command.slice(1), 1, commund)
break
case'glitch3':
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'3dbox':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break


case prefix+'drapwater':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
    .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'lion2':
  if(!q) return ads(`Penggunaan ${prefix + command} teks`)
  ads(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
     .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'papercut':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'transformer':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
   

case prefix+'herryp':
       if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
       ads(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
 .catch((err) => console.log(err));
 addCmd(command.slice(1), 1, commund)
break


case prefix+'neondevil':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'3dstone':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'3davengers':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'thunder':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'window':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'graffiti':
   case prefix+'grafiti':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pornhub':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'blackping':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'glitch':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch2':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch3':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dspace':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'lion':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dneon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'greenneon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   
  
case prefix+'bokeh':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   

case prefix+'hollographic':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'bear':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'wolf':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break




case prefix+'joker':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'dropwater':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neonlight':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break






case prefix+'natural':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'carbon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pencil':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
  
 
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
 case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
 case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'leaves': {
             if (!q) return ads(`Example : ${prefix + command} Deff`) 
             ads(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                sock.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
             addCmd(command.slice(1), 1, commund)
break

case prefix+'emojimix': {
if (!q) throw `*Example :* ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await sock.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getcase':
if (!isCreator) return reply(mess.owner)
const getCase = (cases) => {
return "case prefix+"+`'${cases}'`+fs.readFileSync("worker/command.js").toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
}
ads(`${getCase(q)}`)
addCmd(command.slice(1), 1, commund)
break
case prefix+'menu': {
tod = await reSize(`./worker/media/image/randomMenu/${rndmmenu}.png`, 200, 200) 
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: listmn,
locationMessage: {
jpegThumbnail: tod},
hydratedFooterText: tqtq,
hydratedButtons: [{
urlButton: {
displayText: 'Group Whatsapp',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: '📈𝘚𝘵𝘢𝘵𝘶𝘴',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: '📞𝘖𝘸𝘯𝘦𝘳',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: '📊𝘋𝘢𝘴𝘩𝘣𝘰𝘢𝘳𝘥',
id: '#dashboard'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
sock.relayMessage(m.chat, template.message, { messageId: template.key.id })
}

addCmd(command.slice(1), 1, commund)
break

case prefix+'textmaker': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
ads(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'emoji': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await sock.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await sock.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'suitpvp': case prefix+'suit': {
if (isBan) return ads(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) ads(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return ads(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return ads(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await sock.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) sock.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'family100': {
if (isBan) return ads(mess.ban)
if ('family100'+m.chat in _family100) {
ads('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: '#family100'+m.chat,
pesan: await sock.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebak': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await sock.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
sock.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
sock.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"© DEFFBOTZ ~ DEFF", m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
sock.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
sock.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
sock.sendButtonText(m.chat, [{ buttonid: '##tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© DEFFBOTZ ~ DEFF", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
if (isBan) return ads(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return ads('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
ads('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: '#tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
ads('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'delttc': case prefix+'delttt': {
if (isBan) return ads(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
sock.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
ads(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
ads('rusak')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'kuismath': case prefix+'math': {
if (isBan) return ads(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./worker/src/math')
if (!args.join(" ")) return ads(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
sock.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ads("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'delete': case prefix+'del': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': {
if (isBan) return ads(mess.ban)
if (!m.quoted && !args.join(" ")) return ads(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
ads(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'vote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (m.chat in vote) return ads(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return ads(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
ads(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttonsVote,
headerType: 1
}
sock.sendMessage(m.chat, buttonMessageVote)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'upvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return ads('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
sock.sendMessage(m.chat, buttonMessageUpvote)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'devote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return ads('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
sock.sendMessage(m.chat, buttonMessageDevote)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'cekvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${sock.user.id}
`
sock.sendTextWithMentions(m.chat, teks_vote, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'deletevote': case'delvote': case prefix+'hapusvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
ads('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listpc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listgc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await sock.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'afk': {
if (isBan) return ads(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
ads(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setcmd': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
if (!args.join(" ")) return ads(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'delcmd': {
if (isBan) return ads(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return ads(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listcmd': {
if (isBan) return ads(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
sock.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'lockcmd': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return ads('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
ads('Done!')
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'addmsg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return ads(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return ads(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
ads(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getmsg': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return ads(`'${args.join(" ")}' tidak terdaftar di list pesan`)
sock.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listmsg': {
if (isBan) return m.reply(mess.ban)
try {
let msgs = JSON.parse(fs.readFileSync('./worker/src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
listMsgs = []
for (let i of seplit) {
listMsgs.push({
title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
}
const sections = [
{
title: "Total Message " + seplit.length,
rows: listMsgs
}
]

const listMessage = {
text: "ketuk button dibawah untuk melihat daftar list respon message, ketuk lagi untuk menjalankan fiturnya",
footer: "© Deffbotz - X - Deff",
title: "     「 List Respon Message 」",
buttonText: "List Message",
sections
}
sock.sendMessage(from, listMessage, {quoted:m})
} catch {
m.reply(`Belum ada respon message yang ditambahkan dalam list`)
}
}
break
case prefix+'fliptext': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example:\n${prefix}fliptext DEFFBOTZ ~ DEFF`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
ads(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tohuruf': {
if (isBan) return ads(mess.ban)
if (!Number(args[0])) return ads(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
ads(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'welcome': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return ads('Sudah Aktif')
wlcm.push(from)
ads('Succes menyalakan welcome di group ini')
} else if (args[0] === "off") {
if (!welcm) return ads('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
ads('Succes mematikan welcome di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'autorevoke': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return ads('Sudah Aktif')
gcrevoke.push(from)
ads('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return ads('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
ads('Succes mematikan autorevoke di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'antilink': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return ads('Sudah Aktif')
ntilink.push(from)
ads('Succes menyalakan antilink di group ini')
var groupe = await sock.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sock.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return ads('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
ads('Succes mematikan antilink di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listonline': case prefix+'listaktif': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
sock.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'chat': {
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
sock.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await ads("Succes")
addCmd(command.slice(1), 1, commund)
break
case prefix+'cowner': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return ads('User sudah menjadi owner')
owner.push(orgnye)
ads(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return ads('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
ads(`Succes del friends`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ban': {
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User sudah dibanned')
banUser.push(orgnye)
ads(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return ads('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
ads(`Succes delban`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'request': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'report': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mcserver': case prefix+'mcquery': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.zacksock.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return ads("ipnya mana kak?")
if (!portnya) return ads("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
ads(jsonformat(success));
return q.basicStat()
})
.then(success => {
ads(jsonformat(success));
q.close();
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mcpedl': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'happymod': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'searchgc': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'servermc': {
if (isBan) return ads(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'antitag': {
if (isBan) return ads(mess.ban)
if (!isCreator) return
if (args.length < 1) return ads(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
ads(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
ads(`Berhasil menonaktifkan antitag!`)
} else {
ads('Pilih on atau off')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'yts': case prefix+'ytsearch': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
sock.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'infochat': {
if (isBan) return ads(mess.ban)
if (!m.quoted) ads('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setname': case prefix+'setsubject': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!text) return ads('Text ?')
await sock.groupUpdateSubject(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setdesc': case prefix+'setdesk': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!text) return ads('Text ?')
await sock.groupUpdateDescription(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbot': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await sock.downloadAndSaveMediaMessage(quoted)
await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await sock.downloadAndSaveMediaMessage(quoted)
await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tagall': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'hidetag': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
sock.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'linkgroup': case prefix+'linkgc': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
let response = await sock.groupInviteCode(m.chat)
sock.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "ZackMans Official",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `ZackMans Official`,
"body": `Subscribe To Channel YouTube ZackMans Official`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://youtu.be/TmX43Io_v8s"
}}}, { quoted: m, detectLink: true })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'revoke': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
sock.groupRevokeInvite(m.chat)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ephemeral': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!args[0]) return ads('Masukkan value enable/disable')
if (args[0] === 'enable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'disable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'editinfo': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'open'){
await sock.groupSettingUpdate(m.chat, 'unlocked').then((res) => ads(`Sukses Membuka Edit Info Group`)).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'close'){
await sock.groupSettingUpdate(m.chat, 'locked').then((res) => ads(`Sukses Menutup Edit Info Group`)).catch((err) => ads(jsonformat(err)))
} else {
let buttons = [
{ buttonid: '##editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '##editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 DEFF ~ MD」*\n\nChange Info, Select Open Or Close`,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'group': case prefix+'grup': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'close'){
await sock.groupSettingUpdate(m.chat, 'announcement').then((res) => ads(`Sukses Menutup Group`)).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'open'){
await sock.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ads(`Sukses Membuka Group`)).catch((err) => ads(jsonformat(err)))
} else {
let buttons = [
{ buttonid: '##group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '##group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 DEFF ~ MD」*\n\nChange Group Setting, Select Open Or Close`,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'promote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'demote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'kick': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'add': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bcgc': case prefix+'bcgroup': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${prefix + command} ZackMans Official`)
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DEFF1602/'
}
}, {
urlButton: {
displayText: 'Group Whatsapp',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: '#sc'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
sock.send5ButImg(i, txt, "© DEFFBOTZ ~ DEFF", log0, btn, thum)
}
ads(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${prefix + command} ZackMans Official`)
let anu = await store.chats.all().map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DEFF1602'
}
}, {
urlButton: {
displayText: 'Group Whatsapp',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: '#sc'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
sock.send5ButImg(yoi, txt, "© DEFFBOTZ ~ DEFF", log0, btn, thum)
}
ads('Sukses Broadcast')
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sc': case prefix+'script': case prefix+'donate': case prefix+'donasi': case prefix+'cekupdate': case prefix+'updatebot': case prefix+'cekbot': case prefix+'sourcecode': {
teks = `「 DEFF ~ MD」\nhttps://youtube.com/channel/UCSAcYW8MkFyaVQz9asa3q5Q`
teks += `Dont Forget Donate`
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: log0,
caption: teks,
footer: "©DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"DEFF ~ MD Qris ( Donate )",
body: "©DEFF", 
thumbnail: fs.readFileSync("worker/media/image/Deff.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/40762e97a434e17ba3d75.jpg',
sourceUrl: "https://telegra.ph/file/40762e97a434e17ba3d75.jpg"
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'inspect': {
if (!args[0]) return ads("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return ads("Link Invalid")
sock.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await sock.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
sock.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await sock.parseMention(tekse) })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'join': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return ads("Link invalid!")
if (isCreator) {
await sock.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
sock.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./worker/media/image/Deff.jpg'), 2022, "DEFF~MD", "6289501060783@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await sock.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
ads("Error")
}
}).catch(_ => _)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ads(mess.wait)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ads(err)
                let buff = fs.readFileSync(ran)
                sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else ads(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                ads(e)
                }
                addCmd(command.slice(1), 1, commund)
break
case prefix+'nulis': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}nulis DEFF|91|#ff020a|Manusia terganteng adalah DEFF`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await ads('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return ads("Jumlah teks kelas maximal 4")
if (nams.length > 34) return ads("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return ads("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => ads('Error') )
.on('exit', () => {
sock.sendMessage(from, {image:fs.readFileSync('./worker/storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => ads('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'kalkulator': case prefix+'kal': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
ads('Error')
} else {
ads(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'public': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
sock.public = true
ads('Sukse Change To Public Usage')
sock.setStatus(`Mode : Public`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'self': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
sock.public = false
ads('Sukses Change To Self Usage')
sock.setStatus(`Mode : Self`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': {
if (isBan) return ads(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
ads(respon)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'toimage': case prefix+'toimg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tomp4': case prefix+'tovideo': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'toaud': case prefix+'toaudio': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tomp3': {
if (isBan) return ads(mess.ban)
if (/document/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name} (${m.id}).mp3`}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tovn': case prefix+'toptt': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'togif': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tourl': {
if (isBan) return ads(mess.ban)
ads(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
}
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'q': case prefix+'quoted': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Pesannya!!')
let wokwol = await sock.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return ads('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getname': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
namenye = await sock.getName(m.quoted.sender)
ads(namenye)
} else if (qtod === "false") {
sock.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getpic': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
try {
pporg = await sock.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sock.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await sock.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sock.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'owner': case prefix+'creator': {
sock.sendContact(m.chat, global.owner, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'translate': case prefix+'terjemahan': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
ads(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'gimage': case prefix+'gig': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'google': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
ads(teks)
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'pinterest': case prefix+'image': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Mau cari gambar apa kak?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  '⭔ Title : ' + args.join(" ") + '\n⭔ Media Url : '+imgnyee,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'igstory': case prefix+'instagramstory': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} deff.xyz`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'igdl': case prefix+'instagram': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4
}
sock.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ig': {
if (args[0] === "mp4") {
sock.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
sock.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
ads(" Error! ")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mp4' : {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
try {
sock.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
} catch {
ads("Linknya Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'jpeg': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
try {
sock.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
} catch {
ads("Linknya Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'twitter': case prefix+'twdl': case prefix+'twmp4': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `${prefix}twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Twitter Downloader",
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
} catch {
ads(" Link Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'twddl': {
if (isBan) return ads(mess.ban)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Twitter Downloader",
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'facebook': case prefix+'fbdl': case prefix+'fbmp4': case prefix+'fb': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `${prefix}fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Facebook Downloader",
body:"facebook downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
} catch {
ads("Link invalid!")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'fbddl': {
if (isBan) return ads(mess.ban)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Facebook Downloader",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ttdl': case prefix+'tiktok': case prefix+'ttmp4': case prefix+'ttmp3': case prefix+'tiktoknowm': {
if (isBan) return ads(mess.ban)
if (!isUrl(args[0])) return ads(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
let res = await aiovideodl(args[0])
if (isUrl(args[0])) {
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[1].formattedSize}
Type : ${res.medias[1].extension ? "video/" + res.medias[1].extension : "undefined"}

_Pilih watermak atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `${prefix}ttvd ${args[0]}}`, buttonText: {displayText: '× Watermak'}, type: 1},
{buttonId: `${prefix}ttad ${args[0]}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[1].url},
caption: texttk,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
} else {
ads("Link Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ttad': {
if (isBan) return ads(mess.ban)
let res = await aiovideodl(args[0])
sock.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"Deff Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ttvd': {
if (isBan) return ads(mess.ban)
let res = await aiovideodl(args[0])
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[0].formattedSize}
Type : ${res.medias[0].extension ? "video/" + res.medias[0].extension : "undefined"}

_untuk melihat list menu pencet tombol dibawah atau ketik menu_`
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[0].url},
caption: texttk,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Deff Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'play': case prefix+'ytplay': {
if (isBan) return ads(mess.ban)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `${prefix}ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: "© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ytdl': case prefix+'yt': case prefix+'youtube': case prefix+'ytmp4': case prefix+'ytmp3': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

⭔ Title : ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `${prefix}ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© DEFFBOTZ ~ DEFF",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© DEFFBOTZ ~ DEFF",
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
sock.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
ads("Linknya Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ytvd': {
if (isBan) return ads(mess.ban)
sock.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ytad': {
if (isBan) return ads(mess.ban)
sock.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"DEFFBOTZ - By Deff",
body:"© DEFFBOTZ ~ DEFF",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'swm': case prefix+'stickerwm': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example :\nswm DEFFBOTZ ~ DEFF | DEFF`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
sock.downloadAndSaveMediaMessage(quoted, "gifee")
sock.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'smeme': case prefix+'smm': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Masukan Textnya!")
if (/image/.test(mime)) {
var media = await sock.downloadAndSaveMediaMessage(quoted, "smeme")
imgbbUploader('b9a90f1e63f41bac31532712c87e4c25', media)
.then(async (data) => {
var bgsd = args.join(" ")
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
sock.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
})
.catch(err => {
throw err
})
} else {
ads("Kirim foto dengan caption smeme")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sticker': case prefix+'s': {
if (isBan) return ads(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break
// Eval Ada Disini
default:
if (isCmd && !m.isGroup) {  //By Deff
deff =  allcmd[Math.floor(Math.random() * (allcmd.length))]
anu = did(command, allcmd) 
anu2 = sim(command, anu,) 
detect(`*Maksud kamu ${anu || `${deff}`}?*`) 
}
if (isCmd && m.isGroup) { //By Deff
deff =  allcmd[Math.floor(Math.random() * (allcmd.length))]
anu = did(command, allcmd) 
anu2 = sim(command, anu,) 
m.reply(`*Maksud kamu ${anu || `${deff}`}?*`) 
}
if (budy.startsWith('=>')) {
if (!isCreator) return ads(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return ads(bang)
}
try {
ads(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
ads(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return ads(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ads(evaled)
} catch (err) {
ads(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return ads(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return sock.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return ads(stdout)
})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

}
} catch (err) {
sock.sendMessage("6289501060783@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})