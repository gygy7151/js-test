// 날짜 계산
// 첫번째풀이
/**
 * 준구갸 사는 나라엔 수 3개를 이용해 연도를 표현
 * 각각의 수는 지구, 태양, 달을 나타냄
 * 3개의 수는 서로 다른 범위를 가짐
 * 우리가 알고 있는 1년은 준규가 사는 나라에선 1 1 1 로 나타냄
 * 1년이 지날때마다 세수는 모두 1씩 증가한다
 * 만약 어떤수가 범위를 넘어가는 경우에는 1이된다
 * 
 * E,S,M이 주어졌고, 1년이 준규가 사는 나라에서 1 1 1 일 때,
 * 준규가 사는 나라에서 우리가 알고 있는 연도로 몇년인지 프로그램을 작성하시오
 */

// fs말고 readline으로 하는게 맞음

const { mainModule } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [E, S, M] = line.split(" ").map(Number);
    main(E, S, M);
});

const main = (E, S, M) => {
    let nowYear = 1;
    while (true) {
        if ((count - E) % 15 === 0 && (count - S) % 28 === 0 && (count - M) % 19 === 0) {
            console.log(nowYear);
            process.exit();
        }else{
            nowYear++;
        }
    }
}