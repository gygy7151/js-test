// 심부름 가는길
const times = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

times.forEach(x => {
	let [hour, min, sec] = [0, 0, 0];
	let [hourA, minA, secA, hourB, minB, secB] = x.split(" ").map(Number);
	if (secA > secB) {
		minB -= 1;
		sec = 60 - secA + secB;
	} else {
		sec = secB - secA;
	}

	if (minA > minB) {
		hourB -= 1;
		min = 60 - minA + minB;
	} else {
		min = minB - minA;
	}
	hour = hourB - hourA; //  퇴근시간은 무조건 23시 이전이라는 조건땜에 절대 hourB가 늘 더 큼.
	console.log(hour, min, sec);
});
