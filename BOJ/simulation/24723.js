// 녹색거탑
// 첫번째 풀ㅣ
// const floorCnt = Number(require("fs")
// 	.readFileSync("/dev/stdin", "utf-8")
// 	.toString()
// 	.trim()
// 	.split("\n"));


// let answer = 1

// for (let idx=0; idx<floorCnt; idx++) {
// 	answer *= 2;
// }

// console.log(answer);

// 두번째풀이
const floorCnt = Number(require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n"));

console.log(1 << floorCnt);