// 알고리즘수업- 병합정렬
// 두번째 풀이 - input값 split("\n")안해준거 추가해주었다. 기억하자!
// [ 접근방법 ]
// 재귀 알고리즘
let [NK, ...input] = require('fs').readFileSync("./dev/stdin", "utf-8").toString().trim().split("\n");
const [N, K] = NK.split(" ").map(Number);
let arr = input[0].split(" ").map(Number);
let ans = []

const merge_sort = (L) => {
    const M = L.length;
    if(M == 1){
        return L;
    }

    const mid = Math.floor((M+1)/2)
    let left = merge_sort(L.slice(0,mid))
    let right = merge_sort(L.slice(mid))

    let [i, j] = [0, 0];
    let T = [];

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            T.push(left[i]);
            ans.push(left[i]);
            i += 1;
        }else{
            T.push(right[j])
            ans.push(right[j])
            j+= 1;
        }
    }

    while(i < left.length){
        T.push(left[i]);
        ans.push(left[i]);
        i+= 1;
    }

    while(j < right.length){
        T.push(right[j]);
        ans.push(right[j]);
        j+= 1;
    }

    return T;
    
}

merge_sort(arr);

if(ans.length >= K){
    console.log(ans[K-1]);
}else{
    console.log(-1);
}
