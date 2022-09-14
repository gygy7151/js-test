let [size, ...inputs] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n");

let [N, M] = size.split(" ").map(Number);
let board = [];

inputs.forEach(x => {
	board.push(x.split(""));
});

let count = 0;

for (let i = 0; i < N; i++) {
	let j = 0;

	while (j < M) {
		if (board[i][j] == "|") {
			j++;
		} else {
			count++;

			// - 아 이거 순서도 되게 중요하구나.. 반드시 j < M 보다 작은걸 우선 체크해야됨 그래야 에러가 안남
			while (j < M && board[i][j] == "-") {
				j++;
			}
		}
	}
}

for (let j = 0; j < M; j++) {
	let i = 0;

	while (i < N) {
		if (board[i][j] == "-") {
			i++;
		} else {
			count++;

			while (i < N && board[i][j] == "|") {
				i++;
			}
		}
	}
}

console.log(count);
