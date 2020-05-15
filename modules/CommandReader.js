const Discord = require("discord.js");
const Config = require('../config/config.json');
const CommandTable = require('./CommandTable');

class CommandReader {
    constructor() {
        this.var = "ok";
    }

    /**
    * This function analyses the passed message and calls the associated function if there is one.
    * @param {*} message - A command posted by an user.
    * @param {*} client - The bot user in case we have to make him do things
    */
    async handleMessage(message, client) {
        let prefix = CommandReader.getPrefix(message);
        if (prefix == Config.PREFIX) {
            launchCommand(message, client);
        } else {
            console.log('prefix pas ok');
        }
    }

    /**
    * Sanitizes the string and return the command. The command should always be the 1st argument.
    * @param {*} message - The message to extract the command from.
    * @returns {String} - The command, extracted from the message.
    */
    static getCommand(message) {
        return CommandReader.getArgs(message).shift().toLowerCase();
    }

    /**
    * Sanitizes the string and return the args. The 1st argument is not an args.
    * @param {*} message - The message to extract the command from.
    * @returns {string} - args, extracted from the message.
    */
    static getArgs(message) {
        return message.content.slice(Config.PREFIXLENGTH).trim().split(/ +/g);
    }
    /**
    * Get the prefix that the user just used to make the command
    * @param {*} message - The message to extract the command from.
    */
    static getPrefix(message) {
        return message.content.substr(0, 1);
    }
}

function launchCommand(message, client) {
    let command = CommandReader.getCommand(message);
    let args = CommandReader.getArgs(message);
    if(CommandTable.has(command)){
        ct = CommandTable.get(command);
        message.channel.send(ct);
    }
}

module.exports = CommandReader;
