const Eris = require("eris");

var bot = new Eris("NDQ0NTQ5NDUxMTMwOTk0Njky.Dln-Mw.evjWhwxNBcGJAdJH199sD9aP6Bk");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("EnigBot - Bot Online"); // Log "Ready!"
});

const prefix = "e?"

bot.on("guildMemberAdd", (member) => {
    member.send('Bem-vindo ao servidor! Leia o chat <#443798242157658122> para saber das regras do servidor!');
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)) return;

    if(msg.content.startsWith(prefix + "membros")) { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "!pong") { // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});

bot.connect(); // Get the bot to connect to Discord
