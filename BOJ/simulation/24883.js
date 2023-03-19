const alphabet = require("fs").readFileSync("/dev/stdin").toString().trim();

if (alphabet === "N" || alphabet === "n") {
	console.log("Naver D2");
} else {
	console.log("Naver Whale");
}
