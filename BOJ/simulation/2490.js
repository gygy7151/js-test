// 방번호
// - 첫번째풀이
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < 3; i++) {
    let roundOfGame = input[i].split(" ").map(x => Number(x));
    let back = 0;
    let front = 0;
    roundOfGame.forEach(x => {
        if (x == 0) {
            back += 1;
        } else {
            front += 1;
        }
    });

    if (back == 1 && front == 3) {
        console.log("A");
    } else if (back == 2 && front == 2) {
        console.log("B");
    } else if (back == 3 && front == 1) {
        console.log("C");
    } else if (back == 4) {
        console.log("D");
    } else if (front == 4) {
        console.log("E");
    }
}
