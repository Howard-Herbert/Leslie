module.exports = {
  config: {
    name: "kosto",
    aliases: ["kosto",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 20,
    role: 0,
    shortDescription: "get kosto video",
    longDescription: "it will send you kosto video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Kosto Short video... Please wait! 🕐",
    });
 
    const link = [
"https://drive.google.com/uc?id1Pzarr2F0PQJjrMp3VDRs3Nk9TAghZZyE",
"https://drive.google.com/uc?id=1PVC4HQ8CwX_PPKvCP93h_XFJXLICDuqt",
"https://drive.google.com/uc?id=1Px_HPFVzzj-mML1MNPTatl2c8Di-VkE_",
"https://drive.google.com/uc?id=1Pt-1MGorybmNvSdycYmxhO3nM_4mn9Rb",
"https://drive.google.com/uc?id=1PMtfgMtfSS1ZJuwHAPwJ1w6VKKHKexAW",
"https://drive.google.com/uc?id=1PqLH6QvOEGeFS5h_f6GZ6AeUOTXd2IGl",
"https://drive.google.com/uc?id=1PN_uEtx3DuUDzp75bGQcPbzBCY1mWlSI",
"https://drive.google.com/uc?id=1PhljHBtp7aE5A_fSNkV9EGvUWOk2tQDp",
"https://drive.google.com/uc?id=1PqCce2e9jDjxaqNAmLjwje0I1GI1owIG",
"https://drive.google.com/uc?id=1PfW5ZCbk1SiEKe9ALWzuqOyEPg_y9vQ8",
"https://drive.google.com/uc?id=1PvWhJZ2ZPvlC0QG4t6r10lC0HvmMH6bB",
 
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
        body: '•┄┅════❁🌺❁════┅┄•\n\nআপনি যতো কষ্ট থাকো না কেনো \n Jast say smail And Allahamdulilah😊\n\n•┄┅════❁🌺❁════┅┄•',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
