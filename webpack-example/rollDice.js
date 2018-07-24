export function rollDice() {
	return Math.ceil(Math.random() * 6);
}

export const name = "roy";

export class User {
	constructor(name){
		this.name = name;
	}
}