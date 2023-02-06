// Next in line
const ages = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

console.log(ages[1] + (ages[1] - ages[0]));
