// 최댓값
// - 첫번째풀이
let A = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let B = [...A].sort((a,b)=> b-a);
console.log(B[0]);
console.log(A.indexOf(B[0])+1);