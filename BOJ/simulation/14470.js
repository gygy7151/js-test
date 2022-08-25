// 전자레인지
// - 첫번째풀이
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
const D = Number(input[3]);
const E = Number(input[4]);

if (A < 0) {
    console.log(-A * C + D + B * E);
} else {
    console.log((B - A) * E);
}
