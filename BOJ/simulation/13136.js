// 폰 노이만과 파리
const [R, C, N] = require("fs").readFileSync("./test.txt").toString().trim().split(" ").map(Number);
const minCntCCTV = Math.ceil(R/N) * Math.ceil(C/N);
console.log(minCntCCTV);