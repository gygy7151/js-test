// 별찍기 - 7
// - 두번째풀이
let N = require("fs").readFileSync("/dev/stdin").toString();
N = Number(N);
//2*N-1번째 줄까지 별출력
//2*5-1 = 9
//4,3,2,1 // 1,3,5,7,9
for(let i=1; i<=N; i++){
    let A = [];
    A.push(' '.repeat(N-i));
    A.push('*'.repeat(2*i-1));
    console.log(A.join(''));
}
for(let i=(N-1); i>0; i--){
    let B = [];
    B.push(' '.repeat(N-i));
    B.push('*'.repeat(2*i-1));
    console.log(B.join(''));
}


// 새롭게 알게된 것
// * 홀수 규칙 먼저 찾으면 나중에 뒤에껀 자동으로 따라 오게됨


