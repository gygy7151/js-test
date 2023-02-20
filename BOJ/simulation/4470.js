// 와글와글 숭고한
const [N, ...sentences] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

for (let i = 1; i <= Number(N); i++) {
	console.log(`${i}. ${sentences[i - 1]}`);
}
