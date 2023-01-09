// 적어도 대부분의 배수
// - 첫번째풀이
const input = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split(" ").map(Number);
let answer = 0;
let count = 0
while(count < 3){
	count = 0;
	answer += 1;
	input.forEach(x=> {
		if(answer % x === 0){
			count+= 1;
		}
	})
}
console.log(answer);