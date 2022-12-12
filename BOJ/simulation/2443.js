// 별찍기 - 7
// - 두번째풀이
let N = require("fs").readFileSync("/dev/stdin").toString();
N = Number(N);
//2*N-1번째 줄까지 별출력
//2*5-1 = 9
//4,3,2,1 // 1,3,5,7,9
for(let i=N; i>0; i--){
    let A = [];
    A.push(' '.repeat(N-i));
    A.push('*'.repeat(2*i-1));
    console.log(A.join(''));
}

// 새롭게 알게된 것


