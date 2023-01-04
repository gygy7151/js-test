// 엄청난 부자
// 열번째풀이
// 몹시 10의 1000제곱하는 큰 숫자를 다룰땐 BigInt 클래스를 활용해 변환해주고,
// 각자 산술연산 평가 후 끝에 n을 없애주고 출력해야한다. Number() toString()활용할것.
// 근데 여기선 숫자아니고 문자열로 출력해주어야 했음

let [N, M] = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim().split(" ").map(BigInt);
console.log((N / M).toString());
console.log((N % M).toString());