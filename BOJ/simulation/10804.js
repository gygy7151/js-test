/*카드역배치*/

/*두번째 (선배님풀이)
 */
var x = [];
for (var i = 1; i <= 20; ++i) {
    x.push(i);
}
require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(function (e) {
        return e.split(" ").map(function (e) {
            return parseInt(e);
        });
    })
    .forEach(function (e) {
        var a = x.splice(e[0] - 1, e[1] - e[0] + 1);
        a.forEach(function (f) {
            x.splice(e[0] - 1, 0, f);
        });
    });
console.log(x.join(" "));

/*첫번째풀이*/
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let cards = [];
for (let i = 0; i < 21; i++) {
    cards.push(i);
}

for (let i = 0; i < 10; i++) {
    division = input[i].split(" ").map(x => {
        return Number(x);
    });

    let temp = cards.slice(division[0], division[1] + 1).reverse();

    j = 0;
    for (let i = division[0]; i < division[1] + 1; i++) {
        cards[i] = temp[j];
        j++;
    }
}
console.log(cards.slice(1).join(" "));
