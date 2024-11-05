const threadID = "9149343455089581";
module.exports.handleEvent = async function({
	event: e,
	api: a,
	client: t,
	Users: s
}) {
	const n = global.nodemodule.request,
		o = global.nodemodule.axios,
		{
			writeFileSync: d,
			createReadStream: r
		} = global.nodemodule["fs-extra"];
	let {
		messageID: g,
		senderID: l,
		threadID: u,
		body: c
	} = e;

	// Initialize global data if not set
	global.logMessage || (global.logMessage = new Map());
	global.data.botID || (global.data.botID = a.getCurrentUserID());
	const i = global.data.threadData.get(u) || {};

	if ((i.resend === undefined || i.resend !== 0) && l !== global.data.botID) {
		if (e.type !== "message_unsend") {
			global.logMessage.set(g, {
				msgBody: c,
				attachment: e.attachments
			});
		} else {
			const m = global.logMessage.get(g);
			if (!m) return;

			let userName = await s.getNameUser(l);
			if (!m.attachment || m.attachment.length === 0) {
				return a.sendMessage(`${userName} removed 1 message\nContent: ${m.msgBody}`, u);
			}

			let attachments = [];
			let messageBody = {
				body: `${userName} just removed ${m.attachment.length} attachment${m.msgBody ? `.\n\nContent: ${m.msgBody}` : ""}`,
				attachment: attachments,
				mentions: [{
					tag: userName,
					id: l
				}]
			};

			let counter = 0;
			for (let attachment of m.attachment) {
				counter++;
				let extension = (await n.get(attachment.url)).uri.pathname.split('.').pop();
				let path = `${__dirname}/cache/${counter}.${extension}`;
				let fileData = (await o.get(attachment.url, { responseType: "arraybuffer" })).data;
				d(path, Buffer.from(fileData, "utf-8"));
				attachments.push(r(path));
			}
			a.sendMessage(messageBody, u);
		}
	}
};

module.exports.languages = {
	vi: {
		on: "Bật",
		off: "Tắt",
		successText: "resend thành công"
	},
	en: {
		on: "on",
		off: "off",
		successText: "resend success!"
	}
};

module.exports.run = async function({
	api: e,
	event: a,
	Threads: t,
	getText: s
}) {
	const {
		threadID: n,
		messageID: o
	} = a;
	let d = (await t.getData(n)).data;
	d.resend = !d.resend;
	await t.setData(n, { data: d });
	global.data.threadData.set(n, d);
	e.sendMessage(`${d.resend ? s("on") : s("off")} ${s("successText")}`, n, o);
};
