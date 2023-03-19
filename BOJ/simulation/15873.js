// 공백 없는 A + B
// 이게 숫자가 10일때와 아닐때를 구분해줘야됨.
const nums = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim();

numsLength = nums.length;

const getSum = length => {
	switch (length) {
		case 2:
			const [a, b] = nums.split("").map(Number);
			return a + b;
		case 3:
			const digits = nums.split("").map(Number);
			if (String(digits[0]) + String(digits[1]) === "10") {
				return 10 + digits[2];
			}
			return digits[0] + 10;
		case 4:
			return 20;
	}
};

console.log(getSum(numsLength));
