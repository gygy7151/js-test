// 에너그램 만들기
// 첫번째풀이
let [...input] = require("fs")
	.readFileSync("./test.txt", "utf8")
	.trim()
	.split("\n");
let [A, B] = [[...input[0]], [...input[1]]];

// 에너그램 관계에 있도록 만들기 위해서 제거해야하는 최소 개수의 문자수를 구혀라면?
// 기준 문자열이 있을테고,
// 비교문자열과 비교했을때 비교문자열엔 있는데 기존문자열엔 없는 애들만 제거해주면 됨
// 양쪽 서로 다 비교해주어야됨
// 만약 비교문자열 갯수가 기존 문자열보다 작다면 그만큼 제거 해주면 되겠군?!
// 만약 비교문자열 갯수가 기존 문자열보다 크다면 그만큼 또 제거 해주면 됨

// 문자열의 정보를 담는다
let [arrA, arrB] = [Array(26).fill(0), Array(26).fill(0)];

A.map(x => {
	const charVal = x.charCodeAt() - 97;
	arrA[charVal]++;
});

B.map(x => {
	const charVal = x.charCodeAt() - 97;
	arrB[charVal]++;
});

let answer = 0;
// 초기 데이터는 에너그램이 안되는 거임
// arrA와 arrB를 비교하여 삭제할 문자갯수를 구한다
// - 우선 arrA와 arrB가 동일한 문자가 모두 존재하는경우
// - 둘중 하나만 문자가 존재하는 경우
// // - 기존문자열의 문자는 존재하지 않는데 비교문자열은 존재하는경우
// // // 비교문자열의 문자 삭제
// // - 기존문자열의 문자는 존재하는데 비교문자열은 존재하지 않는 경우
// // // 비교문자열의 문자 추가가 안됨...애초에 에너그램이 안되는 구조임 -> 아 기존 문자열의 문자 삭제하면됨
arrA.map((aVal, idx) => {
	// 둘다 모두 존재하는 경우
	if (aVal != 0 && arrB[idx] != 0) {
		answer += Math.abs(aVal - arrB[idx]);
	}
	// A값만 존재하는 경우
	else if (aVal != 0 && arrB[idx] == 0) {
		answer += aVal;
	}
	// B값만 존재하는 경우
	else {
		answer += arrB[idx];
	}
});

console.log(answer);
