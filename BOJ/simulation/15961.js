// 회전초밥
// - 첫번째풀이
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const data = input[0].split(" ").map(x => Number(x));
const N = data[0];
const d = data[1];
const k = data[2];
const c = data[3];

let sushi = [];
for (let i = 1; i < N + 1; i++) {
    sushi.push(Number(input[i]));
}

sushi = sushi.concat(sushi.slice(0, k));

let eat = Array(d + 1).fill(0);
let cur = 1;
// 아..이걸 미리 먼저 안더해줘서 발생한 헤프닝..
eat[c] += 1;
// 처음 초밥조합 마킹
for (let i = 0; i < k; i++) {
    eat[sushi[i]] += 1;
    if (eat[sushi[i]] == 1) {
        cur += 1;
    }
}

let ans = cur;

// 두번째조합
for (let i = 1; i < N + 1; i++) {
    let left = i - 1; // 아니면 i
    let right = i - 1 + k; // 아니면 i + k 기존 길이보다 +1한 다음 내용에 접근해야함 초밥을 추가하는거기때문에 주의

    eat[sushi[left]] -= 1;
    if (eat[sushi[left]] == 0) {
        cur -= 1;
    }

    eat[sushi[right]] += 1;

    if (eat[sushi[right]] == 1) {
        cur += 1;
    }
    if (ans < cur) {
        ans = cur;
    }
}
console.log(ans);
