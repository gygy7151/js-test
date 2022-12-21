//재귀 함수가 뭔가요?
//세번째 풀이
const N = Number(require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim());

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
let recursion = (cnt) => {
  if(cnt != N){
    console.log(`${'_'.repeat(cnt*4)}"재귀함수가 뭔가요?"`);
    console.log(`${'_'.repeat(cnt*4)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`);
    console.log(`${'_'.repeat(cnt*4)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`);
    console.log(`${'_'.repeat(cnt*4)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
    recursion(cnt+1);
  }else{
    console.log(`${'_'.repeat(cnt*4)}"재귀함수가 뭔가요?"`);
    console.log(`${'_'.repeat(cnt*4)}"재귀함수는 자기 자신을 호출하는 함수라네"`);
  }
  console.log(`${'_'.repeat(cnt*4)}라고 답변하였지.`)
}


recursion(0);

// 실수한것
// - [x] 14번째 줄에 요구사항대로 큰 따옴표로 설정하지 못한 점
// - [x] cnt*2를 처음에 했었고, '-'로 출력하려 했는데, cnt*4였고, '_'를 출력해야 했음
// - [x] repeat를 사용하지 않고, 직접 문자열 곱셉을 시도하려 했음.
// - [x] 초깃값을 0이 아닌 N으로 설정했던 점.
















//첫번째 풀이
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const num = Number(input);
// let str = '';

// console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

// function cs(line, currentNum) {
//   if (num !== currentNum) {
//     str += `${line}"재귀함수가 뭔가요?"
// ${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
// ${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
// ${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
// `;
//     currentNum++;
//     cs(line + '____', currentNum);
//   } else {
//     str += `${line}"재귀함수가 뭔가요?"
// ${line}"재귀함수는 자기 자신을 호출하는 함수라네"
// `;
//   }
//   str += `${line}라고 답변하였지.
// `;
// }

// cs('', 0, num);
// console.log(str);