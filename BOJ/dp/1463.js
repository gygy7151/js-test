// 1로 만들기
// -  두번째풀이 - 조건에 맞게 구현하기.
let N = Number(require("fs").readFileSync("/dev/stdin").toString());
let dp = Array(N + 1).fill(0);

for (let i = 2; i < N + 1; i++) {
	dp[i] = dp[i - 1] + 1;
	if (i % 3 == 0) {
		dp[i] = Math.min(dp[Math.round(i / 3)] + 1, dp[i]);
	}

	if (i % 2 == 0) {
		dp[i] = Math.min(dp[i], dp[Math.round(i / 2)] + 1);
	}
}
console.log(dp[N]);

// - 첫번째풀이
let N = Number(require("fs").readFileSync("/dev/stdin").toString());
let dp = Array(N + 1).fill(1);

dp[0] = 0;
dp[1] = 0;

if (N <= 1) {
	console.log(dp[N]);
} else {
	for (let i = 1; i < N + 1; i++) {
		dp[i] = Math.min(
			dp[Math.floor(i / 3)] + 1,
			dp[Math.floor(i / 2)] + 1,
			dp[i - 1] + 1
		);
	}
}
console.log(dp[N]);
