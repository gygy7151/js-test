// 심부름 가는길
const seconds = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n")
	.map(Number)
	.reduce((a, b) => a + b);

const minute = Math.floor(seconds / 60);
const second = seconds - 60 * minute;
console.log(minute);
console.log(second);
