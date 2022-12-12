// 별찍기
// 두번째풀이- 잘못된 규칙을 수정함
let N = require("fs").readFileSync("/dev/stdin").toString().trim();
N = Number(N);

for (let i=1; i<=N; i++){
	let answer = [];
	answer.push('*'.repeat(i));
	answer.push(' '.repeat(2*(N-i)));
	answer.push('*'.repeat(i));
	console.log(answer.join(""));
}

for (let i=N-1; i>0; i--){
	let answer = [];
	answer.push('*'.repeat(i));
	answer.push(' '.repeat(2*(N-i)));
	answer.push('*'.repeat(i));
	console.log(answer.join(""));
}


// 첫번째 풀이- 틀림
// 다섯개의 자연수가 주어질때 이 평균과 중앙값을 구하라.
// let N = require("fs")
// 	.readFileSync("./test.txt")
// 	.toString()
// 	.trim();
// N = Number(N);

// for(let i=1; i<=N; i++){
// 	let answer = [];
// 	answer.push('*'.repeat(i));
// 	answer.push(' '.repeat(2*10-i*2));
// 	answer.push('*'.repeat(i));
// 	console.log(answer.join(''))
// }

// for(let i=N-1; i>0; i--){
// 	let answer = [];
// 	answer.push('*'.repeat(i));
// 	answer.push(' '.repeat(2*10-i*2));
// 	answer.push('*'.repeat(i));
// 	console.log(answer.join(''))
// }