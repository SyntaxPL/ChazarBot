const Eris = require("eris");

var bot = new Eris(process.env.BOT_TOKEN);
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("EnigBot - Bot Online"); // Log "Ready!"
});
