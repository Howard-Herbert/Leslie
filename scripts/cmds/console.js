const chalk = require('chalk');
const gradient = require('gradient-string');
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "console",
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 5,
    role: 0,
    category: "user",
  },

    onStart: async function ({ message, event, args, api }) {
        let { threadID, senderID, body } = event;
        
        const now = new Date();
        const formattedTime = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka" });
        const formattedDate = now.toLocaleDateString("en-US", { year: "numeric", month: "numeric", day: "numeric" });

        const thread = await api.getThreadInfo(threadID);
        const threadName = thread.threadName || "Unknown Group";

        const userInfo = await api.getUserInfo(senderID);
        const userName = userInfo[senderID].name || "Unknown User";

        if (senderID === api.getCurrentUserID()) return;
        if (thread.console === false) return;

        const gradientText = (text) => gradient('cyan', 'pink')(text);
        const boldText = (text) => chalk.bold(text);

        console.log(gradientText("━━━━━━━━━━[ DATABASE THREADS BOT LOGS ]━━━━━━━━━━"));
        console.log(gradientText("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"));
        console.log(`${boldText(gradientText(`┣➤ Group: ${threadName}`))}`);
        console.log(`${boldText(gradientText(`┣➤ Group ID: ${threadID}`))}`);
        console.log(`${boldText(gradientText(`┣➤ User: ${userName}`))}`);
        console.log(`${boldText(gradientText(`┣➤ User ID: ${senderID}`))}`);
        console.log(`${boldText(gradientText(`┣➤ Content: ${body || "N/A"}`))}`);
        console.log(`${boldText(gradientText(`┣➤ Date: ${formattedDate}`))}`);
        console.log(`${boldText(gradientText(`┣➤ Time: ${formattedTime}`))}`);
        console.log(gradientText("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"));

        const messageContent = `
━━[ THREADS BOT LOGS ]━━\n
┏━━━━━━━━━━━━━━━━━┓
┣➤ ${userName}
┣➤ Gc: ${threadName}
┣➤ Tid : ${threadID}
┣➤ Content: ${body || "N/A"}
┣➤ Time: ${formattedTime}
┣➤ Date: ${formattedDate}
┣➤ Owner : SK-SIDDIK-KHAN
┗━━━━━━━━━━━━━━━━━┛`;
        api.sendMessage(messageContent, threadID);
    }
};
