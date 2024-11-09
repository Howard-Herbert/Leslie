const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports = {
	config: {
		name: "jail",
		version: "1.1",
		author: "SK-SIDDIK-KHAN",
		countDown: 5,
		role: 0,
		category: "fun",
	},
	
	onStart: async function ({ event, message, usersData, args }) {
		const uid1 = event.senderID; 
		const uid2 = Object.keys(event.mentions)[0]; 

		if (!uid2) {
			return message.reply("Please mention someone.");
		}

		const avatarURL1 = await usersData.getAvatarUrl(uid1);
		const avatarURL2 = await usersData.getAvatarUrl(uid2);
		const img = await new DIG.Jail().getImage(avatarURL2);
		const pathSave = `${__dirname}/tmp/${uid2}_Jail.png`;
		fs.writeFileSync(pathSave, Buffer.from(img));
		const content = args.join(' ').replace(Object.keys(event.mentions)[0], "");

		message.reply({
			body: `${content || "welcome rapist to jail😈"} 😹\n𝐁𝐨𝐭 𝐍𝐚𝐦𝐞𝐬 : 𝐒𝐊_𝐒𝐈𝐃𝐃𝐈𝐊_⓿❼`, 
			attachment: fs.createReadStream(pathSave)
		}, () => fs.unlinkSync(pathSave)); 
	}
};
