// 소수의 연속합
// 여덟번째 풀이
let N = Number(require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim());

// 소수인 수 정보 저장 담은 1차원 배열 memo
let memo = Array(N+1).fill(1); // 초깃값은 모두 소수라고 가정하기 위해 1로 초기화
memo[0] = 0;
memo[1] = 0;

for(let i=2; i<Math.trunc(4000000 ** 0.5); i++){
  if(memo[i] === 1){
    let j = i * 2;
    while(j < 4000001){
      memo[j] = 0;
      j += i;
    }
  }
}

console.log(memo);

// N까지의 크기에서 소수인 수 정보 담은 배열 prime
let prime = [];
for(let i=2; i<N+1; i++){
  if(memo[i] === 1){
    prime.push(i);
  }
}

// 연속된 소수로 이루어진 자연수 경우의 수 answer
let answer = 0;
let left = 0;
let right = 1;

while (left <= prime.length){
  let sumNums = prime.slice(left, right);
  sumNums = sumNums.reduce((a,b) => a + b);

  if(sumNums === N){
    answer++;
    left++;
  }else if (sumNums < N){
    right++;
  }else {
    left++;
  }
}

console.log(answer);






// 일곱번째 풀이
// 소수전처리 범위는 N기준이 아님
// 경우수를 카운트하는 조건 2가지가 누락되어서 추가했다.
// 연속된 합이여야 한다는 조건과 소수여야한다는 조건
let N = Number(require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim());
let memo =  Array(N+1).fill(1);
memo[0] = 0;
memo[1] = 0;
// 2부터 N중에 소수인 수를 미리 담아놓는 배열이 필요하다 prime
let prime = [];
// 소수 전처리 -> 제곱근으로 처리했더니 12ms 절약되었다..
for (let i = 2; i < Math.trunc(4000001 ** 0.5); i++) {
	if (memo[i] == 1) { // 여기서 prime수를 추가하면 정확하게 입력이 안됨
		let j = i * 2;
		while (j < 4000001) {
			memo[j] = 0;
			j += i;
		}
	}
}
for(let i=0; i<N+1; i++){
  if(memo[i] === 1){
    prime.push(i);
  }
}

let answer = 0;
let start = 0;
let end = 1;

// 종료조건은 memo의 길이가 아닌 prime의 길이를 기준으로 해야함
while (end <= prime.length){
  let tempSum = prime.slice(start, end)

  tempSum = tempSum.reduce((a,b) => a+ b);
  if (tempSum === N){
    answer++;
    end++;
  }else if(tempSum < N){
    end++;
  }else {
    start++;
  }

}

console.log(answer);


// let answer = 0;
// for(let i=2; i<N; i++){
//   let sumNums = 0;
//   let count = 1;
//   while(sumNums < N){
//     if(memo[i] === 1){
//       sumNums += i;
//       if(sumNums === N && count === i - 1){
//         console.log(sumNums);
//         answer += 1;
//       }
//     }
//     count ++;
//     i++;
//   }
// }

// console.log(answer);



