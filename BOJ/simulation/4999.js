// 아!
// 두번째 풀이 - 길이 접근으로 go or no가 결정되도록 알고리즘을 작성한다.
// switch문 안의 조건문에는 계산된 결과값 또는 특정 값과 비교되는 용도임을 주의하자.
const [jahwan, doctor] = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n').map(x=> x.length);
const isPossible = jahwan >= doctor;
switch(isPossible){
  case true: {
    console.log('go');
    break;
  }
  default:
    console.log('no');
}
// 첫번째 풀이 - 단순 문자열 일치 수준으로 접근했다..
// const [jahwan, doctor] = require('fs').readFileSync('./test.txt', 'utf-8').toString().trim().split('\n');
// let res = 'go'
// switch(jahwan, doctor){
//   case jahwan.length === doctor.length:
//     Array.from(jahwan).forEach((x, idx)=>{
//       if(x !== doctor[idx]){
//         res = 'no';
//       }
//     })
//     console.log(res);
//     break;
  
//   case jahwan.length > doctor.length:
//     Array.from(doctor).forEach((x, idx)=> {
//       if(x !== jahwan[idx]){
//         res = 'no';
//       }
//     }) 
//     console.log(res);
//     break;
  
//   default:
//     console.log('no');
// }