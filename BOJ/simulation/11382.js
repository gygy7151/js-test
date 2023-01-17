// 꼬마 정민
const nums = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

console.log(nums.reduce((a, b) => a + b));
