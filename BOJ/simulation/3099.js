// 네번째점
// - 두번째풀이

// - 첫번째풀이
let [...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");
let [x1, y1] = [[], []];

for (let i = 0; i < 3; i++) {
	const [x, y] = input[i].split(" ").map(Number);
	x1.push(x);
	y1.push(y);
}
let [checkX, checkY] = [Array(3).fill(-1), Array(3).fill(-1)];
x1.forEach((x, idx) => {
	for (let i = 0; i < 3; i++) {
		if (x == x1[i]) {
			checkX[idx]++;
		}
	}
});

y1.forEach((y, idx) => {
	for (let i = 0; i < 3; i++) {
		if (y == y1[i]) {
			checkY[idx]++;
		}
	}
});
let answer = [];
checkX.forEach((x, idx) => {
	if (x == 0) {
		answer.push(x1[idx]);
	}
});

checkY.forEach((x, idx) => {
	if (x == 0) {
		answer.push(y1[idx]);
	}
});

console.log(...answer);
