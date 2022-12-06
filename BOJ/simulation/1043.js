// 거짓말
// 세번째풀이
let [NM, ...PartyPeople] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n");

const [N, M] = NM.split(" ").map(Number);
let trues = new Set(PartyPeople.shift().split(" "));
let party = [];
let cnt = [];

PartyPeople.map(x => {
	const data = new Set(x.split(" ").map(Number).splice(1));
	if (data) {
		party.push(data);
		cnt.push(1);
	}
});

for (let i = 0; i < M; i++) {
	party.map((people, idx) => {
		if (trues & people) {
			cnt[i] = 0;
			trues |= people;
		}
	});
}

console.log(cnt.reduce((a, b) => a + b));

// 두번째풀이 - 틀림
// let [NM, ...PartyPeople] = require("fs")
// 	.readFileSync("/dev/stdin", "utf8")
// 	.trim()
// 	.split("\n");

// const [N, M] = NM.split(" ").map(Number);
// const [TrueKnowCnt, ...TrueKnowMan] = PartyPeople.shift().split(" ");
// // 진실을 아는 사람 번호가 담긴 배열 T
// let T = {};
// // 모든 사람들은 초기엔 진실을 모른다로 초기화
// for (let i = 1; i <= N; i++) {
// 	T[i] = false;
// }
// TrueKnowMan.map(x => {
// 	T[x] = true;
// });

// let answer = 0;
// PartyPeople.map(x => {
// 	const [PeopleNumberTotal, ...PeopleNumberToCome] = x.split(" ").map(Number);
// 	let sayTruth = false;

// 	// 한명이라도 진실을 아는 사람이 있는지 탐색
// 	for (let i = 0; i < PeopleNumberTotal; i++) {
// 		const people = PeopleNumberToCome[i];
// 		if (T[people] == true) {
// 			sayTruth = true;
// 		}
// 	}
// 	// 진실을 말해야 하는 경우
// 	if (sayTruth == true) {
// 		PeopleNumberToCome.map(x => {
// 			if (T[x] == false) {
// 				T[x] = true;
// 				answer -= 1;
// 			}
// 		});
// 	} else {
// 		// 과장된 이야기를 말할 수 있는 경우
// 		answer += 1;
// 	}
// });

// console.log(answer < 0 ? 0 : answer);
