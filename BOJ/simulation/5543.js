// 상근날드
const input = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

const hamburger = input.slice(0, 3).sort((a, b) => a - b);
const cola = input.slice(3).sort((a, b) => a - b);
console.log(hamburger[0] + cola[0] - 50);
