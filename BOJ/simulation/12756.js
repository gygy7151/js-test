// 고급여관
const [A, B] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const [attackScoreA, phA] = A.split(" ").map(Number);
const [attackScoreB, phB] = B.split(" ").map(Number);
const [leftPhA, leftPhB] = [Math.ceil(phA/attackScoreB), Math.ceil(phB/attackScoreA)]

if (leftPhA > leftPhB) {
    console.log('PLAYER A')
} else if (leftPhA < leftPhB) {
    console.log('PLAYER B')
} else {
    console.log('DRAW')
}