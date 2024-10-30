module.exports = {
  config: {
    name: "couple",
    aliases: ["couple",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 20,
    role: 0,
    shortDescription: "get couple video",
    longDescription: "it will send you couple video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Couple Short video... Please wait! 🕐",
    });
 
    const link = [
    "https://drive.google.com/uc?id=1xLc_9r1TYGVM0J33hJ61hmW3yXOBTcEo",
    "https://drive.google.com/uc?id=1xFVA97twVhvJJzmxhXjT9QukwWEDRO2a",
    "https://drive.google.com/uc?id=1xC8J23XORH4zHsXCDkfrgzmVBm1_-b5E",
    "https://drive.google.com/uc?id=1x5EX0grUJwEKzHyzeR63HnzC_UlDdJD6",
    "https://drive.google.com/uc?id=1xM82tBosefpCvaDokhufHoikub1Opupz",
    "https://drive.google.com/uc?id=1xhCqfx7pScogeGph4T4ITnRJFYcUNmJ8",
    "https://drive.google.com/uc?id=1xTgkjk__QRMOVQnkQsSIcEzGfRUwUDLY",
    "https://drive.google.com/uc?id=1xRsWDPe485xXPna9nWhj0TaW_Q9lVJDd",
    "https://drive.google.com/uc?id=1xC30T2eSDWZGr_O8699yxaMS-AZ_X5y8",
    "https://drive.google.com/uc?id=1xcoHMLkNU1naPET4bP2sEiHoXUF23w-R",
    "https://drive.google.com/uc?id=1xcN88lPjPoRJhdxCUesuTFFArtvbUNL2",
    "https://drive.google.com/uc?id=1xUee8t4ukXW_XD4K4pGV_I4VFccwdyqt",
    "https://drive.google.com/uc?id=1xgfepctwXjZ5Y9kxhD3HcTTaJcsWHi-x",
    "https://drive.google.com/uc?id=1xhymaD6J1patQzfass5-e4ewUDg8gnQ9",
    "https://drive.google.com/uc?id=1xCvCvUa2zVWLm3y1pAGFKrr-emyaFicK",
    "https://drive.google.com/uc?id=1x87CHgjwaOjANyN_06_JqB-YKaUQGU2b",
 
 
];
 
    const availableVideos = link.filter(video => !this.sentVideos.includes(video));
 
    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }
 
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];
 
    this.sentVideos.push(randomVideo);
 
    if (senderID !== null) {
      message.reply({
        body: '[-𝐂𝐑𝐄𝐀𝐓𝐄 𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊-]',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
