// 와글와글 숭고한
const universities = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

const getName = (university) => {
	switch (university) {
		case 0:
			return "Soongsil";

		case 1:
			return "Korea";

		case 2:
			return "Hanyang";
	}
};
const participationScore = universities.reduce((a, b) => a + b);

if (participationScore >= 100) {
	console.log("OK");
} else {
	console.log(getName(universities.indexOf(Math.min(...universities))));
}
