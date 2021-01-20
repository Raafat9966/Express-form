const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("src/data/data.json");
const db = low(adapter);

const login = (req, res) => {
	let name = req.body.name;
	let password = req.body.password;
	const userName = db.get("users").find({ name }).value();
	const userPassword = db.get("users").find({ password }).value();
	if (userName && userName.password === password)
		res.status(200).send(`you are in`);
	res.status(400).send(`try again!!`);
};
module.exports = login;
