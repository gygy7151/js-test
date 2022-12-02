// 대표값2 2578번 해결..
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {

input = input.map((el) => Number(el));
input.sort((a, b) => a - b);

// 평균값 average
let average = input.reduce((a,b) => a + b);
console.log(average/5);
// 중앙값
console.log(input[2]);

