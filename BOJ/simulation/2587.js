// 옥상정원
// 첫번째 풀이
// 다섯개의 자연수가 주어질때 이 평균과 중앙값을 구하라.
let [N, ...building] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n").map(Number);

let answer = 0;
building.forEach((x,idx)=>{
	let count = 0;
	for(let i=idx+1; i<N; i++){
		// 같거나 큰게 있으면 종료
		if(x > building[i]){
			count+= 1;
		}else{
			break;
		}

	}
	if(count > 0) answer += count;
})
console.log(answer);