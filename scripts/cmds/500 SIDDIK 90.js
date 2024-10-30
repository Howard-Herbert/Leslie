module.exports = {
 config: {
	 name: "90",
	 version: "1.0",
	 author: "SK-SIDDIK-KHAN",
	 countDown: 5,
	 role: 0,
	 shortDescription: "",
	 longDescription: "",
	 category: "auto",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if ((event.body.toLowerCase() == "90") || (event.body.toLowerCase() == "9999") || (event.body.toLowerCase() == "99999")) {
 return message.reply({
 body: `
⎯͢⎯⃝    𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞 𝗞𝗛𝗔𝗡-!!🪐🌚`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/TZdtznt.mp4")
 });
 }
 }
}
