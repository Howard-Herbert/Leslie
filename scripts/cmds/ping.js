module.exports = {
  config: {
    name: "ping",
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    role: 0,
    category: "utility"
  },
  onStart: async function ({ api, event, args }) {
    const timeStart = Date.now();
    await api.sendMessage("Checking", event.threadID); 
    const timeEnd = Date.now();
    const ping = timeEnd - timeStart; 
    api.sendMessage(`The current ping is ${ping}ms.`, event.threadID); 
  }
}
