module.exports = {
  config: {
    name: "lofi",
    aliases: ["lofi",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 5,
    role: 0,
    shortDescription: "get lofi video",
    longDescription: "it will send you Lofi video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Lofi Short video... Please wait! 🕐",
    });
 
    const link = [
 
    "https://drive.google.com/uc?id=16KeE4J7L2Pd8cCKIBvlwEPP07A92b-eb",
    "https://drive.google.com/uc?id=16MhNPi_H0-tEe5PQrrqkx_l7SrC_l0kd",
    "https://drive.google.com/uc?id=15w4cvYmKrCW2Hul2AcvPEk5S4b-CH3EE",
    "https://drive.google.com/uc?id=16Xa6thSHdEGCiypaetbAEqVCwEAzFnKX",
    "https://drive.google.com/uc?id=16BnRPvKQd7gd3YLR_rB9QNZymotMqHu7",
    "https://drive.google.com/uc?id=15fDe2735O50z-3G4yQ5tDT9J873x5izm",
    "https://drive.google.com/uc?id=16HgiGU7_Cdh8NtpsKi92dTJmALJCV8jD",
    "https://drive.google.com/uc?id=16KTSrInqvioGnT7RrAskjHYqz8R6RgNY",
    "https://drive.google.com/uc?id=162yWrNRRTeN4tFEjQEtsR4p-4gWbTFaS",
    "https://drive.google.com/uc?id=16-q768c6nXstZEjQhWa1pZUPL2Xpjwo9",
    "https://drive.google.com/uc?id=15bfkP01mTzXutgP_0Z1iyud7SXqq-jOt",
    "https://drive.google.com/uc?id=15WnvdFOQIhKQ1nlZgsABXaf6Q2nQexGW",
    "https://drive.google.com/uc?id=16GTgYVSIDduUs4VTxadIzPPyp9KA_102",
    "https://drive.google.com/uc?id=15Y2GnA-Kcox8Mw6jioxHc1G1yP4pihnC",
    "https://drive.google.com/uc?id=16-qsG6oldtJiGq11Q3bFxKzuZJRFnoPT",
    "https://drive.google.com/uc?id=15W8ETDBXrn_JvealPwPFQ2CjvZp437-g",
    "https://drive.google.com/uc?id=15StZMKfsTdAhhECdKjS6FUFwG_OIHa7W",
    "https://drive.google.com/uc?id=16lOXxs-Z9u-mxttFnwWzdUHvrP55aHnZ",
    "https://drive.google.com/uc?id=162Qn-pcnc9iijg5dv59S9DTTQOofL4Fy",
    "https://drive.google.com/uc?id=1680rf1wQ2TrRuSLHtTwFC7GYctJAnHaX",
    "https://drive.google.com/uc?id=16-XtMXpa4r1iFJTBS2N68ARMuDH2IWpG",
    "https://drive.google.com/uc?id=15bO3lguAxsMZPvKkcvlsM6ObXOfJMz79",
 
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
        body: '╰‣ 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
 
