// 별찍기-9
// 첫번째풀이
let N = require("fs").readFileSync("/dev/stdin").toString().trim();
N = Number(N);

for (let i=N; i>1; i--){
	let answer = [];
	answer.push(' '.repeat(N-i));
	answer.push('*'.repeat(2*i-1));
	console.log(answer.join(""));
}

for (let i=1; i<=N; i++){
	let answer = [];
	answer.push(' '.repeat(N-i));
	answer.push('*'.repeat(2*i-1));
	console.log(answer.join(""));
}
