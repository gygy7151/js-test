//알파벳
// 다섯번째풀이- 드뎌 맞았음
/**
 * visited리스트 앞에 let 타입 선언안한거 수정
 *
 */
let [RC, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n");
let [R, C] = RC.split(" ").map(x => Number(x));
graph = input.map(x => x.split(""));

dir = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

// answer = -1;
const dfs = (x, y, maxCnt, visited) => {
	// 방문여부는 각각 다르므로 파라미터로 넘기는게 올바름
	/**
	 * answer를 dfs내부에 선언
	 */
	let answer = maxCnt;
	// 방문여부는 dfs 처음 돌때 해주어야됨
	visited[graph[y][x].charCodeAt() - 65] = true;

	for (let i = 0; i < 4; i++) {
		let [ny, nx] = [y + dir[i][1], x + dir[i][0]];
		s;

		if (
			nx >= 0 &&
			nx < R &&
			ny >= 0 &&
			ny < C &&
			!visited[graph[ny][nx].charCodeAt() - 65]
		) {
			answer = Math.max(answer, dfs(nx, ny, maxCnt + 1, visited));
		}
	}
	// 그리고 기존 방향을 지워줘야됨 나는 신규방향을 바로 다시 지워줘서 문제가 되었던 것
	// 아..숫자변환 안해주었다.
	visited[graph[y][x].charCodeAt() - 65] = false;
	// 그리고 이렇게 최종 정답을 반환해주면 끝!
	return answer;
};

const visited = Array(26).fill(false);
console.log(dfs(0, 0, 1, visited));

// 세번째풀이- vscode에선 시간초과나지만 백준에선 통과됨

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [R, C] = input[0].split(" ").map(v => +v);
const board = input.slice(1).map(v => v.split(""));
const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

const dfs = (x, y, count, visited) => {
	let maxCount = count;

	visited[board[x][y].charCodeAt() - 65] = true;
	for (let i = 0; i < 4; i++) {
		const nx = x + offsetX[i];
		const ny = y + offsetY[i];
		if (
			nx >= 0 &&
			nx < R &&
			ny >= 0 &&
			ny < C &&
			!visited[board[nx][ny].charCodeAt() - 65]
		) {
			maxCount = Math.max(maxCount, dfs(nx, ny, count + 1, visited));
		}
	}
	visited[board[x][y].charCodeAt() - 65] = false;

	return maxCount;
};

const visited = Array(26).fill(false);
console.log(dfs(0, 0, 1, visited));
// // 첫번째풀이 -  틀림
// let [RC, ...input] = require("fs")
// 	.readFileSync("./test.txt")
// 	.toString()
// 	.split("\n");
// let [R, C] = RC.split(" ").map(x => Number(x));
// graph = input.map(x => x.split(""));

// visited = new Set();
// // function dfs(x,y):
// /**
//  * (0,0)부터 dfs를 돌린다
//  * 재귀를 돌릴때 특정알파벳이 visited에 없으면 visited넣고 dfs를 돌린다
//  * 그리고 지날 수 있는 칸의 수를 +1추가한 뒤 answer값을 갱신해준다
//  *
//  */
// dir = [
// 	[0, 1],
// 	[0, -1],
// 	[1, 0],
// 	[-1, 0],
// ];
// answer = -1;

// function dfs(x, y, maxCnt, visit) {
// 	if (maxCnt > 26) {
// 		return;
// 	}

// 	for (let i = 0; i < 4; i++) {
// 		let [nx, ny] = [x + dir[i][0], y + dir[i][1]];
// 		if (0 <= nx && nx < C && 0 <= ny && ny < R) {
// 			/**아..조건 0 <= nx < C 이거안됨 */
// 			const word = graph[ny][nx];
// 			const newWord = `${word}`.charCodeAt();
// 			if (visit.has(newWord) == false) {
// 				visit.add(newWord);
// 				answer = Math.max(answer, maxCnt + 1);
// 				dfs(nx, ny, maxCnt + 1, visit);
// 			}
// 		}
// 	}
// 	let nowWord = graph[y][x];
// 	visit.delete(`${nowWord}`.charCodeAt());
// }

// dfs(0, 0, 1, visited); //좌측상단칸 포함
// console.log(answer);
