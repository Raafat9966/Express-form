// function userInfo() {
// 	fetch("http://localhost:5000/user")
// 		.then((data) => data.text())
// 		.then((info) => {
// 			console.log(info);
// 		})
// 		.catch((err) => console.error(err));
// }
// userInfo();

const name = document.cookie.split("=")[1];

document.querySelector("p").innerHTML = `welcome ${atob(name)}`;
console.log(document.cookie);
