// 크냐?
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n').map(x=> x.split(' ').map(Number));
let answer = '';
while(true){
  const [first, second]= input.shift();
  if(first + second === 0) break;
  first > second ? answer += 'Yes\n' : answer += 'No\n';
}

console.log(answer);