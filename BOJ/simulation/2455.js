// 지능형 기차
// 첫번째 풀이
let [...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");

input = input.map(x => x.split(" ").map(x => Number(x)));
const N = input.length;
let answer = input[0][1];
for (let i = 1; i < N; i++) {
	let [getOffNum, getOnNum] = [input[i][0], input[i][1]];
	let temp = answer;
	temp -= getOffNum;
	temp += getOnNum;

	if (temp > answer) {
		answer = temp;
	}
}

console.log(answer);
