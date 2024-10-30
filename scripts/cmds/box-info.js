const fs = require("fs-extra");
const request = require("request");
module.exports = {
  config: {
    name: "gc",
    aliases: ["box", "group"],
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    role: 0,
    category: "user",
  },

  onStart: async function ({ api, event, usersData, args, commandName }) {
    console.log("Command name:", commandName); 
    console.log("Arguments received:", args); 

    if (args.length > 0 && args[0] === "info" && 
        (commandName === "group" || commandName === "box" || commandName === "gc")) {
      try {
        const groupInfo = await api.getThreadInfo(event.threadID);
        const maleCount = groupInfo.userInfo.filter(u => u.gender === "MALE").length;
        const femaleCount = groupInfo.userInfo.filter(u => u.gender === "FEMALE").length;
        const totalMembers = groupInfo.participantIDs.length;
        const adminCount = groupInfo.adminIDs.length;
        const messageCount = groupInfo.messageCount || 0;
        const now = new Date();
        const formattedTime = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka" });
        const formattedDate = now.toLocaleDateString("en-US", { year: "numeric", month: "numeric", day: "numeric" });
        const userData = await usersData.get(event.senderID);
        const userName = userData ? userData.name : "Unknown User";
        const groupDetails = `
┏━━━━━━━━━━━━━━━━━━☾︎
┃𝐔𝐬𝐞𝐫 : ${userName}
┃𝐆𝐜 𝐍𝐚𝐦𝐞 : ${groupInfo.threadName}
┃𝐆𝐜 𝐓𝐢𝐝 : ${event.threadID}
┃𝐄𝐦𝐨𝐣𝐢 : ${groupInfo.emoji || "N/A"}
┃𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬 : ${totalMembers}
┃𝐌𝐚𝐥𝐞𝐬 : ${maleCount}
┃𝐅𝐞𝐦𝐚𝐥𝐞𝐬 : ${femaleCount}
┃𝐀𝐝𝐦𝐢𝐧𝐬 : ${adminCount}
┃𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐬 : ${messageCount}
┃𝐓𝐢𝐦𝐞 : ${formattedTime}
┃𝐃𝐚𝐭𝐞 : ${formattedDate}
┃𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍
┃𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 𝐒𝐤 𝐁𝐨𝐭
┗━━━━━━━━━━━━━━━━━━☾︎`;
        const imagePath = `${__dirname}/cache/group_info.png`;
        const imageSrc = groupInfo.imageSrc || ''; 
        request(encodeURI(imageSrc))
          .pipe(fs.createWriteStream(imagePath))
          .on("close", () => {
            api.sendMessage(
              {
                body: groupDetails,
                attachment: fs.createReadStream(imagePath),
                mentions: []
              },
              event.threadID,
              () => fs.unlinkSync(imagePath),
              event.messageID
            );
          });
      } catch (error) {
        console.error("Error fetching group information:", error);
        api.sendMessage("An error occurred while fetching group information. Please try again later.", event.threadID, event.messageID);
      }
    } else {
      api.sendMessage("Try gc info box info group info", event.threadID, event.messageID);
    }
  },
};
