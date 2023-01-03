const input = require("fs").readFileSync("/dev/stdin",  "utf-8").toString().trim().split("\n");

const sol = (input) => {
	let answer = [];
	let idx = 0;

	while(input[idx].length !== 1){
		const [K, ...S] = input[idx++].split(" ").map(Number); // 객체구조할당분해활용

		const dfs = (v, selected) => {
			if(selected.length === 6){
				answer += `${selected.join(' ')}\n`
			}

			for(let i=v; i<K; i++){
				dfs(i + 1, [...selected, S[i]])
			}
		}
		dfs(0, []);
		answer += '\n';
	}
	return answer;
}
console.log(sol(input));

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

// const sol = (input) => {
//   let idx = 0;
//   let answer = "";

//   while (input[idx].length !== 1) { 
//     const [N, ...S] = input[idx++].split(" ").map(Number); 

//     function dfs(V, pick) {
//       if (pick.length === 6) {
//         answer += `${pick.join(" ")}\n`;
//         return;
//       }
//       for (let i = V; i < N; i++) { 
//         dfs(i + 1, [...pick, S[i]]); 
//         // spread operator를 사용해서 기존의 pick배열에 선택한 원소를 추가해 다음 재귀로 전달
//       }
//     }
//     dfs(0, []);
//     answer += "\n";
//   }
//   return answer;
// };

// console.log(sol(input));