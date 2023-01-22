// 소문난 칠공주
// 다섯번째 풀이 -남의 풀이
const graph = require('fs').readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')
.map(v => v.split(''));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = [...Array(25)].fill(false);
// 이다솜파(S)가 4명 이상 있는지 확인
function moreThanFour() {
let cnt = 0;

for (let i = 0; i < 25; i++) {
	if (visited[i]) {
		const x = Math.floor(i / 5);
		const y = i % 5;

		if (graph[x][y] === 'S') cnt++;
	}
}

return cnt >= 4;
}
// 7명이 인접한지 확인
function adjacency() {
const queue = [];
const checkSelect = [...Array(5)].map(() => [...Array(5)].fill(false));
const queueSelect = [...Array(5)].map(() => [...Array(5)].fill(false));
let checkAnswer = false;

let temp = 0;
for (let i = 0; i < 25; i++) {
	if (visited[i]) {
		const x = Math.floor(i / 5);
		const y = i % 5;
		checkSelect[x][y] = true;

		// 처음에는 queue에 넣어주기 위한 temp 변수
		if (temp === 0) {
			queue.push([x, y]);
			queueSelect[x][y] = true;
			temp++;
		}
	}
}

let cnt = 1;
while (queue.length) {
	const size = queue.length;

	if (cnt === 7) {
		checkAnswer = true;
		break;
	}

	for (let k = 0; k < size; k++) {
		const [x, y] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];

			if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
				if (checkSelect[nx][ny] && !queueSelect[nx][ny]) {
					queueSelect[nx][ny] = true;
					queue.push([nx, ny]);
					cnt++;
				}
			}
		}
	}
}

return checkAnswer;
}

let ans = 0;
function DFS(Idx, cnt) {
if (cnt === 7 && moreThanFour() && adjacency()) {
	ans++;
	return;
}

for (let i = Idx; i < 25; i++) {
	if (!visited[i]) {
		visited[i] = true;
		DFS(i, cnt + 1);
		visited[i] = false;
	}
}
}

DFS(0, 0);
console.log(ans);
return ans + '';
// 네번째풀이 - 백트래킹 활용함 - 틀림
// let table = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n').map(x => x.split(''));
// const dir = [[-1,0], [1,0], [0,-1], [0,1]];
// // let findOne = function (ny, nx, arr) {
// // 	arr.map(x=> {
// // 		let [a, b] = x;
// // 		if( a === ny && b === nx){
// // 			return true
// // 		}
// // 	})
// // 	return false
// // }
// let S = [];
// let include = Array(25).fill(false);
// let ans = 0;

// let check = (n, visited, cnt) => {
// 	if (cnt[0] === 7) return
// 	let [r, c] = [Math.trunc(n/5), n%5]

// 	let res = false
// 	for(let i=0; i<4; i++){
// 		const [nr, nc] = [r+dir[i][0], c + dir[i][1]]

// 		if(0 <= nr &&  nr < 5 && 0 <= nc && nc < 5){
// 			if(include[nr*5+c] === true){
// 				visited[nr][nc] = true;
// 				cnt[0] += 1;
// 				res = check(nr*5+nc, visited, cnt)
// 				if(res === true){
// 					return res
// 				}
// 			}
// 		}
// 	}

// 	return res
// }

// let solve = (idx, yn, cnt) => {
// 	if (yn => 4 || 25 - idx < 7 - cnt ){
// 		return
// 	}

// 	if (cnt === 7){
// 		let visited = Array.from(Array(5), ()=> {Array(5).fill(false)})
// 		visited[Math.trunc(S[0]/5)][S[0]%5] = true;
// 		if(check(S[0], visited, [1]) === true){
// 			ans+= 1;
// 		}
// 		return
// 	}

// 	//현재 인원의 위치
// 	let r = Math.trunc(idx / 5)
// 	let c = idx % 5

// 	//현재 인원을 포함하는 경우
// 	S.append(idx)
// 	include[idx] = true
	
// 	if(table[r][c] === 'Y'){
// 		solve(idx+1, yn+1, cnt+1)
// 	}else if(table[r][c] === 'S'){
// 		solve(idx+1, yn, cnt+1)
// 	}

// 	S.pop()
// 	include[idx] = false
// 	solve(idx+1, yn, cnt)
// }

// solve(0,0,0);
// console.log(ans);
// - 세번째풀이 - 틀림..
// dfs특성상 십자모양으로 갈라지는 탐색을 하기는 어렵다.
// let table = require('fs').readFileSync('./test.txt', 'utf-8').toString().trim().split('\n').map(x => x.split('')); 
// let [cnt, arr] = [0, []];


