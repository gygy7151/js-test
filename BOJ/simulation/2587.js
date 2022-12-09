// 대표값
// 첫번째 풀이
let [...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

let countDigit = new Array(10).fill(0);
const result = input
	.reduce((prev, next) => prev * next)
	.toString()
	.split("");

let answer = "";
result.forEach(digit => countDigit[digit]++); // 아 js는 str이든 int든 배열에선 타입 상관없음
countDigit.forEach(x => console.log(x));
