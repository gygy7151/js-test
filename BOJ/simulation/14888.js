// 연산자 끼워넣기
// - S랑 일치하는 합이 존재하는지 안하는지 boolean 값으로 리턴하는 문제로도 응용가능
// - 첫번째풀이

//입력조건
//- N은 수의갯수
//- 정수 A열
//- N-1인 4개의 정수 +,-,*,/
let [N, A, op] = require("fs").readFileSync("./test.txt").toString().split("\n");
N = Number(N);
A = A.split(" ").map(Number);
op = op.split(" ").map(Number);
