// 두수의 합
// 첫번째풀이
/**
 * 
 */

let [N, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
N = Number(N);
const X = Number(input.pop(input.length-1));
input = input[0].split(" ").map(Number);

let answer = 0;
const solution = () => {
    for(let i=0; i < N-1; i++){
        for(let j=i+1; j< N; j++){
            if(input[i]+input[j] == X){
                answer++;
            }
        }
    }
}

solution();
console.log(answer);





