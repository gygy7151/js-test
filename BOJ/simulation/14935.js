// FA
let N = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()

while (N.length > 1) {
	const length = N.length;
	const firstDigit = Number(N[0]);
	N = String(firstDigit * length);
}

if(N.length === 1){
	console.log('FA');
}


