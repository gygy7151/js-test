// 에디터
// 세번째 풀이
let [str, N, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [left, right] = [[...str], []];

input.map(x=> {
    const order = x.split(" ");

    if(order[0] == 'P'){
        left.push(order[1]);

    }else if(order[0] == 'B' && left.length >= 1){
        left.pop();
    
    }else if(order[0] == 'L' && left.length >= 1){
        right.push(left.pop());
        
    }else if(order[0] == 'D' && right.length >= 1){
        left.push(right.pop());
    }
})

let answer = left.join("");
answer += right.reverse().join("");
console.log(answer);




// 두번째풀이- 메모리 초과
/**
 * 
 */

// let [str, N, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
// N = Number(N);
// str = [...str]
// str.push('.');
// let now = str.length - 1
// input.map(x => {
//     const order = x.split(" ");
//     // 신규 문자 인덱스 왼쪽에 추가
//     if(order[0] == 'P'){
//         str.splice(now, 0, order[1]);
//         now++;
        
//     // 커서 왼쪽에 있는 요소 삭제
//     // 단, 커서 인덱스가 맨앞이면 무시
//     }else if(order[0] == 'B'){
//         if(now != 0){
//             str.splice(now-1, 1, '');
//             str = [...str.join('')]
//             now-= 1;
//         }
    
//     // 커서 왼쪽 이동
//     // 단, 커서 인덱스가 0이면 무시
//     }else if(order[0] == 'L'){
//         if(now != 0){
//             str.splice(now, 1, str[now-1]);
//             str.splice(now-1, 1, '.');
//             now-= 1;
//         }

//     // 커서를 오른쪽으로 한칸 이동
//     // 단, 커서 인덱스가 맨뒤면 무시
//     }else if(order[0] == 'D'){
//         if(now != str.length-1){
//             str.splice(now, 1, str[now+1]);
//             str.splice(now+1, 1, '.');
//             now++;
//         }
//     }
// })

// str.splice(str.indexOf('.'), 1, '');
// console.log(str.join(''))

