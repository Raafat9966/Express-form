const path = require("path");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("src/data/data.json");
const db = low(adapter);

const login = (req, res) => {
	let name = req.body.name;
	let password = req.body.password;
	const userName = db.get("users").find({ name }).value();

	if (userName && userName.password === password) {
		return res.status(200).redirect("/user");
		// res
		// 	.status(200)
		// 	.sendFile(
		// 		path.join(
		// 			__dirname + "../../../public" + "/user" + "/index.html"
		// 		)
		// 	);
	} else return res.status(400).send(`try again!!`);
};
module.exports = login;
