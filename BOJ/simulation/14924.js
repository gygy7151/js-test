// 폰 노이만과 파리
const [S, T, D] = require("fs").readFileSync("./test.txt").toString().trim().split(" ").map(Number);
const hour = Math.floor(D / (S*2));
console.log(hour * T)