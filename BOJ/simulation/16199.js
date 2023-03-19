// 나이계산하기
const [birthDay, nowDate] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map((year) => year.split(" ").map(Number))

let answer = 0;

if(birthDay[1] < nowDate[1]){
    answer = nowDate[0] - birthDay[0]
} else if (birthDay[1] === nowDate[1]  && birthDay[2] <= nowDate[2]){
    answer = nowDate[0] - birthDay[0]
} else {
    answer = nowDate[0] - birthDay[0] - 1
}

console.log(answer);
console.log(nowDate[0] - birthDay[0] + 1)
console.log(nowDate[0] - birthDay[0])