// function userInfo() {
// 	fetch("http://localhost:5000/user")
// 		.then((data) => data.text())
// 		.then((info) => {
// 			console.log(info);
// 		})
// 		.catch((err) => console.error(err));
// }
// userInfo();
const jwt = require("jsonwebtoken");

const name = document.cookie.split("=")[1];

const payload = jwt.verify(name, "secret");
document.querySelector("p").innerHTML = `welcome ${name}`;
console.log(payload);
