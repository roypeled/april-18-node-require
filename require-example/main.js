const figlet = require("figlet");
const cli = require('ascli')('Tutorial');


cli.log(figlet.textSync('Hello Class', 'doom').green);