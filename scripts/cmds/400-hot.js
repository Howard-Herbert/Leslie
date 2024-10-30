module.exports = {
  config: {
    name: "hot",
    aliases: ["hot",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 20,
    role: 0,
    shortDescription: "get hot video",
    longDescription: "it will send you hot video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Hot Short video... Please wait! 🕐",
    });
 
    const link = [
      "https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO",
      "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x",
      "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr",
      "https://drive.google.com/uc?id=1tlon-avneE7lQF2rS13GOeiuLWIUEA7J",
      "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3",
      "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu",
      "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC",
      "https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W",
      "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i",
      "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg",
      "https://drive.google.com/uc?id=1t2oFQmOtw-6V_ahWzYo08v1g2oGnkhPL",
      "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp",
      "https://drive.google.com/uc?id=1svD1h3vEYbwxMeU5v4c2wQPBaU90fcEx",
      "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb",
      "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91",
      "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR",
      "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0",
      "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L",
      "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9",
      "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V",
      "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f",
      "https://drive.google.com/uc?id=1tqaCw0vfG2zJDijgsFF2UTlOB-EmI4SZ",
      "https://drive.google.com/uc?id=1seUwXvoVFyCzOA5SykF9uxhlwuwLzPn0",
 
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
        body: '╰‣ 𝐇𝐎𝐓 𝐕𝐈𝐃𝐄𝐎',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
