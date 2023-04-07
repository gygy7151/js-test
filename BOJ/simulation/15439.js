// Vera and Outfits
const N = Number(require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim())

if (N === 1) {
	console.log(0)
} else {
	console.log((N-1) * (N))
}