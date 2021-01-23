const path = require("path");
const user = (req, res) => {
	res.status(200).sendFile(
		path.join(__dirname + "../../../public" + "/user" + "/index.html")
	);
};
module.exports = user;
