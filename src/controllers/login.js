const path = require("path");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("src/data/data.json");
const db = low(adapter);
const base64 = require("js-base64");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
	let name = req.body.name;
	let password = req.body.password;
	const user = db.get("users").find({ name }).value();

	if (user && user.password === password) {
		const token = jwt.sign(user, "secret");

		return (
			res
				.cookie("name", base64.encode(JSON.stringify(user)))
				// .cookie("user", token)
				.status(200)
				.redirect("/user")
		);
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
