// 결혼식
// 두번째풀이 - bfs
let [N, M, ...input] = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim().split("\n");
N = Number(N);
let link = Array.from(Array(N), ()=> Array(N).fill(false));

let invited = Array(N).fill(0);
// 자기 자신은 이미 초대
invited[0] = 1;

input.map(x=>{
	const[a, b] = x.split(" ").map(Number);
	link[a-1][b-1] = true;
	link[b-1][a-1] = true;
})

// 만약 해당 친구와 연결된 친구가 이미 초대받은 친구면 패스
// 만약 연결된 친구가 초대 받지 않은 친구이면 초대해주고, q에 추가한다.
let answer = 0;
const bfs = () => {
	q = [[0,0]];
	while(q.length > 0){
		let [friend, depth] = q.shift();
		if(depth <= 1){
			link[friend].map((x, idx) => {
				if(invited[idx] == 0 && link[friend][idx] == true){
					invited[idx] = 1;
					answer += 1;
					q.push([idx, depth+1]);
				}
			})
		}

	}
}
bfs();
console.log(answer);



// // 첫번째풀이 - bfs로 접근안하고 단순 연결리스트 정보를 기준으로 접근했더니 친구의 친구의 친구까지 초대하는 불상사가 초래됨
// let [N, M, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");
// N = Number(N);
// let link = Array.from(Array(N), ()=> Array(N).fill(false));

// let invited = Array(N).fill(0);
// // 자기 자신은 이미 초대
// invited[0] = 1;

// input.map(x=>{
// 	const[a, b] = x.split(" ").map(Number);
// 	link[a-1][b-1] = true;
// 	link[b-1][a-1] = true;
// })

// // 만약 해당 친구와 연결된 친구가 이미 초대받은 친구면 패스
// // 만약 연결된 친구가 초대 받지 않은 친구이면 초대해주고, q에 추가한다.
// const sol = () => {
// 	q = [0];
// 	while(q.length > 0){
// 		let friend = q.shift();
// 			link[friend].map((x, idx)=> {
// 				if(invited[idx] == 0  && link[friend][idx] == true){
// 					invited[idx] = 1;
// 					q.push(idx);
// 				}
// 			})

// 	}
// }
// bfs();
// console.log(invited);
// console.log(invited.reduce((a,b) => a+b)-1);