// const check = () => {
// 	let visited = Array.from(Array(5), ()=> Array(5).fill(false));
// 	for (index in arr){
// 		visited[Math.trunc(index/5)][index%5] = true;
// 	}

// 	let q = [arr[0]];
// 	const dir = [[0,1], [0,-1], [1,0], [-1,0]];
// 	let depth = 0;
// 	visited[Math.trunc(arr[0]/5)][arr[0] % 5] = false;

// 	while(q.length > 0){
// 		let idx = q.shift();
// 		depth += 1;
// 		let [y, x] = [Math.trunc(idx /5), idx % 5];

// 		for(let i=0; i<4; i++ ){
// 			const [ny, nx] = [y+dir[i][0], x+dir[i][1]];
// 			if( 0 <= ny && ny < 5 && 0 <= nx && nx < 5 && visited[ny][nx] === false){
// 				visited[ny][nx] = true;
// 				q.push((5 * ny) + nx)
// 			}
// 		}
// 	}

// 	return depth === 7? true : false;

// }

// const DFS = (depth, index, sCnt, yCnt) => {

// 	if (depth == 7 && sCnt >= 4){
// 		if (check() === true){
// 			cnt += 1;
// 			return
// 		}
// 	}

// 	if (yCnt >= 4 || index >= 25 || depth >7){
// 		return
// 	}

// 	let [ y, x ]  = [Math.trunc(index /5), index % 5];

// 	arr.push(index)
	
// 	if(table[y][x] === 'Y'){
// 		DFS(depth + 1, index + 1, sCnt, yCnt +1)
// 	}
// 	else if(table[y][x] === 'S'){
// 		DFS(depth + 1, index + 1, sCnt + 1, yCnt)
// 	}

// 	arr.pop();
// 	DFS(depth, index+1, sCnt, yCnt)
// }

// DFS(0,0,0,0);
// console.log(cnt);

// - 두번째풀이- 틀림
// 재귀로 접근했는데, 답이 오답이 나왔다.
// let board = require('fs').readFileSync('./test.txt', 'utf-8').toString().trim().split('\n').map(x => x.split(''));
// let visit = Array.from(Array(5), () => Array(5).fill(0));
// console.log(board);

// const dir = [[0,1], [0,-1], [1,0], [-1,0]];
// let cases = [];

// const recursion = (y, x, countS, depth, visited, people) =>{
// 	if(depth === 8 && countS >= 4){
// 			cases.push(people);
// 			return;
// 	}else if(depth === 8){
// 		return;
// 	}
	
// 	for(let i=0; i<4; i++){
// 		const [dy, dx] = dir[i];
// 		const [ny, nx] = [ y+dy, x+dx ];

// 		if( ny >= 0 && nx >= 0 && ny < 5 && nx < 5){
// 			if(visited[ny][nx] === 0){
// 				visited[ny][nx] = 1;
// 				people.push([ny,nx])
// 				if(board[ny][nx] === 'S'){
// 					recursion(y+dy, x+dx, countS+1, depth+1,visit, people);
// 				}else{
// 					recursion(y+dy, x+dx, countS, depth+1,visit,people);
// 				}
// 				visited[ny][nx] = 0;
// 			}
// 		}
// 	}

// }

// for(let i=0; i<5; i++){
// 	for(let j=0; j<5; j++){
// 		if(board[i][j] === 'S'){
// 			visit[i][j] = 1;
// 			recursion(i, j, 1, 1, visit, [[i,j]]);
// 		}else{
// 			visit[i][j] = 1;
// 			recursion(i, j, 0, 1, visit, [[i,j]]);
// 		}
// 		visit[i][j] = 0;
// 	}
// }

// console.log(cases);

// let answer = 0;
// cases.forEach(arr=> {
// 	let visit = Array(7).fill(false);
// 	q = [];
// 	q.push(arr[0]);
// 	visit[0] = true;

// 	while(q.length>0){
// 		let [y, x] = q.shift();
// 		for (let i=0; i<4; i++){
// 			let [ny, nx] = [y+dir[i][0], x+dir[i][1]];
// 			if(arr.includes([ny,nx]) === true){
// 				const nextIdx = arr.findIndex([ny,nx])
// 				if (visit[nextIdx] === false){
// 					q.push([ny, nx]);
// 					visit[nextIdx] = true;
// 				}
// 			}
// 		}
// 	}

// 	console.log(visit);


// })

// console.log(answer);