// 안전 영역
// -  두번째풀이 - dfs로 해결완료
const input = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.trim()
	.split("\n");
const N = +input[0];
const areas = input.slice(1).map(v => v.split(" ").map(v => +v));

const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

const dfs = (x, y, visited) => {
	offsetX.forEach((dx, i) => {
		const nx = x + dx;
		const ny = y + offsetY[i];
		if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
			visited[nx][ny] = true;
			dfs(nx, ny, visited);
		}
	});
};

let maxCount = 0;
for (let height = 0; height <= 100; height++) {
	let count = 0;
	const visited = [...Array(N)].map((_, x) =>
		[...Array(N)].map((_, y) => areas[x][y] <= height)
	);
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (!visited[i][j]) {
				visited[i][j] = true;
				dfs(i, j, visited);
				count++;
			}
		}
	}
	maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

// - 첫번째풀이 - 틀림

/*
엄 ㅇㅅㅇ
1번 높이부터 쭉 100이될때까지
해당높이 이하이면 visited 1로 표시해줌
visited 초기화해주고
dfs를 돌리면서 visited가 0이면 dfs돌리고 cnt +1해줌

*/
// let [N, ...provice] = require("fs")
// 	.readFileSync("./test.txt")
// 	.toString()
// 	.split("\n");
// N = Number(N);
// let graph = [];
// provice.map((x, idx) => {
// 	graph[idx] = x.split(" ").map(x => Number(x));
// });
// let answer = 0;

// for (let height = 1; height < 101; height++) {
// 	let visited = [];
// 	let count = 0;

// 	for (let i = 0; i < N; i++) {
// 		visited[i] = Array(N).fill(0);
// 	}

// 	//해당높이 이하이면 visited 1로 표시해줌
// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < N; j++) {
// 			if (graph[i][j] <= height) {
// 				visited[i][j] = 1;
// 			}
// 		}
// 	}
// 	const dir = [
// 		[0, 1],
// 		[1, 0],
// 		[0, 1],
// 		[0, -1],
// 	];

// 	function dfs(y, x) {
// 		for (let i = 0; i < 4; i++) {
// 			let [ny, nx] = [y + dir[i], x + dir[i]];
// 			if (0 <= ny && 0 <= nx && ny < N && nx < N) {
// 				if (visited[ny][nx] == 0 && graph[ny][nx] > height) {
// 					visited[ny][nx] = 1;
// 					dfs(ny, nx);
// 				}
// 			}
// 		}
// 	}

// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < N; j++) {
// 			if (visited[i][j] == 0 && graph[i][j] > height) {
// 				visited[i][j] = 1;
// 				dfs(i, j);
// 				count++;
// 			}
// 		}
// 	}

// 	if (answer < count) {
// 		answer = count;
// 	}
// }
// console.log(answer);
