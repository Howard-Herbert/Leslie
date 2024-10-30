module.exports = {
  config: {
    name: "attitude",
    aliases: ["attitude",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 20,
    role: 0,
    shortDescription: "get attitude video",
    longDescription: "it will send you attitude video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Attitude Short video... Please wait! 🕐",
    });
 
    const link = [
   "https://drive.google.com/uc?id=1JXqhDn7dpdv9946LqC5pbRqjYSthoAsl",
   "https://drive.google.com/uc?id=1JzbWziwK75R8DcIIWNpPlsLJmGn5WqEP",
   "https://drive.google.com/uc?id=1JYD6e1vkxVLqgPZKOSpkxXXUOpw_hbNg",
   "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
   "https://drive.google.com/uc?id=1K-0JsyNorU-rCimpHytsBGIuR-2_o8Qt",
   "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
   "https://drive.google.com/uc?id=1JzCkq_WrcfiR8c8ZchzI_cIPxJsBKbFl",
   "https://drive.google.com/uc?id=1JBwSwNEhTSH5PKWOfreds1nXWtB3XxZu",
   "https://drive.google.com/uc?id=1JDC_7Neqt2ZnPcZOb30-rbU1TJ52AHsL",
   "https://drive.google.com/uc?id=1JXiBhdHAvuaSJlca2h2SwHW0sasuCAFh"
 
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
        body: '[ 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞 ]',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
