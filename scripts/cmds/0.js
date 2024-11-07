const request = require("request");
const axios = require("axios");
const { writeFileSync, createReadStream } = require("fs-extra");

module.exports = {
	config: {
		name: "resend",
		version: "5.0",
		author: "SK-SIDDIK-KHAN",
		countDown: 1,
		role: 0,
		usages: "resend",
		category: "Utility"
	}
};

module.exports.handleEvent = async function ({ event, api, client, Users }) {
	let { messageID, senderID, threadID, body: content } = event;
	
	if (!global.logMessage) global.logMessage = new Map();
	if (!global.data.botID) global.data.botID = api.getCurrentUserID();

	const specifiedThreadID = "8633920226631307";
	const thread = global.data.threadData.get(parseInt(specifiedThreadID)) || {};

	if (typeof thread["resend"] !== "undefined" && thread["resend"] === false) return;
	if (senderID === global.data.botID) return;

	if (event.type !== "message_unsend") {
		global.logMessage.set(messageID, {
			msgBody: content,
			attachment: event.attachments
		});
	} else {
		const getMsg = global.logMessage.get(messageID);
		if (!getMsg) return;

		let name = await Users.getNameUser(senderID);
		if (!getMsg.attachment[0]) {
			return api.sendMessage(
				`${name} unsent a message\n\nContent: ${getMsg.msgBody}`,
				specifiedThreadID
			);
		} else {
			let num = 0;
			let msg = {
				body: `${name} unsent a message\n${
					getMsg.attachment.length
				} Attachment(s)${
					getMsg.msgBody ? `\n\nContent: ${getMsg.msgBody}` : ""
				}`,
				attachment: [],
				mentions: [{ tag: name, id: senderID }]
			};

			for (let i of getMsg.attachment) {
				num += 1;
				try {
					let getURL = await request.get(i.url);
					let pathname = getURL.uri.pathname;
					let ext = pathname.substring(pathname.lastIndexOf(".") + 1);
					let path = __dirname + `/cache/${num}.${ext}`;
					let data = (await axios.get(i.url, { responseType: "arraybuffer" })).data;
					writeFileSync(path, Buffer.from(data, "utf-8"));
					msg.attachment.push(createReadStream(path));
				} catch (error) {
					console.error("Failed to download attachment:", error);
					continue;
				}
			}

			api.sendMessage(msg, specifiedThreadID);
		}
	}
};

module.exports.run = async function ({ api, event, Threads }) {
	const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["resend"] === "undefined" || data["resend"] === false) {
		data["resend"] = true;
	} else {
		data["resend"] = false;
	}

	await Threads.setData(parseInt(threadID), { data });
	global.data.threadData.set(parseInt(threadID), data);

	return api.sendMessage(
		`Resend feature is now ${
			data["resend"] ? "enabled" : "disabled"
		} successfully!`,
		threadID,
		messageID
	);
};
