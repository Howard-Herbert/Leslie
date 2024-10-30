module.exports = {
  config: {
    name: "calculate",
    aliases: ["cl", "clt"],
    version: "1.0",
    author: "SK-SIDDIK",
    role: 0,
    colldown: 5,
    category: "utility",
    guide: "{prefix}calculate <expression>"
  },
  onStart: async function ({ message, args }) {
    const expression = args.join(" ");
 
    if (!expression) {
      return message.reply("╭────────────────⊙\n├─☾ 𝐓𝐘𝐏𝐄 𝟗𝟗𝟗 + 𝟎𝟑𝟖𝟗\n╰────────────────⊙");
    }
 
    let result;
    try {
      result = eval(expression);
    } catch (error) {
      console.error(error);
      return message.reply("╭────────────────⊙\n├─☾ 𝐄𝐗𝐀𝐌𝐏𝐋𝐄 10+99\n╰────────────────⊙");
    }
 
    message.reply(`╭────────────────⊙\n├─☾ 𝐑𝐄𝐒𝐔𝐋𝐓 ${expression} = ${result}\n╰────────────────⊙`);
  },
};
