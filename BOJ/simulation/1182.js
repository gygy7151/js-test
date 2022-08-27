// 부분 수열의 합
// - S랑 일치하는 합이 존재하는지 안하는지 boolean 값으로 리턴하는 문제로도 응용가능
// - 첫번째풀이
let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let info = input[0].split(" ").map(x => Number(x));
let N = info[0];
let S = info[1];
let arr = input[1].split(" ").map(x => Number(x));
let cnt = 0;
function subset_sum(idx, sub_sum) {
    if (idx == N) {
        return;
    }

    sub_sum += arr[idx];

    if (sub_sum == S) {
        cnt += 1;
    }

    subset_sum(idx + 1, sub_sum);

    subset_sum(idx + 1, sub_sum - arr[idx]);
}

subset_sum(0, 0);
console.log(cnt);
