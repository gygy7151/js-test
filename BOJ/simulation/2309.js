// 일곱난쟁이
// 네번째풀이- 맨마지막 출력시 오름차순 출력을 놓쳤음..
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const people = [];
rl.on("line", (line) => {
    people.push(line);

    if (people.length === 9) {
        main(people);
    }
});

/**
 *
 * @param {string[]} people
 */
const main = (people) => {
    let answer = people.map(Number)
    let minus = answer.reduce((a,b) => a + b) - 100;
    let [check1, check2] = [0, 0]
    
    for(let i = 0; i < 8; i++){
        for(let j = i+1; j < 9; j++){
            if(answer[i] + answer[j] == minus){
                check1 = answer[i];
                check2 = answer[j];
            }
        }
    }

    answer.map(x=>{
        if(x != check1 && x != check2){
            console.log(x);
        }
    })
};

// 세번째풀이-맞음..물론 비효율적인 연산이 남아있긴 하지만 정답은 됨..
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const people = [];
rl.on("line", (line) => {
    people.push(line);

    if (people.length === 9) {
        main(people);
    }
});

/**
 *
 * @param {string[]} people
 */
const main = (people) => {
    let answer = people.map(Number)
    let sum = answer.reduce((a,b) => a + b).sort((a,b)=> a-b);
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(i == j){
                continue;
            }else{
                if(sum - (answer[i] + answer[j]) == 100){
                    answer.map(x=>{
                        if(x != answer[i] && x != answer[j]){
                            console.log(x);
                        }

                    })
                    // return 위치 map에서 빼냄
                    return;
                }

            }
        }
    }
};

// 첫번째풀이- 틀림
// let [...input] = require("fs")
// 	.readFileSync("/dev/stdin", "utf8")
// 	.trim()
// 	.split("\n").map(Number).sort((a,b)=> b-a);

// let answer = 0
// let answerList = []
// input.map(x=>{
// 	if(answer + x <= 100){
// 		answer += x;
// 		answerList.push(x);
// 	}
// })

// answerList.sort((a, b)=> a-b);
// answerList.map(x=>{
// 	console.log(x);
// })