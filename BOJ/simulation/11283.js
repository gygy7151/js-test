// 한글2
// String.prototype.charCodeAt(); 프로토타입메소드 / 인스턴스 생성한 후 만들 수 있는 메소드.
const N = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(N.charCodeAt() - 44031)

// 한글

// String.fromCharCode(); 정적메소드
// const index = Number(
// 	require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
// );

// const findChar = index => {
// 	return String.fromCharCode(index + 44031);
// };
// console.log(findChar(index));