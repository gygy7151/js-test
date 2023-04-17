// Winning Score
const scores = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
const [totalA, totalB] = [
    scores.slice(0, 3).map((val, idx) => val * (3-idx)).reduce((a,b) => a+b), 
    scores.slice(3, 6).map((val, idx) => val * (3-idx)).reduce((a,b) => a+b)
]

if (totalA > totalB) {
    console.log('A')
} else if (totalA < totalB) {
    console.log('B')
} else {
    console.log('T')
}