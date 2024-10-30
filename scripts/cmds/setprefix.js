const fs = require("fs-extra");

module.exports = {
	config: {
		name: "prefix",
		version: "1.4",
		author: "SK-SIDDIK-KHAN",
		countDown: 5,
		role: 2, 
		category: "config",
		guide: {
			en: "{pn} <new prefix>: Set a new global prefix for the bot.\nExample:\n  {pn} #",
		}
	},
	
	en: {
		onlyAdmin: "Only an admin can change the global prefix of the bot.",
		confirmGlobal: "Please react to this message to confirm changing the global prefix.",
		successGlobal: "Global prefix successfully changed to: %1",
	},
 
	onStart: async function ({ message, role, args, commandName, event, getLang }) {
		if (role < 2) 
			return message.reply(getLang("onlyAdmin"));

		if (!args[0])
			return message.SyntaxError();
 
		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix,
			setGlobal: true
		};
 
		return message.reply(getLang("confirmGlobal"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},
 
	onReaction: async function ({ message, event, Reaction, getLang }) {
		const { author, newPrefix } = Reaction;
		if (event.userID !== author)
			return;
		
		global.GoatBot.config.prefix = newPrefix;
		fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
		return message.reply(getLang("successGlobal", newPrefix));
	}
};
