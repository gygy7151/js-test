// 가장긴 감소하는 부분수열
// 가장 긴 감소하는 부분수열 구하는 문제였는데 증가하는 부분수열 구하고 있었음..
// if조건문 생략된거 추가함
let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n");
N = parseInt(N);
let lis = Array(N).fill(-1);
let nums = input[0].split(" ").map(Number);
lis[0] = 1;

// 나를 포함한 가장 긴 LIS의 길이 구하기
for (let i = 1; i < N; i++) {
	i_max_length = 0;
	for (let j = 0; j < i; j++) {
		if (nums[j] > nums[i] && lis[j] > i_max_length) {
			i_max_length = lis[j];
		}
	}
	lis[i] = i_max_length + 1;
}

// LIS의 길이중 가장 큰 값 출력
max_val = lis[0];
lis.map(x => {
	if (max_val < x) {
		max_val = x;
	}
});
max_val == 0 ? console.log(0) : console.log(max_val);
