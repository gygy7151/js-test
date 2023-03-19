// !밀비 급일
const codes = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const newCodes = codes
	.slice(0, codes.length - 1)
	.map(code => code.split("").reverse().join(""))
	.join("\n");
console.log(newCodes);
