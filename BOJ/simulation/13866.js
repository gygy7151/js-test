// 팀나누기
const players = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

const sumScore = players.reduce((a, b) => a + b);
let minimumScore = 0;
// default - idxA: 0, idxB: 1
const getMinScore = (idxA, idxB) => {
	const teamScore = players[idxA] + players[idxB];
	if (idxB === 4) return;
	if (idxA === 0) minimumScore = Math.abs(sumScore - teamScore - teamScore);
	if (minimumScore > Math.abs(sumScore - teamScore - teamScore)) {
		minimumScore = Math.abs(sumScore - teamScore - teamScore);
	}
	getMinScore(idxA, idxB + 1);
};

for (let i = 0; i < 3; i++) {
	getMinScore(i, i + 1);
}
console.log(minimumScore);
