// 단지번호 붙이기
// -  두번째풀이 - dfs로 해결완료
// - 첫번째풀이 - 틀림
let [totalGroupCnt, ...isHouse] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n");
N = Number(totalGroupCnt);
let house = [];
isHouse.map((x, idx) => {
	house[idx] = x.split("").map(x => Number(x));
});

let visited = [];
for (let i = 0; i < N; i++) {
	visited[i] = Array(N).fill(0);
}

dir = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

function dfs(y, x) {
	for (let i = 0; i < 4; i++) {
		let [ny, nx] = [y + dir[i][0], x + dir[i][1]];

		if (ny >= 0 && nx >= 0 && ny < N && nx < N) {
			if (house[ny][nx] == 1 && visited[ny][nx] == 0) {
				visited[ny][nx] = 1;
				dfs(ny, nx);
				count++;
			}
		}
	}
}
let answer = [];
let result = 0;
let count = 1;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (visited[i][j] == 0 && house[i][j] == 1) {
			visited[i][j] = 1;
			result++;
			dfs(i, j);
			answer.push(count);
			count = 1;
		}
	}
}

console.log(result);
answer.sort((a, b) => {
	return a - b;
});
answer.forEach(x => console.log(x));
