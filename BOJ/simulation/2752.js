// 세수 정렬
// 첫번째풀이
// 숫자 3개를 오름차순으로 정렬하고 싶다.
const nums = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);

console.log(...nums);
