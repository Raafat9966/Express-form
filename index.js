const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const register = require("./src/controllers/register");
const login = require("./src/controllers/login");

let app = express();

let port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.status(200).sendFile(path.join(__dirname + "/public" + "/home.html"));
});

// app.get("/login", (req, res) => {
// 	res.status(200).sendFile(path.join(__dirname + "/public" + "/login.html"));
// });

app.use("/login", express.static("public/login"));
app.use("/register", express.static("public/register"));

app.post("/login", register);
app.post("/user", login);

app.listen(port, () => console.log(`Server run on: http://localhost:${port}`));
