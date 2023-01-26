// 직사각형으로 나누기
// 열한번째 풀이
// 3~6번케이스 인수는 변수가 들어가야 하므로 추상화 못함
// input데이터 인덱스 맞추기 위해 초기에 빈배열 추가하고, 나머지 숫자들도 concat으로 맨앞에 0추가해서 직사각형 정보 저장해야함
// case1,2에서 j 초깃값 1 -> i+1로 수정완료
// case4에서 꼭짓점 위치 수정 -> 노트 필기적힌거 다시 정확히 확인 잘할 것 ㅠ
// case4 오타 수정 -> 노트 필기 i랑 j 정확하게 표기할것 애초에 h랑 i로 구분하던가..
const [NM, ...input] = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim().split("\n");
let[N, M] = NM.split(" ").map(Number);
const rectangle = [Array(M+1).fill(0)]
input.forEach(x => 
    rectangle.push([0].concat(x.split("").map(Number)))
)
// 누적된 숫자 값들의 합을 담은 배열 stackedSumNums의 약자 s
let s = Array.from(Array(N+1), () => Array(M+1).fill(0))
let answer = 0;

for(let i=1; i<N+1; i++){
    for(let j=1; j<M+1; j++){
        s[i][j] = s[i][j-1] + s[i-1][j] + rectangle[i][j] - s[i-1][j-1];
    }
}

const compare = (r1, r2, r3) => {
    let sumRectangles = r1 * r2 * r3;
    if( sumRectangles > answer){
        answer = sumRectangles;
    }
}

const calculateTargetRectangle = (y1, x1, y2, x2) => {
    return s[y2][x2] - s[y2][x1-1] - s[y1-1][x2] + s[y1-1][x1-1]
}

const sumCase1 = () => {
    for(let i=1; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,i,M),
                calculateTargetRectangle(i+1,1,j,M),
                calculateTargetRectangle(j+1,1,N,M)
            ]
            compare(r1,r2,r3)
        }
    }
}

const sumCase2 = () =>{
    for(let i=1; i<M-1; i++){
        for(let j=i+1; j<M; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,N,i),
                calculateTargetRectangle(1,i+1,N,j),
                calculateTargetRectangle(1,j+1,N,M)
            ]
            compare(r1,r2,r3)
        }
    }
}

const sumCase3 = () => {
    for(let i=1; i<N; i++){
        for(let j=1; j<M; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,i,j),
                calculateTargetRectangle(i+1,1,N,M),
                calculateTargetRectangle(1,j+1,i,M)
            ]
            compare(r1, r2, r3)
        }
    }
}

const sumCase4 = () => {
    for(let i=1; i<N; i++){
        for(let j=1; j<M; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,i,M),
                calculateTargetRectangle(i+1,1,N,j),
                calculateTargetRectangle(i+1,j+1,N,M)
            ]
            compare(r1, r2, r3)
        }
    }
}

const sumCase5 = () => {
    for(let i=1; i<N; i++){
        for(let j=1; j<M; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,i,j),
                calculateTargetRectangle(i+1,1,N,j),
                calculateTargetRectangle(1,j+1,N,M)
            ]
            compare(r1, r2, r3)
        }
    }
}

const sumCase6 = () => {
    for(let i=1; i<N; i++){
        for(let j=1; j<M; j++){
            const [r1, r2, r3] = [
                calculateTargetRectangle(1,1,N,j),
                calculateTargetRectangle(1,j+1,i,M),
                calculateTargetRectangle(i+1,j+1,N,M)
            ]
            compare(r1, r2, r3)
        }
    }
}

sumCase1();
sumCase2();
sumCase3();
sumCase4();
sumCase5();
sumCase6();
console.log(answer);
















// - 일곱번째풀이
// 실수1: 특정 직사각형 구하는 점화식 오류로 인해 틀렸음
// 실수2: case6번 i,j 범위와 꼭짓점 위치 조정 오류로 인해 틀렸음
// 알게된것: 특정 직사각형을 구하는 것은 중복되지만 인수로 i,j를 넣을 수 없기에 추상화 불가했음.
// let [NM, ...rec] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// [N, M] = NM.split(" ").map(Number)

