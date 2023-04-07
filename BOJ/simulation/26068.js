// 치킨댄스를 추는 곰곰이를 본 임스 2
const [N, ...validateGifticons] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

const answer = validateGifticons.filter(date => Number(date.slice(2)) <= 90);
console.log(answer.length);