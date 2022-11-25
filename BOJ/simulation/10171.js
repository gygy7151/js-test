// 고양이
// 첫번째풀이
// console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|");

// 사칙연산
//첫번째풀이
let nums = require("fs")
	.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(Number).nums.sort((a, b)=> a - b)
console.log(...nums);

// 백준 2752번 세수 정렬을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
    console.log(...numbers);
};