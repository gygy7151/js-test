import { sample } from "./test.js";
const input = (() => {
    let line = 0;
    return () => sample[line++];
})();

// console.log(input());
let balls = [0, 1, 2, 3];
let N = Number(input());

for (let i = 1; i <= N; i++) {
    let arr = input().split(" ");
    let x = Number(arr[0]);
    let y = Number(arr[1]);

    const idxOfX = balls.indexOf(x);
    const idxOfY = balls.indexOf(y);

    balls[idxOfX] = y;
    balls[idxOfY] = x;
}
console.log(balls[1]);
