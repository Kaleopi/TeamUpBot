const Config = require('../../config/config.json');
const Text = require('../text/fr.json');
const CommandReader = require('../CommandReader.js')

const helpCommand = async function(message) {
    let helpMessage = Text.commands.help.intro + message.author.username + Text.commands.help.main;
    helpMessage += getCommands();
    message.channel.send(helpMessage);
};

function getCommands(){
    var commands;
    for(let item in Text.commands){
        commands += "\n"+item;
    }
    return commands;
}

module.exports.HelpCommand = helpCommand;
