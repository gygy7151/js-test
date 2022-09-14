// 문자열길이
// - 첫번째풀이
console.log(
	require("fs").readFileSync("./test.txt").toString().split("\n")[0].split("")
		.length
);
