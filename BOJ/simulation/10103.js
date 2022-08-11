/*주사위게임*/

/*
첫번째/두번째풀이 
require이 아닌 import로
packagejsjon
*/
let input = require("fs").readFileSync("./test.txt").toString().split("\n");
const N = Number(input[0]);
let A = input.slice(1, N + 1);
scoreA = 100;
scoreB = 100;
for (let i = 0; i < N; i++) {
    score = A[i].split(" ");
    if (score[0] > score[1]) {
        scoreB -= Number(score[0]);
    } else if (score[0] < score[1]) {
        scoreA -= Number(score[1]);
    }
}
console.log(scoreA);
console.log(scoreB);
