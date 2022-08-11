*/
/*
첫번째풀이 
require이 아닌 import로
packagejsjon
*/
import { sample } from "./test.js";
const input = (() => {
    let line = 0;
    return () => sample[line++];
})();

/* 1~3번카드 초기화(반드시해줘야됨) */
let balls = [0, 1, 2, 3];

for (let i = 1; i <= Number(input()); i++) {
    let arr = input().split(" ");
    let x = Number(arr[0]);
    let y = Number(arr[1]);

    const idxOfX = balls.indexOf(x);
    const idxOfY = balls.indexOf(y);

    balls[idxOfX] = y;
    balls[idxOfY] = x;
}
console.log(balls[1]);

