// 공넣기
const [ NM, ...methods] = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
let box = Array.from(Array(N+1), () => 0)

methods.forEach(method => {
    const [i, j, k] = method.split(" ").map(Number);
    
    for (let idx=i; idx<j+1; idx++){
        box[idx] = k;
    }
})

console.log(...box.slice(1))

// 공넣기
// const [ NM, ...methods] = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split("\n");
// const [N, M] = NM.split(" ").map(Number);
// let box = Array.from(Array(N), () => 0)

// methods.forEach(method => {
//     const [i, j, k] = method.split(" ").map(Number);
    
//     for (let idx=i; idx<j+1; idx++){
//         box[idx-1] = k;
//     }
// })

// console.log(...box)