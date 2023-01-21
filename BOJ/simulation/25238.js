// 가희와 방어율 무시
const [monster, user] = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

// 유저의 체감 방어율 수치 계산
// 체감 방어율이 100보다 크거나 같은지 확인
// 데미지 줄 수 있으면 1 nor 0 리턴

// Math.floor가 애초에 정수값만 반환하도록 되어 있으므로 사용하면 안됨.
const protectionRatio = monster - Number((monster / 100).toFixed(2)) * user;
console.log(protectionRatio >= 100 ? 0 : 1);
