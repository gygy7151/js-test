// 핸드폰 요금
// 첫번째풀이
/**
 * 영식 요금제
 * - 10원/30초당, 30초미만은 10원 청구됨 30초보다 작으면 
 * - 20원/30~59초 청구됨30초
 * - 60초(=1분)부턴 30초당 10원씩 추가됨
 * 
 * 민식 요금제
 * - 15원/60초당, 60초 미만은 15원 청구됨-> 현재까지 누적 통화량이 60초로 나눈 몫만큼 추가
 * - 30원/60~119초 30원 청구됨
 * - 2분부터
 *
 * 자그럼 통화시간이 주어지면
 * Ytime, Mtime에 더해
 * 더했을 때 Ytime이 30미만이면? +10원
 * 더했을 때 Ytime이 30이상 60미만이면 20원
 * 더했을 때 Ytime이 60이상이면 + 10* (Ytime+현재시간)/30
 * 
 * M타임이 60 미만이면? +15원
 * M타임이 60이상 120미만이면 +30원
 * M타임이 120이상이면 + 15 * (Mtime + 현재시간)/60
 */

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let pay = []
// rl.on("line", (line) => {
//     pay.push(line);
//     solution(pay);
// });

const data = require("fs").readFileSync("./test.txt", "utf8").trim().toString()

const solution = (pay) => {
    let data = pay.split("\n");
    const N = Number(data.shift());
    data = data[0].split(" ").map(Number);

    // 총 누적통화요금
    let [Ycost, Mcost] = [0, 0]

    // Yㄴ는 30으로 나눈 몫많큼 10*몫 더해주고 만약 30으로 나눈 나머지가 0이 아니면 + 10 더해준다
    // M도 마찬가지로 만약 60으로 나눈 나머지가 0이 아니면 +15 더해준다.
    data.map(nowTime => {
        Ycost += 10 * parseInt(nowTime/30);
        Mcost += 15 * parseInt(nowTime/60);

        // console.log(Ycost);
        console.log(Mcost);
        if(nowTime % 30 == 0){
            Ycost += 10;
        }

        if(nowTime % 60 == 0){
            Mcost += ;
        }
        console.log(Mcost);
    })
    //나머지가 0이되면 한번더 더해주어야 되었다

    let answer = [];


    if(Ycost > Mcost){
        answer.push('M');
        answer.push(Mcost);

    } else if(Ycost < Mcost){
        answer.push('Y');
        answer.push(Ycost);

    } else{
        answer.push('Y M')
        answer.push(Ycost);

    }

    console.log(...answer);

}

solution(data);

const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let time = input[1].split(' ').map(Number);
let ySum = 0;
let mSum = 0;

for (let i = 0; i < time.length; i++) {
  ySum +=
    time[i] % 30 === 0 ? (time[i] / 30 + 1) * 10 : Math.ceil(time[i] / 30) * 10;
  mSum +=
    time[i] % 60 === 0 ? (time[i] / 60 + 1) * 15 : Math.ceil(time[i] / 60) * 15;
}

if (mSum === ySum) console.log('Y M' + mSum);
else if (mSum > ySum) console.log('Y' + ySum);
else console.log('M' + mSum);