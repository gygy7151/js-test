// Sounds Fishing!
const signals = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

function isDecreasing() {
	for (let i = 0; i < 3; i++) {
		if (signals[i + 1] >= signals[i]) {
			console.log("No Fish");
			return;
		}
	}
	console.log("Fish Diving");
}

function isIncreasing() {
	for (let i = 0; i < 3; i++) {
		if (signals[i + 1] <= signals[i]) {
			console.log("No Fish");
			return;
		}
	}
	console.log("Fish Rising");
}

if (signals[0] === signals.reduce((a, b) => a + b) / 4) {
	console.log("Fish At Constant Depth");
} else if (signals[0] > signals.slice(-1)) {
	isDecreasing();
} else {
	isIncreasing();
}
