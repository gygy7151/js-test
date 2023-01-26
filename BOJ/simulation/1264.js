// 모음의 갯수
// filter 함수의 용도를 제대로 알게 되었다.
// filter는 조건에 맞는 요소들만 모은 새로운 요소를 배열로 반환한다.
const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const countAeiou = sentence => {
	const countResult = Array.from(sentence.split(" ").join("")).filter(char => {
		return ["a", "e", "i", "o", "u"].includes(char.toLowerCase()) ? 1 : 0;
	});
	return countResult.length;
};

input.slice(0, input.length - 1).forEach(sentence => {
	console.log(countAeiou(sentence));
});
