const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("src/data/data.json");
const db = low(adapter);

const checkUser = (req, res, next) => {
	let name = req.cookies.name;

	if (name) {
		//let user = db.get("users").find({ name }).value();
		console.log(name);
		res.locals = {};
		res.locals.name = name;
	}

	next();
};
module.exports = checkUser;
