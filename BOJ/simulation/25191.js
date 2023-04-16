// 치킨댄스를 추는 곰곰이를 본 임스
let [chickenCnt, CokeBeerCnts] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n")

let [CokeCnt, BeerCnt] = CokeBeerCnts.split(" ").map(Number);
let eatableChickenCnt = 0;

while (CokeCnt >= 2 || BeerCnt >= 1) {
	if (chickenCnt - 1 < 0){
		break;
	}
	if (CokeCnt >= 2){
		CokeCnt -= 2

	}else if (BeerCnt >= 1) {
		BeerCnt -= 1
	}
	eatableChickenCnt += 1;
	chickenCnt -= 1;
}

console.log(eatableChickenCnt);