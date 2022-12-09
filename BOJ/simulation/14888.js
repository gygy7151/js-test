// 연산자 끼워넣기
// - S랑 일치하는 합이 존재하는지 안하는지 boolean 값으로 리턴하는 문제로도 응용가능
// 두번째풀이
//입력조건
//- N은 수의갯수
//- 정수 A열
//- N-1인 4개의 정수 +,-,*,/
let [N, A, op] = require("fs").readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");
N = Number(N);
A = A.split(" ").map(Number);
op = op.split(" ").map(Number);
let [maxVal, minVal] = [-(1e9+1), 1e9+1];
const solution =(depth, res, plus, minus, multiply, divide) => {
    if(depth == N){
        maxVal = Math.max(res, maxVal);
        minVal = Math.min(res, minVal);

        return
    }

    if(plus > 0){
        solution(depth+1, res + A[depth], plus-1, minus, multiply, divide)
    }

    if(minus > 0){
        solution(depth+1, res - A[depth], plus, minus-1, multiply, divide)
    }

    if(multiply > 0){
        solution(depth+1, res * A[depth], plus, minus, multiply-1, divide)
    }

    if(divide > 0){
        solution(depth+1, ~~(res / A[depth]), plus, minus, multiply, divide-1)
    }

}
solution(1, A[0], op[0], op[1], op[2], op[3]);

console.log(maxVal);
console.log(minVal);

// 실수한 점
// 계산을 안해주고 dfs값을 넘긴 점.
// 맨처음 dfs돌릴때 초깃값을 할당 안해주었던 점.
//


// 새롭게 알게된 것
// - Oper를 구할 필요 없이 dfs로 연산한 값 넘겨주고, N번을 반복하는 걸 depth로 표현 하면 되는 거였음..
// - 

// 첫번째풀이
// 연산자 전체 갯수 담은 정보 Oper
// const operater = ['+', '-', '-', '/'];
// let Oper = [];
// op.map((x, idx) =>{
//     Oper.push(...Array(x).fill(operater[idx]));
// })

