// 헛간 청약
const [N, W, H, L] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.min(Math.floor((W/L))*Math.floor(H/L), N))