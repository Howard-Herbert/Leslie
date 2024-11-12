const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "check",
    version: "0.9",
    author: "SK-SIDDIK-KHAN",
    role: 2,
    category: "user",
    usage: "owner",
  },

  onStart: async function ({ message, args, event, threadsData, role, usersData }) {
    const { threadID, senderID } = event;
    const threadData = await threadsData.get(threadID);

    const userName = (await usersData.getName(senderID)) || "User";

    const commandName = args[0]?.toLowerCase();
    if (!commandName) {
      return await message.reply("Please provide a command name to view all details");
    }

    const command = commands.get(commandName) || commands.get(aliases.get(commandName));
    
    if (!command) {
      await message.reply(`Command "${commandName}" not found.`);
    } else {
      const configCommand = command.config;
      const roleText = roleTextToString(configCommand.role);
      const author = configCommand.author || "Author Not Found";

      const longDescription = configCommand.longDescription?.en || "No description";
      const guideBody = configCommand.guide?.en || "Guide not found";
      const usage = guideBody.replace(/{n}/g, configCommand.name);

      const response = `┏━━━━━━━━━━━━━━━━━┓\n┣➤ ${userName}\n┣➤ Name: ${configCommand.name} \n┣➤ Description: ${longDescription} \n┣➤ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "None"} \n┣➤ Version: ${configCommand.version || "1.0"} \n┣➤ Role: ${roleText} \n┣➤ Author: ${author} \n┣➤ Usage: ${usage}\n┗━━━━[𝗦𝗜𝗗𝗗𝗜𝗞-𝗕𝗢𝗧]━━━━━┛`;

      await message.reply({
        body: response,
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/tviVmB8.jpeg")
      });
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "User";
    case 1:
      return "Box Admin";
    case 2:
      return "Only Bot Admin";
    default:
      return "Not Found";
  }
}
