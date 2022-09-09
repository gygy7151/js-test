// 빗물
// - 첫번째풀이

function solution() {
	let [demension, ...rain] = require("fs")
		.readFileSync("./test.txt")
		.toString()
		.split("\n");

	rain = rain[0].split(" ").map(Number);
	const N = rain.length;
	let answer = 0;
	let [H, W] = demension.split(" ");

	if (H <= 2 && W <= 2) {
		console.log(answer);
		return;
	}

	for (let i = 1; i < N - 1; i++) {
		const now = rain[i];
		const left = Math.max(...rain.slice(0, i));
		const right = Math.max(...rain.slice(i));

		if (now < left && now < right) {
			if (right != left) {
				if (right > left) {
					answer += left - now;
				} else {
					answer += right - now;
				}
			} else {
				answer += right - now;
			}
		}
	}

	console.log(answer);
}

solution();
