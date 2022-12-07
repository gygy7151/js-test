// 회문인 수
// 두번째풀이 - parseInt 안사용하고 다른걸로 하기로 함

const exp = require("constants");

// B진법은 2진법부터 64진법까지 있음
let [N, ...nums] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.toString()
	.trim()
	.split("\n");
N = Number(N);
nums = nums.map(Number);

for(let i=0; i<N; i++){
 	const num = nums[i];
	// 각수를 2부터 65까지 계속 나눠주고 나머지 값을 구한다
	// 나머지값을 조합해서 B진법 수를 구하고
	let notCan = []
	
	for(let j=2; j<65; j++){
		let	li = [];
		let temp = num;
		
		while (temp !=0){
			li.push(temp%j);
			temp = parseInt(temp/j);
		}

		const re_li = [...li].reverse();
		
		for(let k = 0; k < li.length; k++){
			if(li[k] != re_li[k]){
				notCan.push('X');
				break;
			}
		}

	}

	if(notCan.length == 63){
		console.log(0);
	}else{
		console.log(1);
	}

	// 역정렬해서 서로 다시 비교한다
	// - 만약 하나라도 다른게 있다면 불가능한 횟수에 +1해준다
	// 2부터 64까지 이므로 불가능한 횟수가 63이면 0을 출력하고 그게 아니면 1을 출력한다



}


// 첫번째풀이 - 틀림
// 어떤 B진법으로 표현하면 회문이 되는 경우가 있는지 알려주는 프로그램을 작성

// const exp = require("constants");

// // B진법은 2진법부터 64진법까지 있음
// let [N, ...num] = require("fs")
// 	.readFileSync("./test.txt", "utf8")
// 	.toString()
// 	.trim()
// 	.split("\n");

// const solution = nums => {
// 	nums.map(x => {
// 		let answer = false; // 초기엔 해당수는 B진법으로 표현 불가능하다고 전제
// 		for (let B = 2; B < 33; B++) {
// 			const origin_num = parseInt(x, B).toString().split("");
// 			const re_num = [...origin_num].reverse();

// 			let expressOK = true; // 초기엔 특정 진법으로 회전수 표현 가능하다고 전제
// 			origin_num.map((x, idx) => {
// 				if (x != re_num[idx]) {
// 					expressOK = false;
// 				}
// 			});
// 			if (expressOK == true) {
// 				answer = true;
// 			}
// 		}

// 		if (answer == true) {
// 			console.log(1);
// 		} else {
// 			console.log(0);
// 		}
// 	});
// };

// solution(num.map(Number));

//
