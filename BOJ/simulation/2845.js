// 파티가 끝나고 난 뒤
const [participantInfo, countsPeopleOnPaper] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");
let answer = "";
const totalCount = participantInfo
	.split(" ")
	.map(Number)
	.reduce((a, b) => a * b);
countsPeopleOnPaper
	.split(" ")
	.map(Number)
	.forEach(numParticipants => {
		answer += `${numParticipants - totalCount} `;
	});
console.log(answer);
