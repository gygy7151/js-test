// 전자레인지
// - 첫번째풀이 -> ...arr로 배열객체를 복사해서 출력하면 undefined도 함께 출력됨.. 그래서
// - 그래서 따로 문자열에 담아 출력하는것이 올바른 방법임

function solution() {
	let input = require("fs").readFileSync("/dev/stdin").toString().split();

	if (input % 10 != 0) {
		console.log(-1);
		return;
	}
	let answer = "";
	const A = 300;
	const B = 60;
	const C = 10;

	answer += `${Math.floor(input / A)} `;
	input = input % A;
	answer += `${Math.floor(input / B)} `;
	input = input % B;
	answer += `${Math.floor(input / C)}`;
	input = input % C;
	console.log(answer);
}
solution();
