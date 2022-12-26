// 상범빌딩
// 일곱번째 풀이 - 아... 시작지점이 항상 0,0,0으로 고정되어 있다고 잘못 접근했다..
// 시작지점이 고정 안되어 있으면 시작지점을 따로 저장해놓는 변수가 필요할 것임.
// let [...input] = require("fs")
// 	.readFileSync("/dev/stdin", "utf-8")
// 	.toString()
// 	.trim()
// 	.split("\n");

// const bfs = () => {
// 	let q = [];
// 	q.push()
// }
// 일곱번째 풀이 -오타......!!!!!!!! 한줄 한줄 코드 오타가없는지 확인해줘야 겠구나..논리만 확인하지 말고
// 여섯번째풀이 마지막 0,0,0을 처리하는 코드를 추가했다.-그래도 틀림
// 다섯번째 풀이 - 아... 시작지점이 항상 0,0,0으로 고정되어 있다고 잘못 접근했다..
// 시작지점이 고정 안되어 있으면 시작지점을 따로 저장해놓는 변수가 필요할 것임. - 이런데도 틀렸음..
let [...input] = require("fs")
	.readFileSync("./test.txt", "utf-8")
	.toString()
	.trim()
	.split("\n");

// 입력값
while(input.length > 1){
	const [L, R, C]= input.shift().split(" ").map(Number);

	//마지막 처리
	if(L+R+C == 0){
		break;
	}
	// 빌딩 정보를 담는 3차원 배열 map
	let map = Array.from(Array(L), () => []);

	// 빌딩 정보를 저장한다
	for(let i=0; i<L; i++){
		let data = input.splice(0, R)
		console.log(data);
		data = data.map(x=> x.split(""));
		console.log(data);

		if(data.length > 1){
			map[i].push(...data); // 요소 하나씩 넣어주어야 되었음..
		}
		input.splice(0,1)	
	}

	// 시작점 찾기
	let [sx, sy, sz] = [0,0,0];
	for(let i=0; i<L; i++){
		for(let j=0; j<R; j++){
			for(let k=0; k<C; k++){
				if(map[i][j][k] === 'S'){

					sz = i;
					sy = j;
					sx = k; //하..오타..
					// 초기 시작 정보는 #으로 설정한다. 재방문 못하도록.
					map[sz][sy][sx] = '#'
				}
			}
		}
	}
	// (0,0,0)위치에서 시작하여 쭉쭉 이동해야 한다.
	const bfs = (sx, sy, sz) => {
		let answer = [false, -1];
		const dir = [[0,0,1], [0,0,-1], [1,0,0], [-1,0,0], [0,1,0], [0,-1,0]];
		// 애초에 이동하는거리를 각각 구해야 하고, nx, ny, d를 구하고, 만약 그다음 E가 나온다면 answer[0]은 true로 그리고 answer[1]은 현재 d+1해준다. //d초깃값은 1부터시작함
		let q = [[sx,sy,sz,0]]; // x,y,z,t(이동시간)
		while(q.length > 0){
			const [x, y, z, t] = q.shift();
			dir.map(direction=>{
				const[dx, dy, dz] = direction;
				const[nx, ny, nz] = [x+dx, y+dy, z+dz];

				if(nx >= 0 && ny >= 0 && nz >= 0 && nx < C && ny < R && nz < L){
					if(map[nz][ny][nx] == '.'){
						map[nz][ny][nx] = '#';
						q.push([nx, ny, nz, t+1]);
					}else if(map[nz][ny][nx] == 'E'){
						answer = [true, t+1];
						return answer;
					}
				}
			})
		}
		return answer
	}

	const [escape, minTime] = bfs(sx, sy, sz);
	if(escape == true){
		console.log(`Escaped in ${minTime} minute(s).`)
	}else{
		console.log('Trapped!');
	}
	
}


