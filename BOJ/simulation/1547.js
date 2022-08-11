/*공*/
/*
두번째풀이
백준용 파일경로 dev/stdin
*/

let input = require("fs")
    .readFileSync("test.txt")
    .toString()
    .trim()
    .split("\n");

let balls = ["0", "1", "2", "3"];
for (let i = 1; i <= Number(input[0]); i++) {
    const a = input[i].split(" ");
    /*아..타입에러였다. 배열엔 숫자로 들어가있었는데 찾고싶은 원소를 문자열로 넣어 찾아서 없다고 나오고 -1을 리턴했다.*/
    const idxOfA = balls.indexOf(a[0]);
    const idxOfB = balls.indexOf(a[1]);

    balls[idxOfA] = a[1];
    balls[idxOfB] = a[0];

    // console.log(balls);
}
/*마지막 출력은 숫자로 해야한다.. */
console.log(Number(balls[1]));

/*
첫번째풀이 
require이 아닌 import로
packagejsjon
*/
// import { sample } from "./test.js";
// const input = (() => {
//     let line = 0;
//     return () => sample[line++];
// })();

// /* 1~3번카드 초기화(반드시해줘야됨) */
// let balls = [0, 1, 2, 3];

// for (let i = 1; i <= Number(input()); i++) {
//     let arr = input().split(" ");
//     let x = Number(arr[0]);
//     let y = Number(arr[1]);

//     const idxOfX = balls.indexOf(x);
//     const idxOfY = balls.indexOf(y);

//     balls[idxOfX] = y;
//     balls[idxOfY] = x;
// }
// console.log(balls[1]);
