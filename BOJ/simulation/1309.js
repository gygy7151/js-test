// 동물원
// 세번째 풀이
// [ 접근방법 ]
// dp점화식이 dp[i-1]*2이여야하는데 뒤바뀌어 있었다.
// dp 배열 선언문이 없이 그냥 dp = [];를 정의한게 문제였다.

let N = require('fs').readFileSync("/dev/stdin", "utf-8").toString().trim();

N = Number(N); // 우리의 크기
let dp = Array(N+1).fill(0);

const sol = (N) => {
    if(N < 2){
        console.log(3);
        return
    }
    dp[1] = 3;
    dp[2] = 7;
    for (let i=3; i<N+1; i++){
        dp[i] = (dp[i-1] * 2 + dp[i-2]) % 9901;

    }

    console.log(dp[N]);

}

sol(N);







