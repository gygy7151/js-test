// Darius님 한타 안 함?
const [K, D, A] = require("fs")
	.readFileSync("./test.txt", "utf-8")
	.toString()
	.trim()
	.split("/")
	.map(Number);

if (K + A < D || D === 0) {
	console.log("hasu");
} else {
	console.log("gosu");
}
