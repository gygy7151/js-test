// 쇠막대기
// 두번째 풀이
// [ 접근방법 ]
// 레이저는 인접한 괄호 한쌍으로 표현된다.
// 문자열의 총 경우의수는 4가지
// - () : 레이저o / pieceCnt += sticks의 길이
// - (( : 레이저x / stick += 1;
// - )) : 레이저o / stick -= 1; piece += 1;
// - )( : 레이저x;
const poll = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim();

const sol = (poll) => {
	let N = poll.length;
	let pieceCnt = 0
	let stickCnt = 0;
	
	for(let i=0; i<N-1; i++){
		const setStr = `${poll[i]}${poll[i+1]}`
		
		switch(setStr) {
			case '()':
				pieceCnt += stickCnt;
				break;

			case '((':
				stickCnt += 1;
				break;

			case '))':
				stickCnt -= 1;
				pieceCnt += 1;
				break;

				default:
					continue;

		}
	}
	return pieceCnt;

}

console.log(sol(poll));


















// 첫번째풀이

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
// // test
// // const input = `(((()(()()))(())()))(()())`;

// const solution = (input) => {
//   let stack = 0;
//   let answer = 0;
//   const str = input.replace(/\(\)/g, '0');
//   [...str].forEach((ch) => {
//     if (ch === '0') {
//       answer += stack;
//     } else if (ch === '(') stack += 1;
//     else if (ch === ')') {
//       stack -= 1;
//       answer += 1;
//     }
//   });
//   return answer;
// };

// console.log(solution(input));
