const threadID = "9149343455089581";

if ((i.resend === undefined || i.resend !== 0) && l !== global.data.botID) {
    if (e.type !== "message_unsend") {
        global.logMessage.set(g, {
            msgBody: c,
            attachment: e.attachments
        });
    } else {
        const m = global.logMessage.get(g);
        if (!m) return;

        let userName;
        try {
            const user = await s.getNameUser(l);
            userName = user?.name || "Unknown User"; // Optional chaining to prevent errors
        } catch (error) {
            console.error("Error fetching user name:", error);
            userName = "Unknown User";
        }

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
    }
}

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
