// 대소문자 바꾸기
let score = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim();
let grade = score[1];
if(score[0] === 'A'){
  switch(grade){
    case '+': console.log('4.3');break;
    case '0': console.log('4.0');break;
    case '-': console.log('3.7');break;
  }
}

if(score[0] === 'B'){
  switch(grade){
    case '+': console.log('3.3');break;
    case '0': console.log('3.0');break;
    case '-': console.log('2.7');break;
  }
}

if(score[0] === 'C'){
  switch(grade){
    case '+': console.log('2.3');break;
    case '0': console.log('2.0');break;
    case '-': console.log('1.7');break;
  }
}

if(score[0] === 'D'){
  switch(grade){
    case '+': console.log('1.3');break;
    case '0': console.log('1.0');break;
    case '-': console.log('0.7');break;
  }
}

if(score[0] === 'F'){
  console.log('0.0')
}

