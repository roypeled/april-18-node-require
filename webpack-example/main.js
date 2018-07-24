import $ from 'jquery';
import {name, rollDice, User} from "./rollDice";

import "./style.css";

let u = new User(name);

$("body").html("hello " + u.name);

document.body
	.innerHTML +=
	`<br/>You have rolled ${rollDice()}`;