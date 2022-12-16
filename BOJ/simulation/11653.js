// 소인수분해
// 첫번째 풀이
let N = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
N = Number(N);
let i = 2;
let nums = [];

while(true){
	if (N % i === 0){
		N = N / i
		nums.push(i)
		i = 1;
	}
	i++;
	if( i > N){
		break
	}
}

console.log(nums.join("\n"));