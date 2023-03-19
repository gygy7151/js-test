// 뜨거운 붕어빵
const [NM, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [N, M] = NM.split(" ").map(Number);

const getShape = (n, m, states) => {
	if ((n === 0) | (m === 0)) {
		return [];
	}
	return states.map(state => Array.from(state).reverse().join(""));
};

console.log(getShape(N, M, input).join("\n"));
