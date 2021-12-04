const Discord = require("discord.js");
const client = new Discord.Client();
const config  = require("./config.json");
const prefix = '!';

client.on("message", function(message) {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

const commandBody = message.content.slice(prefix.length);
const args = commandBody.split(/ +/g );
const command = args.shift().toLowerCase();

if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Este mensaje tiene una latencia de ${timeTaken}ms.`);
}

else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`La suma de todos los argumentos solicitados es: ${sum}!`);
}
});

client.login(config.BOT_TOKEN);