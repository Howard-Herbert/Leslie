module.exports = {
  config: {
    name: "inbox",
    aliases: ["inbox", "in"],
    version: "1.0",
    author: "SK-SIDDIK-KHAN", 
    countDown: 10,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
   try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("╭────────────────⊙\n├─☾ 𝐂𝐇𝐄𝐂𝐊 𝐘𝐎𝐔𝐑 𝐈𝐍𝐁𝐎𝐗\n╰────────────────⊙", event.threadID);
      api.sendMessage("𝐀𝐒𝐒𝐀𝐋𝐀𝐌𝐔 𝐖𝐀𝐋𝐀𝐈𝐊𝐔𝐌", event.senderID);
    } catch (error) {
      console.error("╭────────────────⊙\n├─☾ 𝐄𝐑𝐑𝐎𝐑 𝐁𝐑𝐎\n╰────────────────⊙ " + error);
    }
  }
};
 
