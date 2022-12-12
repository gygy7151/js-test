// A와 B 정수크기 비교
// 네번째풀이- 맨마지막 출력시 오름차순 출력을 놓쳤음..
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const nums = [];
rl.on("line", (line) => {
    nums.push(line);
    main(nums);
});

/**
 *
 * @param {string[]} nums
 */
const main = (nums) => {
    const [A, B] = nums[0].split(" ").map(Number)
    let answer = []

    if(A == B){
        console.log(0);
        return

    }else if(A > B){
        for(let i = B+1; i<A; i++){
            answer.push(i)
        }

    }else{
        //B가 더 큰 경우
        for(let i = A+1; i<B; i++){
            answer.push(i)
        }
    }

    console.log(answer.length);
    console.log(...answer);
    
}