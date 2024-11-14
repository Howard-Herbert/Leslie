const axios = require('axios');

module.exports = {
  config: {
    name: "ephoto",
    aliases: ["ep"],
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "Make A ephoto logo",
    longDescription: "Make A ephoto logo",
    category: "ephoto",
    guide: {
      en: "{pn}[text] | [number]",
    }
  },

  onStart: async function ({ api, message, args, event }) {
    try {
      api.setMessageReaction("⏰", event.messageID, (err) => {}, true);
    const fuck = event.body.slice(event.body.indexOf(' ') + 1);
      const [number, text] = fuck.split(" ").map((item) => item.trim());
    if (!text && !number) {
      return message.reply("❎ | Please enter a number and select text\n🔰  Example: {pn}[number]  [text]");
    }
         if (number == "1"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html"}
  if (number == "2"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-vang-ruc-215.html"}
  if (number == "3"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-tim-175.html"} 
  if (number == "4"){ var url = "https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html"} 
  if (number == "5"){ var url = "https://ephoto360.com/hieu-ung-viet-chu-len-cua-so-mua-truc-tuyen-806.html"}
  if (number == "6"){ var url = "https://ephoto360.com/hieu-ung-tao-chu-ky-anh-sang-nhieu-mau-sac-686.html"} 
  if (number == "7"){ var url = "https://ephoto360.com/hieu-ung-ve/viet-chu-galaxy-bat-17.html"}
  if (number == "8"){ var url = "https://ephoto360.com/hieu-ung-chu-anh-sang-theo-phong-cach-cong-nghe-tuong-lai-769.html"} 
  if (number == "9"){ var url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html"} 
  if (number == "10"){ var url = "https://ephoto360.com/tao-hinh-nen-cho-dien-thoai-theo-phong-cach-galaxy-cuc-chat-586.html"} 
  if (number == "11"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-neon-da-sac-truc-tuyen-985.html"} 
  if (number == "12"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-galaxy-canh-thien-than-moi-289.html"} 
  if (number == "13"){ var url = "https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html"} 
  if (number == "14"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-da-quy-hong-ngoc-3d-281.html"} 
  if (number == "15"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-cam-thach-hoa-van-275.html"} 
  if (number == "16"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-mau-sac-160.html"} 
  if (number == "17"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html"} 
  if (number == "18"){ var url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"} 
  if (number == "19"){ var url = "https://ephoto360.com/hieu-ung-lua/hieu-ung-chu-canh-lua-372.html"} 
  if (number == "20"){ var url = "https://ephoto360.com/tao-anh-bia-7-vien-ngoc-rong-dragon-ball-online-dep-doc-chat-nhat-476.html"} 
  if (number == "21"){ var url = "https://ephoto360.com/sinh-nhat/ghi-loi-chuc-len-banh-sinh-nhat-229.html"} 
  if (number == "22"){ var url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"} 
  if (number == "23"){ var url = "https://ephoto360.com/tao-anh-bia-one-piece-dao-hai-tac-truc-tuyen-cuc-dep-626.html"} 
  if (number == "24"){ var url = "https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html"}
  if (number == "25"){ var url = "https://ephoto360.com/che-video-trung-thu-fa-voi-ten-cua-ban-700.html"} 
  if (number == "26"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-phong-cac-retro-67.html"} 
  if (number == "27"){ var url = "https://ephoto360.com/tao-logo-theo-ten-phong-cach-galaxy-460.html"} 
  if (number == "28"){ var url = "https://ephoto360.com/tao-logo-phong-cach-may-chieu-3d-518.html"} 
  if (number == "29"){ var url = "https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.htmll"} 
  if (number == "30"){ var url = "https://ephoto360.com/tao-logo-avatar-du-lich-phong-cach-den-trang-643.html"} 
  if (number == "31"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-bang-tuyet-107.html"} 
  if (number == "32"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-digital-glitch-truc-tuyen-941.html"} 
  if (number == "33"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-phao-bong-356.html"} 
  if (number == "34"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-canh-thien-than-176.html"} 
  if (number == "35"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-duoi-nuoc-73.html"} 
  if (number == "36"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-giot-nuoc-106.html"} 
  if (number == "37"){ var url = "https://ephoto360.com/hieu-ung-ve/tao-hieu-ung-chu-ban-dem-hieu-ung-lend-cho-chu-147.html"} 
  if (number == "38"){ var url = "https://ephoto360.com/hieu-ung-chu/viet-chu-vang-ngoc-online-285.html"} 
  if (number == "39"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html"} 
  if (number == "40"){ var url = "https://ephoto360.com/viet-ten-len-cong-nghia-trang-halloween-kinh-di-698.html"} 
  if (number == "41"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-day-toc-bong-den-dien-219.html"} 
  if (number == "42"){ var url = "https://ephoto360.com/hieu-ung-chu/viet-chu-len-so-co-la-chocolate--186.html"} 
  if (number == "43"){ var url = "https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html"} 
  if (number == "44"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html"} 
  if (number == "45"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-equalizer-music-259.html"} 
  if (number == "46"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-may-tren-bau-troi-711.html"} 
  if (number == "47"){ var url = "https://ephoto360.com/tao-logo-phong-cach-blackpink-kem-chu-ky-cac-thanh-vien-1002.html"} 
  if (number == "48"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html"}
  if (number == "49"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html"}
  if (number == "50"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-kim-loai-sang-bong-3d-online-811.html"}
  if (number == "51"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-bong-den-trang-tri-3d-truc-tuyen-713.html"}
  if (number == "52"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-3d-gradient-tuyet-dep-online-702.html"}
  if (number == "53"){ var url = "https://ephoto360.com/hieu-ung-lua/hieu-ung-chu-canh-lua-372.html"}
  if (number == "54"){ var url = "https://ephoto360.com/halloween/hieu-ung-chu-lua-halloween-online-369.html"}
  if (number == "55"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-canh-thien-than-329.html"}
  if (number == "56"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-kim-loai-moi-305.html"}
  if (number == "57"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-galaxy-mam-cay-an-tuong-288.html"}
  if (number == "58"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-bac-210.html"}
  if (number == "59"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-galaxy-thien-than-206.html"}
  if (number == "60"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-hong-183.html"}
  if (number == "61"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-tim-175.html"}
  if (number == "62"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-logo-chu-kim-loai-phien-ban-tong-xanh-174.html"}
  if (number == "63"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-logo-theo-cach-cua-ban-logo-viettel-156.html"}
  if (number == "64"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-phao-sang-xanh-140.html"}
  if (number == "65"){ var url = "https://ephoto360.com/halloween/hieu-ung-chu-dem-halloween-81.html"}
  if (number == "66"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-ngoi-sao-kim-loai-109.html"}
  if (number == "67"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-kim-loai-voi-font-chu-doc-307.html"}
  if (number == "68"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-avatar-rong-lua-111.html"}
  if (number == "69"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-tren-la-248.html"}
  if (number == "70"){ var url = "https://ephoto360.com/hieu-ung-chu/viet-chu-phan-len-bang-30.html"}
  if (number == "71"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-anh-long-chu-217.html"}
  if (number == "72"){ var url = "https://ephoto360.com/tinh-yeu/bong-chu-tinh-yeu-204.html"}
  if (number == "73"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-kim-loai-voi-font-chu-doc-307.html"}
      
const {textpro, ephoto} = require("nayan-server")

        const data = await ephoto(url, [text])
      const img = data.url;
      console.log(data)
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                 const form = {
        body: ` ┏━━━━━━━━━━━━━━━━━┓
┣➤ 𝐇𝐄𝐑𝐄 𝐘𝐎𝐔𝐑 𝐄𝐏𝐇𝐎𝐓𝐎
┣➤𝐋𝐎𝐆𝐎 𝐍𝐔𝐌𝐁𝐄𝐑 ${number}
┣➤𝐓𝐎𝐓𝐀𝐋 𝐏𝐇𝐎𝐓𝐎 𝟕𝟑\n┣➤𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍\n┗━━━━[𝗦𝗜𝗗𝗗𝗜𝗞-𝗕𝗢𝗧]━━━━━┛`,
      };
        form.attachment = []
        form.attachment[0] = await global.utils.getStreamFromURL(img);
      message.reply(form);

      } catch (err) {
        api.setMessageReaction("❎", event.messageID, (err) => {}, true);
        console.log(err);
      };
}
}
