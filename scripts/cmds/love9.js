const axios = require('axios');
const jimp = require("jimp");
const Canvas = require("canvas");
const fs = require("fs");
const path = require("path");
const fsExtra = require("fs-extra");  

module.exports = {
    config: {
        name: "love9",
        version: "1.0",
        author: "SK-SIDDIK-KHAN",
        role: 0
    },

    onStart: async function ({ message, event, args, api }) {
        const { downloadFile } = global.utils;
        const dirMaterial = path.join(__dirname, '/cache/canvas/');
        const imgPath = path.resolve(dirMaterial, 'crush11112.png');

        if (!fsExtra.existsSync(dirMaterial)) fsExtra.mkdirSync(dirMaterial, { recursive: true });

        if (!fsExtra.existsSync(imgPath)) {
            await downloadFile("https://i.imgur.com/lvj8vbM.png", imgPath);
        }

        const { threadID, messageID, senderID } = event;
        const mention = Object.keys(event.mentions);
        
        if (!mention[0]) {
            return api.sendMessage("💚 যার সাথে ফ্রেম বানাতে চান তাকে মেনশন করুন🖤", threadID, messageID);
        } else {
            const one = senderID;
            const two = mention[0];

            return makeImage({ one, two }).then((imagePath) => {
                api.sendMessage({
                    body: "•🦋🍒 𝐭𝐫𝐮𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬𝐡𝐢𝐩 𝐜𝐨𝐦𝐞𝐬 𝐰𝐡𝐞𝐧 𝐭𝐡𝐞 𝐬𝐢𝐥𝐢𝐞𝐧𝐜𝐞 𝐩𝐞𝐨𝐩𝐥𝐞 𝐢𝐬 𝐜𝐨𝐦𝐩𝐨𝐫𝐭𝐚𝐛𝐥𝐞..🦋🍒•",
                    attachment: fs.createReadStream(imagePath)
                }, threadID, () => fs.unlinkSync(imagePath), messageID);
            });
        }
    }
};

async function makeImage({ one, two }) {
    const __root = path.resolve(__dirname, "cache", "canvas");

    const batgiamImg = await jimp.read(path.join(__root, "crush11112.png"));
    const pathImg = path.join(__root, `batman${one}_${two}.png`);
    const avatarOne = path.join(__root, `avt_${one}.png`);
    const avatarTwo = path.join(__root, `avt_${two}.png`);

    const getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    const getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    const circleOne = await jimp.read(await circle(avatarOne));
    const circleTwo = await jimp.read(await circle(avatarTwo));
    
    batgiamImg.composite(circleOne.resize(196, 196), 109, 141).composite(circleTwo.resize(190, 190), 552, 144);

    const raw = await batgiamImg.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}

async function circle(image) {
    const img = await jimp.read(image);
    img.circle();
    return await img.getBufferAsync("image/png");
}
