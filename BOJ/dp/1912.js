// 연속합
// -  첫번째풀이
let [N, arr] = require("fs").readFileSync("./test.txt").toString().split("\n");
arr = arr.split(" ").map(Number);
let ans = Array(Number(N)).fill(0);
ans[0] = arr[0];

for (let i = 1; i < N; i++) {
	ans[i] = Math.max(ans[i], ans[i - 1] + arr[i]);
}

console.log(Math.max(...ans));
