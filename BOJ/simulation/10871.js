// x보다 작은 수
// 첫번째풀이
let [NX, ...A] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n");
let [N, X] = NX.split(" ").map(Number);
let answer = "";
// 수열A를 탐색한다
// 탐색한 수열에서 X보다 수가 작으면 answer에 추가한다.(type: str)
A = A[0].split(" ").map(Number);
A.map(x => {
	if (x < X) {
		answer += String(`${x} `);
	}
});
// answer을 출력한다.
console.log(answer);
