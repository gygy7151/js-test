// 방번호
// - 첫번째풀이
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 배열크기를 잘못설정함
let memo = Array(10).fill(0);

// input을 object 그대로 받아서 이상했던거임.
input[0]
    .split("")
    .map(x => Number(x))
    .forEach(x => {
        if (x == 6) {
            if (memo[6] < memo[9]) {
                memo[6] += 1;
            } else if (memo[6] > memo[9]) {
                memo[9] += 1;
            } else {
                memo[x] += 1;
            }
        } else if (x == 9) {
            if (memo[9] < memo[6]) {
                memo[9] += 1;
            } else if (memo[9] > memo[6]) {
                memo[6] += 1;
            } else {
                memo[x] += 1;
            }
        } else {
            memo[x] += 1;
        }
    });

memo.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else {
        return 1;
    }
});

console.log(memo[0]);
