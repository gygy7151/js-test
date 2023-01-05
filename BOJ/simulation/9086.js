// 문자열
// 두번째풀이
// -1번째 인덱스는 없음
let [N, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");
for(let i=0; i<Number(N); i++){
  console.log(`${input[i][0] + input[i][input[i].length-1]}`)
}
