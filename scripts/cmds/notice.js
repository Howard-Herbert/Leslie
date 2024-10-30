const { getStreamsFromAttachment, checkAndTranslate } = global.utils;
 
module.exports = {
	config: {
		name: "notice",
		version: "1.0",
		author: "SK-SIDDIK-KHAN",
		countDown: 5,
		role: 2,
		shortDescription: "Send notice from admin to all box",
		longDescription: "Send notice from admin to all box",
		category: "owner",
		guide: "{pn} <message>",
		envConfig: {
			delayPerGroup: 250
		}
	},
 
	onStart: async function ({ message, api, event, args, commandName, envCommands }) {
		const { delayPerGroup } = envCommands[commandName];
		if (!args[0])
			return message.reply("Please enter the message you want to send to all groups");
		const formSend = {
			body: `🔰𝙽𝚘𝚝𝚒𝚌𝚎 𝚏𝚛𝚘𝚖 𝙰𝚍𝚖𝚒𝚗🔰\n⊙────────────────⊙\n${args.join(" ")}`,
			attachment: await getStreamsFromAttachment([...event.attachments, ...(event.messageReply?.attachments || [])])
		}
 
 
		const allThreadID = (await api.getThreadList(2000, null, ["INBOX"]))
			.filter(item => item.isGroup === true && item.threadID != event.threadID)
			.map(item => item = item.threadID);
		message.reply(`Start sending notice from admin bot to ${allThreadID.length} Chat group`);
 
		let sendSucces = 0;
		const sendError = [];
		const wattingSend = [];
 
		for (const tid of allThreadID) {
			try {
				wattingSend.push({
					threadID: tid,
					pending: api.sendMessage(formSend, tid)
				});
				await new Promise(resolve => setTimeout(resolve, delayPerGroup));
			}
			catch (e) {
				sendError.push(tid);
			}
		}
 
		for (const sended of wattingSend) {
			try {
				await sended.pending;
				sendSucces++;
			}
			catch (e) {
				sendError.push(sended.threadID);
			}
		}
 
		message.reply(`✅ Sent notice to ${sendSucces} Successful group${sendError.length > 0 ? `\n❌ Error occurs when sent ${sendError.length} the group:\n${sendError.join("\n ")}` : ""}`);
	}
};
