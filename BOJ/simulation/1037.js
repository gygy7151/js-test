// 약수
// 세번째 풀이
// 단순히 머릿속으로만 생각하지 말고 테스트 케이스로 내 생각을 증명해볼 것.
let [N, nums] = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n');
N = Number(N);
nums = nums.split(" ").map(Number).sort((a, b) => a - b);
nums = Array.from(nums);
if(nums.length >= 2){
  console.log(nums.at(-1) * nums[0])
}else{
  console.log(nums[0] * nums[0])
}

// 두번째 풀이
let [N, nums] = require('fs').readFileSync('/dev/stdin', "utf-8").toString().trim().split("\n");
nums = nums.split(" ").map(Number).sort((a, b) => a - b);
let answer = 0;
nums.length >= 2? answer = nums[0] * nums[nums.length -1] : answer = nums[0] * nums[0]
console.log(answer)

// 수업때 배운 every함수의 리턴값 불린타입을 활용해 문제를 해결하려고 시도했으나 틀렸다.
// 이전에 풀었던 1145번과 유사한 문제였다.
// 모든 약수가 1인경우 2를 리턴해주어야 하는데 answer을 기본값1로 시작했길래 수정하였다.
// let [N, nums] = require('fs').readFileSync('/dev/stdin', "utf-8").toString().trim().split("\n");
// N = Number(N);
// nums = nums.split(" ").map(Number);

// let answer = 1;

// while(true){
// 	answer += 1;
// 	let isAnswer = true;
// 	nums.forEach(x=>{
// 		if(answer % x !== 0 || answer === x){
// 			isAnswer = false; nums.at(-1) * 
// 		}
// 	})
// 	if(isAnswer === true) {
// 		console.log(answer); 
// 		break
// 	};
// }

// // while(true){
// // 	answer += 1;
// // 	if(nums.every(x => answer % x === 0 && x !== answer) === true) break;
// // }
// // console.log(answer);

