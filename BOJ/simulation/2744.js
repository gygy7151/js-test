// 대소문자 바꾸기
let string = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split("");
console.log(string.map(char => char === char.toLowerCase()? char.toUpperCase() : char.toLowerCase()).join(''))
