// 앞뒤가 같은 10진수 만들기
// 요구사항
// [] - 10진수, 2진수, 8진수 어느것으로 표현해도 대칭수가 되는 수
// [] - 10진수의 10이상에서의 최솟값을 구하자

const solution = () => {
	let num = 11;

	while (true) {
		let ten = num.toString().split("");
		let eight = num.toString(8).split("");
		let two = num.toString(2).split("");

		let re_ten = [...ten].reverse();
		let re_eight = [...eight].reverse();
		let re_two = [...two].reverse();

		let moreFind = false; // 처음엔 모두 대칭이 된다는 가정을 전제로 함.
		ten.map((x, idx) => {
			if (x != re_ten[idx]) {
				moreFind = true;
			}
		});

		eight.map((x, idx) => {
			if (x != re_eight[idx]) {
				moreFind = true;
			}
		});

		two.map((x, idx) => {
			if (x != re_two[idx]) {
				moreFind = true;
			}
		});

		if (moreFind == false) {
			console.log(num);
			break;
		}

		num += 2;
	}
};

solution();

// 다른 사람 풀이와 다른점
// - 홀수만 접근해야 하는데 +1씩 더해주어 홀짝 모두 접근하고 있었던 점
// - 문자열이 대칭이 된다는건 역정렬한 수열과 비교해도 모든 요소가 일치된다는 점을 놓친점
// - 그래서 굳이 반으로 수열을 나눠서 또 역정렬 해서 비교해주고 있었음..(몹시 비효율적)

// 새롭게 알게 된 점
// - reverse는 비순수함수이다. 원본을 마구마구 바꿔버리는 무서운 함수..
// - 그래서 깊은 복사를 한 객체에 reverse() 메소드를 사용해야 한다.
// - 놀랍게도 js는 배열 A와 배열 B의 요소가 서로 같아도 참조하는 주솟값을 비교하기 때문에 절대 같다고 비교하지 않는다.
// - 그래서 이런 부분을 해결하기 위해 각 숫자 문자열마다 map으로 접근해서 요소 하나하나 씩 비교 접근했다.

// 추후 개선했으면 하는 점
// - 조금 더 효율적인 방법이 있으면 좋겠다..
