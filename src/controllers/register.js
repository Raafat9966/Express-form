const path = require("path");
const { v4: uuidv4 } = require("uuid");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("src/data/data.json");
const db = low(adapter);

const register = (req, res) => {
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	let id = uuidv4();
	const userName = db.get("users").find({ name }).value();
	const userEmail = db.get("users").find({ email }).value();
	if (userName || userEmail)
		res.status(400).send(`the user already registered`);
	else {
		db.get("users")
			.push({ id: id, name: name, email: email, password: password })
			.write();

		// res.status(200).send(
		// 	`<script>
		// 		alert("You have been registered"); window.location.href = "/register";
		// 	</script>`
		// );

		// res.status(200).sendFile(
		// 	path.join(__dirname + "../../../public" + "/user" + "/index.html")
		// );
		res.status(200).redirect("/user");
	}
};
module.exports = register;
