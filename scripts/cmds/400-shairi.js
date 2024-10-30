module.exports = {
  config: {
    name: "shairi",
    aliases: ["shairi",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 5,
    role: 0,
    shortDescription: "get shairi video",
    longDescription: "it will send you shairi video from lyrics edit vibe group",
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
    "https://drive.google.com/uc?id=1GtiVmOs2VMH1FuryKDb_p864NGrLP_iK",
    "https://drive.google.com/uc?id=1HWBJDDQdJPqpEc7VwJux1STI4aRAta1L",
    "https://drive.google.com/uc?id=1HeE-vnNZdfrA-CLR6tInVftZhdelNUGB",
    "https://drive.google.com/uc?id=1GqP65X_yWywBc5D0mfjTh9mUfQzmh8fb",
    "https://drive.google.com/uc?id=1GRSc0p6O1O03be1EKx1DYrIg1BLqRCxs",
    "https://drive.google.com/uc?id=1GYJRHvr7MQuNv9edlg153ZzAJnvFQU_y",
    "https://drive.google.com/uc?id=114bQWGar2c_qAQ8xLcqwuxjr3YJxD7GR",
    "https://drive.google.com/uc?id=11B_AoQejKb11TRBugmySc3k25U5qkY5z",
    "https://drive.google.com/uc?id=10x0iIUbpV12DRMnC-anCf29PNcwuGZIU",
    "https://drive.google.com/uc?id=11DrJUgGla-bP6yg0G1hnQbA5Kj0EFlI5",
    "https://drive.google.com/uc?id=1sX1cBCQv4qppFdeORJpt1Tjf9qW7vfL5",
    "https://drive.google.com/uc?id=1sGyqYbRQD8dCOJugEV7eyPqJUTRO8LYH",
    "https://drive.google.com/uc?id=1sEye37kl21741pRAjoLxKJh4uctn3IGT",
    "https://drive.google.com/uc?id=1sRb7zhf68GfkdUEmOBr3qDoXxn9ThT6T",
    "https://drive.google.com/uc?id=1sSeQumcIINAS1RQzngs8IqmXikORSmRU",
    "https://drive.google.com/uc?id=1sMQwfiNWRqSKkh2FeMBc4kslOKhARgOe",
    "https://drive.google.com/uc?id=1sbI30bNjdgUOljU1BZRz5zSEqgjitkVZ",
    "https://drive.google.com/uc?id=1sQwXPnF3RXk_PVSIu1WJi4pSqGkkuqup",
    "https://drive.google.com/uc?id=1sAjzw4me9PdY12I74zyxQhqEjSX_uaYl",
    "https://drive.google.com/uc?id=1sHehVkqa5weubDxUhgmcpxXK0XYJC7li",
    "https://drive.google.com/uc?id=1sU-zi4PuvwiEiT8akTR6qRArM8Lpp-cM",
    "https://drive.google.com/uc?id=1sZkJajZxbAq5k0vp-Og0N-jt7XuJRec8",
    "https://drive.google.com/uc?id=1sIb8Djq4pdAwLi0YCqbmzHMpAip9DScA",
    "https://drive.google.com/uc?id=1s9OpuKFfkZHhDjka-On1-PtlsOupDeWp"
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
