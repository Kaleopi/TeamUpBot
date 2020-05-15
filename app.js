const Discord = require('discord.js');
const client = new Discord.Client();

const CommandReader = require('./modules/CommandReader.js');
const Config = require('./config/config.json');

let commandReader = new CommandReader();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! v.${Config.VERSION}`);
    client.user.setActivity('Getting developed',{type: 'WATCHING'})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
});

client.on("message", (message) => {
    if (message.author.bot) return;
    commandReader.handleMessage(message, client);
});

client.login(Config.BOT_TOKEN);
