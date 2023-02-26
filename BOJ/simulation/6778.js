/*트럭*/
/*번째풀이*/
const [antennas, eyes] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map(Number);

// 안테나 3개이상 눈이 4개이하 TroyMartian
// 안테나 6개이하 눈이 2개이상 VladSaturnian
// 안테나 2개이하 눈이 3개이하 GraemeMercurian
// 나머지 ''

const getConfirmation = (antennas, eyes) => {
	let answer = [];
	if (antennas >= 3 && eyes <= 4) {
		answer.push("TroyMartian");
	}

	if (antennas <= 6 && eyes >= 2) {
		answer.push("VladSaturnian");
	}

	if (antennas <= 2 && eyes <= 3) {
		answer.push("GraemeMercurian");
	}
	return answer.join("\n");
};

if (antennas >= 0 && eyes >= 0) {
	console.log(getConfirmation(antennas, eyes));
} else {
	console.log("");
}
