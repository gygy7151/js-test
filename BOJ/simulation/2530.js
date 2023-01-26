// 인공지능 시계
// 두번째 풀이
// 시분초가 추어지면 60으로 초를 먼저 계산하여 초에 더해주고 이때 60이 넘으면 분에 더해준다.
// 마찬가지로 분을 계산해주고 기존 분에 더한 값이 60이 넘으면 시에 더해준다.
// 만약 시가 24시간 이상이 되면, %24한 값으로 시간을 갱신해주면 현재시간에서 지나간 초만큼의 새로운 시간을 계산할 수 있다.
const [presentTime, timeToCook] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

let [hour, minute, second] = presentTime.split(" ").map(Number);
const requiredTime = Number(timeToCook);

second += requiredTime % 60;
if (second >= 60) {
	minute += Math.floor(second / 60);
	second %= 60;
}
minute += Math.floor(requiredTime / 60);
if (minute >= 60) {
	hour += Math.floor(minute / 60);
	minute %= 60;
}

if (hour >= 24) {
	hour %= 24;
}
console.log(`${hour} ${minute} ${second}`);

// 첫번째풀이 -틀림
// const [presentTime, timeToCook] = require("fs")
// 	.readFileSync("./test.txt", "utf-8")
// 	.toString()
// 	.trim()
// 	.split("\n");

// let [hour, minute, second] = presentTime.split(" ").map(Number);
// const requiredTime = Number(timeToCook);
// hour += Math.floor(requiredTime / 360);
// minute += Math.floor((requiredTime % 360) / 60);
// second += (requiredTime % 360) % 60;
// console.log(hour, minute, second);
// if (second >= 60) {
// 	second = second % 60;
// 	minute += Math.floor(second / 60);
// }

// if (minute >= 60) {
// 	minute = minute % 60;
// 	hour += Math.floor(minute / 60);
// }

// if (hour >= 25) {
// 	console.log(hour);
// 	hour = hour % 24;
// }

// console.log(`${hour} ${minute} ${second}`);
