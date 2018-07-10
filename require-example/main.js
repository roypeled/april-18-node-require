var figlet = require("figlet");
const cli = require('ascli')('cr');

cli.log(figlet.textSync('Hello Class', 'doom').green);