// 로또
// 네번째풀이
const sol = (input) => {
	let answer = '';
	let idx = 0;
	
}





















// 세번째풀이
// const input = require("fs").readFileSync("/dev/stdin",  "utf-8").toString().trim().split("\n");

// const sol = (input) => {
// 	let answer = [];
// 	let idx = 0;

// 	while(input[idx].length !== 1){
// 		const [K, ...S] = input[idx++].split(" ").map(Number); // 객체구조할당분해활용

// 		const dfs = (v, selected) => {
// 			if(selected.length === 6){
// 				answer += `${selected.join(' ')}\n`
// 			}

// 			for(let i=v; i<K; i++){
// 				dfs(i + 1, [...selected, S[i]])
// 			}
// 		}
// 		dfs(0, []);
// 		answer += '\n';
// 	}
// 	return answer;
// }
// console.log(sol(input));

// const input = [];
// require('readline')
// 	.createInterface(process.stdin, process.stdout)
// 	.on('line', (line) => {
// 		input.push(line);
// 	})
// 	.on('close', () => {
// 		console.log(sol(input));
// 		process.exit();
// 	})
