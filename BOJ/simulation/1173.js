// 운동
const [N, m, M, T, R] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let totalTime = 0;
let pureWorkOutTime = 0;
let X = m;

while (pureWorkOutTime < N) {
    if (m + T > M){
        break;
    }

    if (X + T <= M) {
        X += T
        pureWorkOutTime += 1;

    } else {
        X = Math.max(X - R, m);
    }
    totalTime += 1;
}

console.log(pureWorkOutTime === N ? totalTime : -1);

// 두번째풀이 틀림
// const [N, m, M, T, R] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// let totalTime = 0;
// let pureWorkOutTime = 0;
// let X = m;

// const countX = () => {

//     while(true) {
//         if ((X + T)> M && (X - R) < m) {
//             console.log(-1)
//             return
//         } 

//         if (X + T <= M) {
//             X += T;
//             pureWorkOutTime += 1;
//             if (pureWorkOutTime === N){
//                 totalTime += 1;
//                 console.log(totalTime);
//                 return
//             }
//         } else {
//             if (X - R >= m) {
//                 X -= R;
//             } else {
//                 X = R;
//             }
//         }
//         totalTime += 1;
//     }
// }

// countX();