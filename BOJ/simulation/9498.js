// 시험성적
// 첫번째풀이
let score = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

if (score >= 90) {
	console.log("A");
} else if (score >= 80) {
	console.log("B");
} else if (score >= 70) {
	console.log("C");
} else if (score >= 60) {
	console.log("D");
} else {
	console.log("F");
}
