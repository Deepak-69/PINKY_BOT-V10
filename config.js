const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v10.0.0.1',
    CHANNEL: 'https://t.me/dipak_sharma_404',
    GANSTYLE: 'https://i.hizliresim.com/loUtAb.jpg',
    SESSION: process.env.PINKY_SESSION === undefined ? '' : process.env.PINKY_SESSION,
    LANG: process.env.LANGUAGE === undefined ? 'en' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: '\n ```I Am Alive !!!```\n\n```Type``` *.help* ```for commands```',
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '918921483992,0' : process.env.YAK,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    ANTİLİNK: 'false',
    AUTOBİO: 'true',
    KICKMEMSG: 'default',
    OWNER: 'Xei Sensei',
    ALL: 'Heheh 😗❤️',
    MENTION:'918252005404@s.whatsapp.net',
    ADDMSG: 'default',
    MUTEMSG: 'default',
    BOT: '⊢‒‒‒ ⋈ PINKY ⋈ ‒‒‒⊣',
    NOLOG: 'true',
    THERI_KICK: 'false',
    SONGD: 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ',
    SONGU: 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ',
    TALKING_PINKY: 'true',
    BLOCKMSG: 'default',
    UNBLOCKMSG: 'default',
    UNMUTEMSG: 'default',
    GEAR: 'one',
    PROMOTEMSG: 'default',
    DEMOTEMSG: 'default',
    BANMSG: 'default',
    AFKMSG: 'default',
    WEL_GIF: 'https://i.imgur.com/nErXUGj.mp4',
    BYE_GIF: 'https://i.imgur.com/Z1jCYGN.mp4',
    HANDLERS: '^[./;]',
    TAGPLK: 'Note this',
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "9055243127852-16123002121",
    SUPPORT2: "9170120724386-16321435717",
    SUPPORT3: "9190727902587-16357752355",
    SUPPORT4: "9055113842572-16253192286"
};
