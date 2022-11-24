// 단어 수학
// 첫번째풀이
/**
 *
 */
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});

function solution(input) {
	cosnt[N] = input.shift().map(Number);

	const arr = [];

	for (let i = 1; i < 501; i++) {
		for (let j = 0; j < i; j++) {
			arr.push(i);
		}
	}
	const temp = arr.slice(A - 1, B);
	console.log(temp.reduce((a, b) => a + b));
}
