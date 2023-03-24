// 과목선택
// 뉴비의 기준은 뭘까?
// 첫번째풀이 - 틀림
const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (M == 1 && M == 2) {
    console.log('NEWBIE!')
} else if (M <= N) {
    console.log('OLDBIE!')
} else {
    console.log('TLE!')
}

// 두번째풀이 - 통과
// const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// if (M == 1 || M == 2) {
//     console.log('NEWBIE!')
// } else if (M <= N) {
//     console.log('OLDBIE!')
// } else {
//     console.log('TLE!')
// }