// 도시분할계획
// 여섯번째 - readFileSync에 두번째 파라미터 "utf8"을 추가했고, trim()으로 감싸줬다. toString()은 빼고- 그랬더니 맞았다
// 다섯번째 - 크루스칼 알고리즘 적용, let .. of 문법활용, 싸이클 없애주기 위한 -maxCost, 40,42번코드 idx추가
let [NM, ...input] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n");

const [N, M] = NM.split(" ").map(Number);

let graph = [];

input.map(x => {
	const [a, b, cost] = x.split(" ").map(Number);
	graph.push([a, b, cost]);
});

const find_parent = (parent, x) => {
	if (parent[x] != x) {
		parent[x] = find_parent(parent, parent[x]);
	}
	return parent[x];
};

const union_parent = (parent, a, b) => {
	a = find_parent(parent, a);
	b = find_parent(parent, b);

	if (a < b) {
		parent[b] = a;
	} else {
		parent[a] = b;
	}
};

let answer = 0;
let maxCost = 0;
let edges = new Array(M); // 모든 간선을 담을 배열, 크기: 간선의 개수
let parent = new Array(N + 1).fill(0).map((x, idx) => idx); //자기자신으로 초기화

// idx 추가함
graph.forEach((x, idx) => {
	edges[idx] = [x[2], x[0], x[1]];
});

// 비용을 기준으로 오름차순 정렬
edges.sort((a, b) => a[0] - b[0]);

// 와..of문법이 있었구낭
for (let edge of edges) {
	let [cost, a, b] = edge;

	if (find_parent(parent, a) != find_parent(parent, b)) {
		union_parent(parent, a, b);
		answer += cost;
		maxCost = cost;
		// 이미 정렬을 했기 때문에 맨 마지막에 들어오는 cost가 제일 비용이 큰 간선이다.
		// 굳이 maxCost = Math.max(maxCost, cost); 노필요.
	}
}

console.log(answer - maxCost); //트리 끝을 나누어 주기 위해서 맨마지막 요소는 빼준다.(싸이클 없애주기 위함)
