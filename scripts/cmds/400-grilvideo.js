module.exports = {
  config: {
    name: "grilvideo",
    aliases: ["grilvideo",],
    version: "1.0",
    author: "SIDDIK",
    countDown: 5,
    role: 0,
    shortDescription: "get gril video",
    longDescription: "it will send you gril video from lyrics edit vibe group",
    category: "music",
    guide: "{pn} bd",
  },
 
  sentVideos: [],
 
  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading gril Short video... Please wait! 🕐",
    });
 
    const link = [
 
  "https://docs.google.com/uc?export=download&id=1DawiOQUSBckYP4kcWj6QPBSPz94BWIUJ","https://docs.google.com/uc?export=download&id=1Gc_OnYGPPSgaE6kPI7RPHRhWPwe9MBdN","https://docs.google.com/uc?export=download&id=1GUxLPXj9kAdL7F1MxHsFJZMBttqpDOb4","https://docs.google.com/uc?export=download&id=1DeBik55mWBCHpJKgrBT0xNStxPVachgW","https://docs.google.com/uc?export=download&id=1Ghnx7nMCplG4d8I_xSWWe6BZSAFgRspj","https://docs.google.com/uc?export=download&id=1GUQJZYCYQmpYl83o0CcOxnsoC9C0kvjK","https://docs.google.com/uc?export=download&id=1Hpu3XWiZwpByelw88ef-wAioQjNS6Koa","https://docs.google.com/uc?export=download&id=1HelQwAtAyOG9mLnoZT6o6lyXTGF8g9Hc","https://docs.google.com/uc?export=download&id=1HLXduymqePP7vbHVNe-hR2V_XQigChiZ","https://docs.google.com/uc?export=download&id=1HFUhx_Dd39U-9AmjCNky20cfl5muN301","https://docs.google.com/uc?export=download&id=1HEoCHXnnnDBxwY0LHi2WPe_QXkasVmOq","https://docs.google.com/uc?export=download&id=1H7QofEMsDnsMvZe0PEyXrjwfg7PAR1vb","https://docs.google.com/uc?export=download&id=1H389OrKf0dboIfTobyALuueGTTnVDinE","https://docs.google.com/uc?export=download&id=1J4SYoF0VZAof_d5TzcXjgYCw_V6HXFFi","https://docs.google.com/uc?export=download&id=1J3cs7GtAaF_BpKePvkl7pFHJQ4orYVRJ","https://docs.google.com/uc?export=download&id=1J0K8-lKfqWMr0ACvYNdX5SWGrpSRt3BT","https://docs.google.com/uc?export=download&id=1IumFe6sshNrYWfcoJk6qNMEdju-gu7am","https://docs.google.com/uc?export=download&id=1IpsM14OqAQ2SSyARfGjqlAWetzCunKiC","https://docs.google.com/uc?export=download&id=1ImY9Z3pBnXSFHzHfHfXJ8Aismr36glbj","https://docs.google.com/uc?export=download&id=1Ijcki7IG6SRHxiso-kM7cOTHZhlEJmlp","https://docs.google.com/uc?export=download&id=1Ib19ibDGpRa_KpTdE5tsZPCMNji9XP2u","https://docs.google.com/uc?export=download&id=1IaeDKKa9CjqvVWoxPJebTSk1bzaV8Is9","https://docs.google.com/uc?export=download&id=1IZ7Yu-TsNumb27SUhkdZecYm27gfBAa2","https://docs.google.com/uc?export=download&id=1J9alVPXRz5VstiunCjPTrCFP5d4B4XrE","https://docs.google.com/uc?export=download&id=1J7Mv7v3izDNwL8BaInpLEvUPrTMVQyNw"
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
        body: '╰‣ 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞 ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
