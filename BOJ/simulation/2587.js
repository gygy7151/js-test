// 대표값
// 첫번째 풀이
// 다섯개의 자연수가 주어질때 이 평균과 중앙값을 구하라.
let [...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number).sort((a,b)=> a-b);

console.log(~~((input.reduce((a, b)=> a+ b))/5))
console.log(input[2]);
