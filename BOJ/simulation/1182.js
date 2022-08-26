// 부분 수열의 합
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
