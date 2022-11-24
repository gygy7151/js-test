// Strfy
// 네번째풀이 -
// 세번째풀이- 그래도 틀리네..
// - 아 갯수가 맞아야 되는데 그걸 체크 못해따
// - x.charCodeAt()하면 된다.. 뻘 삽질 했다..
// - 내가 잘못했던건 97을 빼줬어야했는데 97 - x.charCodeAt()을 해서 값이 마이너스가 출력된 상황이었다.
let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n");
N = Number(N);
// 1번째 문자요소요소 갯수가 2번째 문자요소요소 갯수랑 같아야 된다.
// 같으면 Possible 안 같으면 Impossible
if (N == 0) {
}
input.map(x => {
	// 가능여부
	let answer = "Possible";
	// 알파벳 존재여부 정보 담긴 배열 alpha
	let alphaA = Array(26).fill(0);
	let alphaB = Array(26).fill(0);
	// 아스키 코드로 변환
	const [a, b] = x.split(" ");
	const [arrA, arrB] = [[...a], [...b]];

	// 1번째 문자열 alphaA 존재여부 표시
	arrA.map(x => {
		const alphaOrd = x.charCodeAt() - 97;
		alphaA[alphaOrd] += 1;
	});

	// 2번째 문자열 alphaB 존재여부 표시
	arrB.map(x => {
		const alphaOrd = x.charCodeAt() - 97;
		alphaB[alphaOrd] += 1;
	});

	alphaA.map((x, idx) => {
		if (x != alphaB[idx]) {
			answer = "Impossible";
		}
	});

	console.log(answer);
});
