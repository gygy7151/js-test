// 과자
const [snackPrice, snackCnt, leftover] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

const moneyMoreGiven = snackPrice * snackCnt - leftover;

if (moneyMoreGiven <= 0) {
	console.log(0);
} else {
	console.log(moneyMoreGiven);
}
