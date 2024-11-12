let connectedThreadID;
const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
    config: {
        name: "contekgc",
        author: "SK-SIDDIK-KHAN",
        version: "1.0",
        shortDescription: {
            en: "connect the group chat into one"
        },
        category: "utility",
        guide: {
            en: "   {pn} <message> gcUid"
        }
    },

    onStart: async function ({ args, message, event, api, commandName }) {
        const msg = args.slice(0, -1).join(" "); 
        const gcUid = args[args.length - 1];
        
        if (!msg || !gcUid)
            return message.reply("Please provide a message and a group UID");

        connectedThreadID = gcUid;

        // Filter and process attachments
        const filteredAttachments = event.attachments ? 
            event.attachments.filter(item => mediaTypes.includes(item.type)) : [];
        const attachments = filteredAttachments.length > 0 ? 
            await getStreamsFromAttachment(filteredAttachments) : [];

        const formMessage = {
            body: msg,
            attachment: attachments
        };
        
        try {
            const messageSend = await api.sendMessage(formMessage, gcUid);

            global.GoatBot.onReply.set(messageSend.messageID, {
                originalThreadID: event.threadID,
                originalSenderID: event.senderID,
                commandName
            });

            if (!global.GoatBot.onReply.has(event.messageID)) {
                global.GoatBot.onReply.set(event.messageID, {
                    originalThreadID: event.threadID,
                    originalSenderID: message.senderID,
                    commandName
                });
            }

            return message.reply("┏━━━━━━━━━━━━━━━━━┓\n┣➤ Successfully sent msg\n┗━━━━━━━━━━━━━━━━━┛");
        } catch (error) {
            console.error("Error sending message:", error);
            return message.reply("┏━━━━━━━━━━━━━━━━━┓\n┣➤ Failed to send message\n┗━━━━━━━━━━━━━━━━━┛");
        }
    },

    onReply: async function ({ event, api, Reply }) {
        const { originalThreadID, originalSenderID, commandName } = Reply;
        const senderName = await api.getUserInfo(event.senderID);

        const formMessage = {
            body: `${senderName[event.senderID].name} - ${event.body}`
        };

        try {
            // Filter and process attachments in reply
            const filteredAttachments = event.attachments ? 
                event.attachments.filter(item => mediaTypes.includes(item.type)) : [];
            const attachments = filteredAttachments.length > 0 ? 
                await getStreamsFromAttachment(filteredAttachments) : [];
            formMessage.attachment = attachments;

            const targetThreadID = originalThreadID === event.threadID ? connectedThreadID : originalThreadID;
            const messageSend = await api.sendMessage(formMessage, targetThreadID);

            global.GoatBot.onReply.set(messageSend.messageID, {
                originalThreadID,
                originalSenderID,
                commandName
            });
        } catch (error) {
            console.error("Error sending reply:", error);
        }
    }
};
