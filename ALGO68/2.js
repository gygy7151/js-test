// 수열의 사칙연산
// 요구사항
// [] - 최소 연산자 한개 이상 사용한다.(최대3개)
// [] - 계산 순서는 곱셈과 나눗셈 먼저, 덧셈과 뺄셈은 나중
// [] - eval과 charAt(index)를 활용하는게 꿀팁

const solution = () => {
	//1000~9999
	let answer = [];
	const op = ['*', ''];
	for(let nums=1000; nums<10000; nums++){
		const num = String(nums);

		for(let i=0; i<op.length; i++){
			for(let j=0; j<op.length; j++){
				for(let k=0; k<op.length; k++){
					let val = num.charAt(3) + op[i] + num.charAt(2) + op[j] + num.charAt(1) + op[k] + num.charAt(0);

					if(val.length > 4){
						if(num == eval(val)){
							console.log(val + " = " + nums);
						}
					}
				}
			}
		}
	}

	console.log(...answer);
};

solution();

// 다른 사람 풀이와 다른점

// 새롭게 알게 된 점
// - 곱셈외에 나머지는 모두 연산하면 4자릿수가 안되거나 해당값보다 커지거나 작아져서 안되므로 곱셈연산자만 가능한걸 알게됨
// - 만약 eval이 아니였다면 맨 앞쪽에 0으로 시작하는 숫자가 있는지 확인하고 정규식으로 지워주고 연산해줘야됨

// 추후 개선했으면 하는 점
