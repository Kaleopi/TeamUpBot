const Help = require('./commands/Help');

const CommandTable = new Map(
    [
        ["help", Help.HelpCommand],
        ["h", Help.HelpCommand],
    ]
);

module.exports = CommandTable;
