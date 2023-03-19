// 운동장 한바퀴
const [d1, d2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const circlelength = (2 * d2) * 3.141592;
const squarelength = d1 * 2
console.log(circlelength + squarelength);
