// 소수경로
// 첫번째풀이
const [N, ...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");

let memo = Array(10001).fill(1);
memo[0] = 0;
memo[1] = 0;

// 소수 전처리
for (let i = 2; i < Math.trunc(10000 ** 0.5); i++) {
	if (memo[i] == 1) {
		let j = i * 2;
		while (j < 10001) {
			memo[j] = 0;
			j += i;
		}
	}
}

const bfs = (a, b) => {
	let q = [];
	q.push(a);
	let visit = Array(10001).fill(-1);
	visit[a] = 0;

	while (q.length !== 0) {
		num = q.shift();
		if (num === b) {
			return visit[num];
		}
		if (num < 1000) {
			continue;
		}

		[1, 10, 100, 1000].forEach(i => {
			console.log(i);
			n = num - (num % (i * 10)) / (i * i);

			for (let j = 0; j < 10; j++) {
				if (visit[n] == -1 && memo[n] == 1) {
					console.log("아?");
					console.log(visit[num]);
					visit[n] = visit[num] + 1;
					q.push(n);
				}
				n += i;
			}
		});
	}
};

input.forEach(x => {
	const [a, b] = x.split(" ").map(Number);
	console.log(bfs(a, b));
});