// const rectangle_temp = rec.map(x=> x.split("").map(Number))
// let rectangle = [Array(M+1).fill(0)] // 초기 s값을 셋팅하기 위한 용도.

// rectangle_temp.forEach(x=> {
//     rectangle.push([0].concat(x)); // 초기 s값을 셋팅하기 위한 용도.
// })
// let answer = 0;

// // 합을 저장해야할 리스트
// let s = Array.from(Array(N+1), () => 
//     Array(M+1).fill(0)
// )

// // 리스트 s는 입력받은 직사각형의 1,1부터 영역내 모든 수의 합을 저장 (Sum(c,d)에 해당)
// for (let row=1; row <N+1; row++) {
//     for (let col=1; col<M+1; col++) {
//         s[row][col] = s[row][col-1] + s[row-1][col] + rectangle[row][col] - s[row-1][col-1];
//     }
// }

// /**
//  * 
//  * @param {Number} row1 
//  * @param {Number} col1 
//  * @param {Number} row2 
//  * @param {Number} col2 
//  * @returns 
//  */
// const calculateTargetRectangle = (row1, col1, row2, col2) => {
//     return s[row2][col2] - s[row2][col1-1] - s[row1-1][col2] + s[row1-1][col1-1]
// }


// const findMax = (r1, r2, r3) => {
//     let newSum = r1 * r2 * r3
//     if(answer < newSum){
//         answer = newSum
//     }
// }

// // case 1
// for (let i=1; i<M-1; i++){
//     for (let j=i+1; j<M; j++){
//         const [r1, r2, r3] = [
//             calculateTargetRectangle(1, 1, N, i),
//             calculateTargetRectangle(1, i+1, N, j),
//             calculateTargetRectangle(1, j+1, N, M)

//         ]
//         findMax(r1, r2, r3)

//     }
// }

// // case 2
// for (let i=1; i<N-1; i++){
//     for (let j=i+1; j<N; j++){
//         const [r1, r2, r3] = [
//             calculateTargetRectangle(1, 1, i, M),
//             calculateTargetRectangle(i+1, 1, j, M), // i+1해주는 이유는 sumCalculate에서 y-1하기 때문이다. 인덱스맍춰주기 위한 용돈
//             calculateTargetRectangle(j+1, 1, N, M)
//         ]

//         findMax(r1, r2, r3)
    
//     }
// }

// // case 3
// for (let i=1; i<N; i++){
//     for (let j=1; j<M; j++){
//         const [r1, r2, r3] = [
//             calculateTargetRectangle(1, 1, i, M),
//             calculateTargetRectangle(i+1, 1, N, j),
//             calculateTargetRectangle(i+1, j+1, N, M)
//         ]

//         findMax(r1, r2, r3)
//     }
// }

// // case 4
// for (let i=1; i<N; i++){
//     for (let j=1; j<M; j++){ // 세로크기x
//         const [ r1, r2, r3 ] = [
//             calculateTargetRectangle(1, 1, i, j),
//             calculateTargetRectangle(1, j+1, i, M),
//             calculateTargetRectangle(i+1, 1, N, M)
//         ]

//         findMax(r1, r2, r3)
//     }
// }

// // case 5
// for (let i=1; i<N; i++){
//     for (let j=1; j<M; j++){
//         const [r1, r2, r3] = [
//             calculateTargetRectangle(1, 1, N, j),
//             calculateTargetRectangle(1, j+1, i, M),
//             calculateTargetRectangle(i+1, j+1, N, M)
//         ]

//         findMax(r1, r2, r3)
//     }
// }

// // case 6
// for (let i=1; i<N; i++){
//     for (let j=1; j<M; j++){
//         const [r1, r2, r3] = [
//             calculateTargetRectangle(1, 1, i, j),
//             calculateTargetRectangle(i+1, 1, N, j),
//             calculateTargetRectangle(1, j+1, N, M)
//         ]
//         findMax(r1, r2, r3)
//     }
// }

// console.log(answer);