//파일 옮기기
const baskets = require("fs")
	.readFileSync("./test.txt", "utf-8")
	.toString()
	.trim()
	.split("\n");
const [basketA, basketB] = baskets.map(basket => basket.split(" ").map(Number));
const [aPlusD, bPlusC] = [basketA[0] + basketB[1], basketA[1] + basketB[0]];

const getMinimumCnt = (totalCntA, totalCntB) => {
	if (totalCntA === totalCntB) {
		return totalCntA;
	}
	return Math.max(totalCntA, totalCntB);
};
console.log(getMinimumCnt(aPlusD, bPlusC));
