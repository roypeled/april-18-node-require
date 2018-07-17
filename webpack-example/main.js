const $ = require('jquery');
const rand = require('./rollDice');

require("./style.css");

$("body").html("hello class");

document.body.innerHTML += `<br/>You have rolled ${rand()}`;