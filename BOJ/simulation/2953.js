// 나는 요리사다
const chefs = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

let [maxScoreSum, MVP] = [0, 0]
chefs.forEach((scores, idx) => {
	const sumScores = scores.split(" ").map(Number).reduce((a,b) => a + b)
	if (maxScoreSum < sumScores) {
		maxScoreSum = sumScores
		MVP = idx + 1
	}
})

console.log(MVP, maxScoreSum);