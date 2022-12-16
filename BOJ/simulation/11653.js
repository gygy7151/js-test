// 소인수분해
// 다섯번째풀이 - 자나깨나 오타 조심. 코드를 전체적으로 하나씩 하나씩 빠르게 훑어보는 연습을 해야겠다..
let N = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim();
N = Number(N);
let i = 2
let answer = [];
while(true){
	// 아..오타..
	if(N % i === 0){
		N = N / i;
		answer.push(i);
		i = 1;
	}
	i++;
	if (i > N){
		break;
	}
}
console.log(answer.join("\n"));

// 첫번째 풀이
// let N = require("fs")
// 	.readFileSync("/dev/stdin")
// 	.toString()
// 	.trim()
// N = Number(N);
// let i = 2;
// let nums = [];

// while(true){
// 	if (N % i === 0){
// 		N = N / i
// 		nums.push(i)
// 		i = 1;
// 	}
// 	i++;
// 	if( i > N){
// 		break
// 	}
// }

// // console.log(nums.join("\n"));