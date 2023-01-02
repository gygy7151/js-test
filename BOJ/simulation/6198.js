// 단지번호 붙이기
// 세번째풀이
let [N, ...input] = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim().split("\n");
N = Number(N);
let map = []
input.map(x=>{
	map.push(x.split("").map(Number))
})
// 공통 방문상태 표시 visited
// let visited = Array.from(Array(N), () => Array(N).fill(false));

// bfs
const bfs = (a,b) => {
	const dir = [[0,1], [0,-1], [1,0], [-1,0]];
	let q = [[a,b]]; //y,x
	let count = 1;
	
	while(q.length > 0){
		const [y, x] = q.shift();
		dir.map(el=>{
			const [dx, dy] = el;
			const [nx, ny] = [x+dx, y+dy];

			if(nx >= 0 && ny >= 0 && nx < N && ny < N && map[ny][nx] == 1){
				map[ny][nx] = -1;
				count += 1;
				q.push([ny,nx]);
			}
		})
		
	}
	return count;
}
let answer = [];
for(let y=0; y<N; y++){
	for(let x=0; x<N; x++){
		if(map[y][x] == 1){
			map[y][x] = -1
			answer.push(bfs(y,x))
		}
	}
}
console.log(answer.length);
console.log(answer.sort((a,b)=> a-b).join("\n"));

// - 첫번째풀이 - 틀림
// let [totalGroupCnt, ...isHouse] = require("fs")
// 	.readFileSync("/dev/stdin")
// 	.toString()
// 	.split("\n");
// N = Number(totalGroupCnt);
// let house = [];
// isHouse.map((x, idx) => {
// 	house[idx] = x.split("").map(x => Number(x));
// });

// let visited = [];
// for (let i = 0; i < N; i++) {
// 	visited[i] = Array(N).fill(0);
// }

// dir = [
// 	[0, 1],
// 	[0, -1],
// 	[1, 0],
// 	[-1, 0],
// ];

// function dfs(y, x) {
// 	for (let i = 0; i < 4; i++) {
// 		let [ny, nx] = [y + dir[i][0], x + dir[i][1]];

// 		if (ny >= 0 && nx >= 0 && ny < N && nx < N) {
// 			if (house[ny][nx] == 1 && visited[ny][nx] == 0) {
// 				visited[ny][nx] = 1;
// 				dfs(ny, nx);
// 				count++;
// 			}
// 		}
// 	}
// }
// let answer = [];
// let result = 0;
// let count = 1;
// for (let i = 0; i < N; i++) {
// 	for (let j = 0; j < N; j++) {
// 		if (visited[i][j] == 0 && house[i][j] == 1) {
// 			visited[i][j] = 1;
// 			result++;
// 			dfs(i, j);
// 			answer.push(count);
// 			count = 1;
// 		}
// 	}
// }

// console.log(result);
// answer.sort((a, b) => {
// 	return a - b;
// });
// answer.forEach(x => console.log(x));
