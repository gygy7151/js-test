// 전자레인지
// - 첫번째풀이 -> ...arr로 배열객체를 복사해서 출력하면 undefined도 함께 출력됨.. 그래서
// - 그래서 따로 문자열에 담아 출력하는것이 올바른 방법임

function solution() {
	let input = require("fs").readFileSync("./test.txt").toString().split("\n");

	const T = Number(input[0]);

	for (let i = 1; i < T + 1; i++) {
		const N = Number(input[i]);
		let room = Array(N + 1).fill(1);
		room[0] = 0;

		for (let j = 2; j < N + 1; j++) {
			let times = 1;

			while (j * times <= N) {
				if (room[j * times] == 1) {
					room[j * times] = 0;
				} else {
					room[j * times] = 1;
				}
				times++;
			}
		}
		let res = 0;
		room.forEach(x => {
			if (x == 1) {
				res++;
			}
		});

		console.log(res);
	}
}
solution();
