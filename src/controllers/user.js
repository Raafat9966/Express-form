const path = require("path");
const user = (req, res) => {
	return res.status(200).send(res.locals.name);
	// res.status(200).sendFile(
	// 	path.join(__dirname + "../../../public" + "/user" + "/index.html")
	// );
};
module.exports = user;
