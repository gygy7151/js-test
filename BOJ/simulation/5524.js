// 입실관리
const [N, ...names] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

names.forEach(name => console.log(name.toLowerCase()));
