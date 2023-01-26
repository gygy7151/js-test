// R2
// 첫번째풀이
let [R1, S] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

console.log(S * 2 - R1);
