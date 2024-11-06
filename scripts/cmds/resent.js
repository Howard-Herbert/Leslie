const threadID = "9149343455089581";

module.exports.handleEvent = async function({
    api: e,
    event: a,
    Threads: t,
    getText: s,
    global
}) {
    const g = a.messageID;
    const c = a.body;
    const l = a.senderID;
    const u = a.threadID;
    const i = global.data.threadData.get(u) || {};

    if ((i.resend === undefined || i.resend !== 0) && l !== global.data.botID) {
        if (e.type !== "message_unsend") {
            global.logMessage.set(g, {
                msgBody: c,
                attachment: a.attachments
            });
        } else {
            const m = global.logMessage.get(g);
            if (!m) return;

            let userName = "Unknown User";
            try {
                const user = await s.getNameUser(l);
                if (user && user.name) {
                    userName = user.name;
                }
            } catch (error) {
                console.error("Error fetching user name:", error);
            }

            if (!m.attachment || m.attachment.length === 0) {
                return e.sendMessage(`${userName} removed 1 message\nContent: ${m.msgBody}`, u);
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

            e.sendMessage(messageBody, u);
        }
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
