// DFS와 BFS
// - 첫번째풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [num, ...data] = input;
const [n, m] = num.split(" ").map(Number);

function solution(N, M, DATA) {
	const dx = [-1, 0, 1, 0];
	const dy = [0, -1, 0, 1];
	const visited = Array.from(Array(N), () =>
		Array.from(Array(M), () => Array.from(Array(N), () => Array(M).fill(false)))
	);
	let hole = null;
	let red = null;
	let blue = null;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (DATA[i][j] === "O") hole = [i, j];
			else if (DATA[i][j] === "R") red = [i, j, 0, 0, 0];
			else if (DATA[i][j] === "B") blue = [0, 0, i, j, 0];
		}
	}

	const bfs = () => {
		const queue = [];
		queue.push([red[0], red[1], blue[2], blue[3], 1]);
		visited[red[0]][red[1]][blue[2]][blue[3]] = true;

		while (queue.length) {
			const [crx, cry, cbx, cby, ccnt] = queue.shift();

			if (ccnt > 10) return -1;

			for (let i = 0; i < 4; i++) {
				let [nrx, nry, nbx, nby] = [crx, cry, cbx, cby];
				let isRedHold = false;
				let isBlueHold = false;

				// 빨간 구슬 이동
				while (DATA[nrx + dx[i]][nry + dy[i]] !== "#") {
					nrx += dx[i];
					nry += dy[i];
					if (nrx === hole[0] && nry === hole[1]) {
						isRedHold = true;
						break;
					}
				}

				// 파란 구슬 이동
				while (DATA[nbx + dx[i]][nby + dy[i]] !== "#") {
					nbx += dx[i];
					nby += dy[i];
					if (nbx === hole[0] && nby === hole[1]) {
						isBlueHold = true;
						break;
					}
				}

				if (isBlueHold) continue;
				// 파란 구슬 구멍에 빠지면 실패, 다른 좌표 탐색
				else if (isRedHold) return ccnt; // 빨간 구슬이 구멍에 빠지면 성공

				// 동일한 지점에 있는 경우
				if (nrx === nbx && nry === nby) {
					switch (i) {
						case 0: // up
							if (crx > cbx) nrx -= dx[i];
							else nbx -= dx[i];
							break;
						case 1: // left
							if (cry > cby) nry -= dy[i];
							else nby -= dy[i];
							break;
						case 2: // down
							if (crx < cbx) nrx -= dx[i];
							else nbx -= dx[i];
							break;
						case 3: // right
							if (cry < cby) nry -= dy[i];
							else nby -= dy[i];
							break;
					}
				}

				// 두 구슬의 위치가 처음 방문한 곳인 경우에만 큐에 추가
				if (!visited[nrx][nry][nbx][nby]) {
					visited[nrx][nry][nbx][nby] = true;
					queue.push([nrx, nry, nbx, nby, ccnt + 1]);
				}
			}
		}

		return -1;
	};

	return bfs();
}

console.log(
	solution(
		n,
		m,
		data.map(_ => _.split(""))
	)
);

// - 첫번째풀이 - 무한루프..
// let [size, ...input] = require("fs")
// 	.readFileSync("./test.txt")
// 	.toString()
// 	.split("\n");

// let [N, M] = size.split(" ").map(Number);

// let graph = [];
// input.map(x => graph.push(x.split("")));

// let [rx, ry, bx, by] = [0, 0, 0, 0];

// function bfs(rx, ry, bx, by) {
// 	q = [];
// 	visited = {};
// 	visited[[rx, ry, bx, by]] = 1;
// 	q.push([rx, ry, bx, by]);
// 	let count = 0;
// 	console.log(q);
// 	while (q.length >= 1) {
// 		for (let i = 0; i < q.length; i++) {
// 			let [rx, ry, bx, by] = q.splice(0, 1)[0]; // 배열안에 또 배열이 들어감

// 			if (count > 10) {
// 				return;
// 			}

// 			if (graph[rx][ry] == "O") {
// 				return;
// 			}

// 			dir = [
// 				[0, 1],
// 				[0, -1],
// 				[1, 0],
// 				[-1, 0],
// 			];

// 			for (let i = 0; i < 4; i++) {
// 				let [nrx, nry, nbx, nby, dx, dy] = [
// 					rx,
// 					ry,
// 					bx,
// 					by,
// 					dir[i][0],
// 					dir[i][1],
// 				];

// 				while (true) {
// 					nrx += dx;
// 					nry += dy;

// 					if (graph[nrx][nry] == "#") {
// 						nrx -= dx;
// 						nry -= dy;
// 						break;
// 					}

// 					if (graph[nrx][nry] == "O") {
// 						break;
// 					}
// 				}

// 				while (true) {
// 					nbx += dx;
// 					nby += dy;

// 					if (graph[nbx][nby] == "#") {
// 						nbx -= dx;
// 						nby -= dy;
// 						break;
// 					}

// 					if (graph[nbx][nby] == "O") {
// 						break;
// 					}
// 				}
// 				console.log(q);

// 				if (graph[nbx][nby] == "O") {
// 					continue;
// 				}

// 				if (nbx == nrx && nby == nry) {
// 					if (
// 						Math.abs(nbx - bx) + Math.abs(nby - by) >
// 						Math.abs(nrx - rx) + Math.abs(nry - ry)
// 					) {
// 						nbx -= dx;
// 						nby -= dy;
// 					} else {
// 						nrx -= dx;
// 						nry -= dy;
// 					}
// 				}

// 				if (visited[`${nbx}, ${nby}, ${nrx}, ${nry}`] != 1) {
// 					console.log("하???");
// 					visited[[nbx, nby, nrx, nry]] = 1;
// 					q.push([nbx, nby, nrx, nry]);
// 				}
// 			}
// 		}
// 		count += 1;
// 	}

// 	console.log(-1);
// }

// bfs(rx, ry, bx, by);
