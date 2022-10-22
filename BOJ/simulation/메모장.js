// 메모장
// 첫번째 풀이
/*
한줄에 k자를 적을 수 있는 메모장이 있음
영어단어는 정해진 순서대로 적어야 하며
단어와 단어 사이는 공백 하나로 구분함. -> 공백도 1자로 포함하나? 반드시 체크(v) -> 공백도 글자수에 포함함
한줄 끝에 단어 하나를 완전히 적지 못한다면,
그 줄의 나머지 부분을 모두 공백으로 채우고 다음 줄부터 다시 단어를 적어야함

예를들어 한줄에 10자를 적을 수 있고,
주어진 순서가 ["nice", "happy", "hello", "world", "hi"] 인경우
첫째줄: 'nice_happy'
둘째줄: 'hello______'
셋째줄: 'world_hi'

단어를 적을 수 있는남는 칸이 공백한칸을 포함해 새로 적으려는 단어길이의 합보다 작다면? 다음줄로 넘어감
단어를 모두 적으면 몇줄이 되는지 return 하는 함수를 완성
한줄 글자수는 5이상 30이하인 자연수임 그때그때마다 다름
적을 글자 길이는 1이상 100이하임
모든 글자는 알파벳 소문자로 이루어져있음 
각단어의 길이는 K이하임
*/
let [K, ...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");

K = Number(K);
words = input[0].split(" ");
console.log(input);

// 현재줄의 상태 정보를 담은 temp
let temp = words[0];
// 줄길이는 1로 초기화
let answer = 1;

// words를 temp에 집어넣는다
words.slice(1).map(x => {
	if (K - temp.length < x.length + 1) {
		answer++;
		temp = x;
		console.log(temp);
	} else {
		temp += `_${x}`;
		console.log(temp);
	}
});
console.log(answer);
