// 한글
const index = Number(
	require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
);

const hangule = {
	top: "ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ".split(
		", "
	),
	mid: "ㅏ, ㅐ, ㅑ, ㅒ, ㅓ, ㅔ, ㅕ ㅖ, ㅗ, ㅘ, ㅙ, ㅚ, ㅛ, ㅜ, ㅝ, ㅞ, ㅟ, ㅠ, ㅡ, ㅢ, ㅣ".split(
		", "
	),
	bottom:
		"ㄱ, ㄲ, ㄳ, ㄴ, ㄵ, ㄶ, ㄷ, ㄹ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅁ, ㅂ, ㅄ, ㅅ, ㅆ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ".split(
			", "
		),
};

// const findChar = index => {
// 	let target = 1;
// 	for (let i = 0; i < 19; i++) {
// 		for (let j = 0; j < 21; j++) {
// 			for (let k = 0; k < 28; k++) {
// 				const char = hangule.top[i] + hangule.mid[j] + hangule.bottom[k];
// 				if (target === index) {
// 					console.log(
// 						String.fromCharCode(parseInt(char.charCodeAt(0).toString(16), 16))
// 					);
// 					return;
// 				}
// 				target += 1;
// 			}
// 		}
// 	}
// };
const findChar = index => {
	return String.fromCharCode(index + 44031);
};
console.log(findChar(index));
