// 방배정
// 첫번째풀이
let [NM, ...input] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n");

const [N, K] = NM.split(" ").map(Number);
let students = [];
for (let i = 0; i < 3; i++) {
	students.push(Array(7).fill(0));
} //0번째:여학생수, 1번째:남학생수

// 학년별로 성별에 따른 총 인원수를 구해주고
input.map(x => {
	let [gender, grade] = x.split(" ").map(Number);
	students[gender][grade] += 1;
});
// 최소방의 갯수
minRoomsCnt = 0;
// 각 인원수별로 K만큼 나눠서 minRoomCnt에 더해주고, 나머지가 0이 아니면minRoomCnt에 + 1 더해준다
students.map(x => {
	for (let j of x) {
		minRoomsCnt += Math.ceil(j / K);
	}
});

console.log(minRoomsCnt);
