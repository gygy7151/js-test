// 와이버스 부릉부릉
const [start, ...left] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");
left.forEach((value, idx) => {
	if (idx === left.length - 1) {
		console.log("비와이");
	}
});
// const [N, firstPeopleToGetOn] = start.split(" ").map(Number);
// let answer = firstPeopleToGetOn;
// left.forEach(peoplesInfo => {
// 	const [getOnCnt, getOffCnt] = peoplesInfo.split(" ").map(Number);
// 	answer += getOnCnt;
// 	answer -= getOffCnt;
// });

// console.log(answer);
