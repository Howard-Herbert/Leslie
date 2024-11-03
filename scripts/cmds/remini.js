const { writeFileSync, existsSync, mkdirSync, createReadStream } = require("fs");
const { join } = require("path");
const axios = require("axios");
const tinyurl = require("tinyurl");

module.exports = {
  config: {
    name: "remini",
    aliases: [],
    version: "2.0",
    author: "Vex_Kshitiz",
    countDown: 20,
    role: 2,
    shortDescription: "Enhance image quality",
    longDescription: "Enhance the image quality using an AI tool",
    category: "tool",
    guide: {
      en: "{p}remini (reply to image)",
    }
  },

  onStart: async function ({ message, event, api }) {
    api.setMessageReaction("🕐", event.messageID, () => {}, true);

    const { type: messageType, messageReply } = event;
    const { attachments, threadID, messageID } = messageReply || {};

    if (messageType === "message_reply" && attachments) {
      const [attachment] = attachments;
      const { url, type } = attachment || {};

      if (!attachment || !["photo", "sticker"].includes(type)) {
        return message.reply("❌ | Reply must be an image.");
      }

      try {
        const shortUrl = await tinyurl.shorten(url);
        const { data } = await axios.get(`https://vex-kshitiz.vercel.app/upscale?url=${encodeURIComponent(shortUrl)}`, {
          responseType: "json"
        });

        const imageUrl = data.result_url;
        const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });

        const cacheDir = join(__dirname, "cache");
        if (!existsSync(cacheDir)) {
          mkdirSync(cacheDir, { recursive: true });
        }

        api.setMessageReaction("✅", event.messageID, () => {}, true);

        const imagePath = join(cacheDir, "remi_image.png");
        writeFileSync(imagePath, imageResponse.data);

        message.reply({ attachment: createReadStream(imagePath) }, threadID);

      } catch (error) {
        console.error("Error occurred while enhancing image:", error);
        message.reply("❌ | Error occurred while enhancing image.");
      }

    } else {
      message.reply("❌ | Please reply to an image.");
    }
  }
};
