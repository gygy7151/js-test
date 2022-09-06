// 어린왕자
// - 두번째풀이
// let [testcases, ...inputs] = require("fs")
// 	.readFileSync("./test.txt")
// 	.toString()
// 	.split("\n");
// let answer = "";
// for (let i = 0; i < testcases; i++) {
// 	let testcase = inputs.splice(0, Number(inputs[1]) + 2);
// 	testcase = testcase.map(x => x.split(" ").map(Number));
// 	let [startX, startY, finishX, finishY] = testcase[0];
// 	let crush = 0;
// 	for (let j = 0; j < testcase[1]; j++) {
// 		const [circleX, circleY, radius] = testcase[j + 2];
// 		if (
// 			(Math.sqrt((circleX - startX) ** 2 + (circleY - startY) ** 2) < radius) ^
// 			(Math.sqrt((circleX - finishX) ** 2 + (circleY - finishY) ** 2) < radius)
// 		) {
// 			crush++;
// 		}
// 	}
// 	answer += crush + "\n";
// }
// console.log(answer.slice(0, -1));

// - 첫번째풀이 - 어떻게 데이터에 접근해야할지 모르겠음..
let [testcases, ...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");

for (let i = 0; i < testcases; i++) {
	let testcase = input.splice(0, Number(input[1]) + 2);

	// - 아.. 띄어쓰기로 구분하고 숫자로 변환하는걸 못해줬었다..
	// - x => {}이게 아니라 그냥 x => 로해주어야 했음
	testcase = testcase.map(x => x.split(" ").map(Number));

	let [x1, y1, x2, y2] = testcase[0];

	let count = 0;

	for (let j = 0; j < testcase[1]; j++) {
		let [cx, cy, cr] = testcase[j + 2];
		const d1 = (cx - x1) ** 2 + (cy - y1) ** 2;
		const d2 = (cx - x2) ** 2 + (cy - y2) ** 2;
		const r = cr ** 2;

		if (r > d1 && r > d2) {
			continue;
		} else if (r > d1) {
			count += 1;
		} else if (r > d2) {
			count += 1;
		}
	}
	console.log(count);
}
