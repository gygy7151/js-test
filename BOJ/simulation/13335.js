/*트럭*/
/*첫번째풀이*/
let input = require("fs").readFileSync("test.txt").toString().split("\n");

const condition = input[0].split(" ").map(function (e) {
    return Number(e);
});
const n = condition[0];
const w = condition[1];
const l = condition[2];

let bridge = [];
for (let i = 0; i < w; i++) {
    bridge.push(0);
}

let trucks = input[1].split(" ").map(e => {
    return Number(e);
});

let weight = 0;
let time = 0;

while (true) {
    const out = bridge.shift();
    weight -= out;

    if (trucks.length != 0) {
        if (trucks[0] + weight <= l) {
            bridge.push(trucks[0]);
            weight += trucks[0];
            /*아..맨뒤의 요소를 추출하는 실수를 범함pop이 아니라 shift임 */
            trucks.shift();
        } else {
            bridge.push(0);
        }
    }

    time++;

    if (bridge.length == 0) {
        break;
    }
}

console.log(time);
