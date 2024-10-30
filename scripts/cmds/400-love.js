module.exports = {
  config: {
    name: "lovestory",
    aliases: ["lovestory",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 20,
    role: 0,
    shortDescription: "get lovestory video",
    longDescription: "it will send you lovestory video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Love Story Short video... Please wait! 🕐",
    });
 
    const link = [
  "https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL",
    "https://drive.google.com/uc?id=1YHm_oC7xItLokbt_MCWu-VdMGavvx-G4",
    "https://drive.google.com/uc?id=1YvDanPpMZKK4s547h9Bsf0uL719AvVEG",
    "https://drive.google.com/uc?id=1YemK-RQH3gUX_I9ThgNJLC89yPF-VtEY",
    "https://drive.google.com/uc?id=1YN25UGQQCpZvN29Y5a84ZCYlL-rc_JL_",
    "https://drive.google.com/uc?id=1YXbox7CyKc6Gu-56WAtAPlxSTs51Yo9n",
    "https://drive.google.com/uc?id=1YNVe1cEM0JM3lj7sU49tuJn4-8ASYVd8",
    "https://drive.google.com/uc?id=1ZDjeuPfIyUkovgmJCRsE7vE67aOe0Sp2",
    "https://drive.google.com/uc?id=1YcJciCtidcUxRGihUyx2uDgDg3cBYUE5",
    "https://drive.google.com/uc?id=1ZIE6xPwXg6_oxG0K7xCWKS04MNyag3QL",
    "https://drive.google.com/uc?id=1ZF9cOD_fj26rpWDf6WOjUQNz8QuRJhkv",
    "https://drive.google.com/uc?id=1ZAXQwA5BsnN555FrWii2bb-kdLaoMxLP",
    "https://drive.google.com/uc?id=1YvWRk-wQ_I8kuJzOuw2Mx7Q-Rrgbw6CT",
    "https://drive.google.com/uc?id=1Z8vKgEBUkKbwgMPvv_6K_lvVsrBca_X8",
    "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV",
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
        body: '["𝗠𝗔𝗗𝗘 𝗕𝗬 𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞"]',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
