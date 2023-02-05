// 방학숙제
let [L, a, b, c, d] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

// 하루에 국어총 a페이지중 최대 c페이지씩 매일 풀수 있다.
// 하루에 수학 b페이지중 최대 d페이지씩 매일 풀 수 있다.
// a/c와 b/d를 구하고,
// a % c와 b % d가 0보다 크면 그대로 L에서 빼주고,
// 나머지가 있으면 1씩 각각 더 빼준다.
// 두번째 풀이
// 동시에 두개이상의 값을 빼야할때, while문을 활용하면 좋다.
while (true) {
	L -= 1;
	a -= c;
	b -= d;
	if (a <= 0 && b <= 0) break;
}

console.log(L);

// 첫번째풀이틀림
// let maxDaysToPlay = L;
// const [leftA, leftB] = [a % c, b % d];
// const minusA = Math.floor(a / c);
// const minusB = Math.floor(b / d);

// if (minusA === minusB) {
// 	maxDaysToPlay -= minusA;
// 	if (leftA > 0 || leftB > 0) {
// 		maxDaysToPlay -= 1;
// 	}
// } else {
// 	if (minusA > minusB) {
// 		maxDaysToPlay -= minusB;
// 		if (leftA > 0) {
// 			maxDaysToPlay -= minusA - minusB + 1;
// 		} else {
// 			maxDaysToPlay -= minusA - minusB;
// 		}
// 	} else {
// 		maxDaysToPlay -= minusA;
// 		if (leftB > 0) {
// 			maxDaysToPlay -= minusB - minusA + 1;
// 		} else {
// 			maxDaysToPlay -= minusA - minusB;
// 		}
// 	}
// }

// console.log(maxDaysToPlay);
