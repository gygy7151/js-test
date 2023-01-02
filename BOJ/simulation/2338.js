// 긴자리 계산

// 두번째 풀이
let input = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n").map(BigInt);
let answer = input[0] + input[1] + '\n';
answer += input[0] - input[1] + '\n';
answer += input[0] * input[1];
// 첫번째 풀이 -틀림
// 너무 큰 정수는 데이터를 숫자가 아닌 문자로 리턴하는 문제가 있어서 오버플로우 발생해 오답을 리턴한 것으로 추측됨. -< 아로이냏 정확한 계산을 하지 못해서 발생한 것임을 알 게됨
let [A, B] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n").map(Number);
console.log(A+B);
console.log(A-B);
console.log(A*B);