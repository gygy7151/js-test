let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let G = [];
input = input.slice(1);

let values = Array(N).fill(0);
// -  dict에 없는 값 찾으려 하면 래퍼런스 에러남 .. - >  대신 set자료구조 활용

for (let i = 0; i < N; i++) {
    temp = new Set();
    input[i].split("").forEach(function (el, idx) {
        if (el == "Y") {
            temp.add(idx);
        }
    });
    G.push(temp);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i == j) {
            continue;
        }

        const isIntersection = new Set([...G[i]].filter(x => G[j].has(x)));

        if (G[i].has(j)) {
            values[i] += 1;
        } else if (Array.from(isIntersection).length != 0) {
            //set은 길이를 구할 수 없다. 배열로 처리해서 길이구해줘야됨
            values[i] += 1;
        }
    }
}

console.log(Math.max(...values));
