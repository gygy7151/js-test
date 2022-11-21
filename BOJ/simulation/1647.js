// 도시분할계획
// - 첫번째풀이 - 어떻게 데이터에 접근해야할지 모르겠음..
let [NM, ...input] = require("fs")
	.readFileSync("./test.txt")
	.toString()
	.split("\n");
const [N, M] = NM.split(" ").map(Number);

let graph = [];
let parent = Array(N + 1)
	.fill(0)
	.map((val, idx) => idx);

let rank = Array(N + 1);

input.map(x => {
	const [a, b, cost] = x.split(" ").map(Number);
	graph.push([a, b, cost]);
});

graph.sort((a, b) => a[2] - b[2]);

const find = x => {
	if (x != parent[x]) {
		parent[x] = find(parent[x]);
	}
	return parent[x];
};
