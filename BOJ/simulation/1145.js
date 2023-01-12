// 적어도 대부분의 배수
// 두번째풀이
// while문대신 3개의 공배수가 있는 모든 경우를 100*3
// 되도록 i나 x 사용하지말고 명확한 의미의 변수 사용하자
const nums = require("fs").readFileSync('/dev/stdin', "utf-8").toString().trim().split(" ").map(Number);

// 1부터 1씩 더해가면서
// nums에 있는 수들중 최소 3개이상 각각 나누어 떨어지면
// while문을 종료하고 해당 숫자를 출력한다.

for(let answer=1; answer < Math.pow(100,3); answer++){
	let count = 0;
	nums.forEach(num=>{
		if(answer % num === 0){
			count += 1;
		}
	})
	if(count >= 3){
		console.log(answer);
		break;
	}
}













// - 첫번째풀이
// const input = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split(" ").map(Number);
// let answer = 0;
// let count = 0
// while(count < 3){
// 	count = 0;
// 	answer += 1;
// 	input.forEach(x=> {
// 		if(answer % x === 0){
// 			count+= 1;
// 		}
// 	})
// }
// console.log(answer);