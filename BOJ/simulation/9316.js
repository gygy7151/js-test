// HELLO JUDGE
const N = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim();

for (let i = 1; i <= Number(N); i++) {
	console.log(`Hello World, Judge ${i}!`);
}
