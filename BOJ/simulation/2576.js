// 2576번 해결..
let nums = require("fs")
	.readFileSync("/dev/stdin", "utf8").split("\n").map(Number).sort((a, b)=> a - b)
let answer = []
nums.map(x=>{
    if(x % 2 != 0){
        answer.push(x)
    }
})

if(answer.length == 0){
    console.log(-1);
}else{
    console.log(answer.reduce((a,b)=>a + b));
    console.log(answer[0]);
}

