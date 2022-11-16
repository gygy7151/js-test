// 집합의 표현
// 열한번째풀이
// 열번째풀이- require 모듈 사용
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});

function solution(input) {
	const [N, M] = input.shift().split(" ").map(Number);
	const nodes = input.map(e => e.split(" ").map(Number));
	const parents = new Array(N + 1).fill(-1);

	function find(x) {
		if (parents[x] < 0) return x;
		parents[x] = find(parents[x]);
		return parents[x];
	}

	function union(x, y) {
		x = find(x);
		y = find(y);
		if (x != y) {
			parents[x] = y;
		}
	}

	const answer = new Array();
	nodes.forEach(([type, x, y]) => {
		if (type === 0) union(x, y);
		else answer.push(find(x) === find(y) ? "YES" : "NO");
	});

	console.log(answer.join("\n"));
}

// 열번째풀이- require 모듈 사용- 그래도 틀림
// const input = [];
// const readline = require("readline");
// readline
// 	.createInterface({
// 		input: process.stdin,
// 		output: process.stdout,
// 	})
// 	.on("line", line => {
// 		input.push(line.split(" ").map(n => +n));
// 	})
// 	.on("close", () => {
// 		solve();
// 		process.exit();
// 	});

// const [N, M] = input[0];
// input.shift();

// let parent = [];
// for (let i = 0; i <= N; i++) {
// 	parent.push(i);
// }

// const find = x => {
// 	if (parent[x] === x) {
// 		return x;
// 	}
// 	return (parent[x] = find(parent[x]));
// };

// const union = (x, y) => {
// 	px = find(x);
// 	py = find(y);
// 	// 최솟값 설정을 달리함
// 	parent[px] = Math.min(px, py);
// 	parent[py] = Math.min(px, py);
// };

// input.forEach(x => {
// 	const [cal, a, b] = x.split(" ").map(x => Number(x));
// 	if (cal == 0) {
// 		union(a, b);
// 	} else {
// 		if (find(a) == find(b)) {
// 			console.log("YES");
// 		} else {
// 			console.log("NO");
// 		}
// 	}
// });

// 네번째풀이-틀림
// const [NM, ...input] = require("fs")
// 	.readFileSync("/dev/stdin")
// 	.toString()
// 	.trim()
// 	.split("\n");
// const [N, M] = NM.split(" ").map(x => Number(x));

// let parent = [];
// for (let i = 0; i < N + 1; i++) {
// 	parent.push(i);
// }

// input.forEach(x => {
// 	const [cal, a, b] = x.split(" ").map(x => Number(x));
// 	if (cal == 0) {
// 		parent[a] = b;
// 	} else {
// 		if (parent[a] == parent[b]) {
// 			console.log("YES");
// 		} else {
// 			console.log("NO");
// 		}
// 	}
// });

// 세번째풀이 - 두 수가 같을땐 YES로 예외처리 추가
// let [NM, ...input] = require("fs")
// 	.readFileSync("/dev/stdin")
// 	.toString()
// 	.trim()
// 	.split("\n");
// const [N, M] = NM.split(" ").map(x => Number(x));
// let num = [];
// for (let i = 0; i < N + 1; i++) {
// 	temp = new Set();
// 	temp.add(i);
// 	num.push(temp);
// }

// input.map(x => {
// 	const [cal, a, b] = x.split(" ").map(x => Number(x));
// 	//합집합으로 연산
// 	if (cal == 0) {
// 		var union = new Set(num[a]);
// 		for (var elem of num[b]) {
// 			union.add(elem);
// 		}
// 		num[a] = union;
// 		num[b] = union;
// 		//동일집합에 포함되어 있는지 체크
// 	} else {
// 		if (num[a].has(b) && num[a].has(a)) {
// 			console.log("YES");
// 		} else if (a == b) {
// 			console.log("YES");
// 		} else {
// 			console.log("NO");
// 		}
// 	}
// });
