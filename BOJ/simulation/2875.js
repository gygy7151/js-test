// 대회 or 인턴
const [N, M, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let maxTeamCnt = Math.min(Math.floor(N / 2), M);
const leftPeopleCnt = (N - (maxTeamCnt*2)) + (M - (maxTeamCnt));

if (leftPeopleCnt >= K){
    console.log(maxTeamCnt);
} else {
    maxTeamCnt -= Math.ceil((K - leftPeopleCnt) / 3)

    if (maxTeamCnt <= 0) {
        console.log(0)
    } else {
        console.log(maxTeamCnt)
    }
}