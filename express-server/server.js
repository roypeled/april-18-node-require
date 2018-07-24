const express = require('express');
const bodyParser = require('body-parser');
let users = require('./users.json');
const fs = require('fs');
const app = express();

function getUser(id) {
	return users.find(user => user.id == id);
}

function saveJson(users) {
	fs.writeFileSync('./users.json', JSON.stringify(users));
}

app.use(bodyParser.json());

app.get('/users', (req, res) => {
	res.send(users);
});

app.post('/users', (req, res) => {
	const user = getUser(req.body.id);

	if(!user) {
		users.push(req.body);
		res.send(req.body);
		saveJson(users);
	} else {
		res
			.status(400)
			.send(`User with ID ${req.body.id} already exists`);
	}
});

app.get('/users/:userId', (req, res) => {
	const user = getUser(req.params.userId);
	if(user) {
		res.send(user);
	} else {
		res.status(404).send("User not found!");
	}
});

app.put('/users/:userId', (req, res) => {
	users = users.filter(user => user.id != req.params.userId);
	users.push(req.body);

	res.send(req.body);
	saveJson(users);
});

app.delete('/users/:userId', (req, res) => {
	users = users.filter(user => user.id != req.params.userId);

	res.send("OK");
	saveJson(users);
});

app.listen(3000);