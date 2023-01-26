// 성택이의 은밀한 비밀번호
// 아직도 forEach와 map, 그리고 filter의 차이를 잘 이해못하고 사용하고 있었다.
// forEach는 반환하는 새로운 배열이 없다.
// filter는 조건에 맞는 배열의 요소들만 반환한다.
// map은 조건에 맞는 새로운 요소들도 반환 가능하다. 단 조건에 안맞는 애들도 반드시 예외 처리가 필요하다.
const [N, ...strings] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

const result = strings.map(string => {
	if (string.length >= 6 && string.length < 10) {
		return "yes";
	} else {
		return "no";
	}
});
console.log(result.join("\n"));
