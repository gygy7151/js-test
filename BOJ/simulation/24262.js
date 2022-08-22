//- 알고리즘 수업
//-- 첫번째풀이
let input = require("fs").readFileSync("./test.txt").toString().split("\n");
input = Number(input);

if (input == input) {
    console.log(parseInt(input / input));
    console.log(0);
} else if (input == Math.pow(input, 2)) {
    console.log(parseInt(input / Math.pow(input, 2)));
    console.log(2);
} else if (input == Math.pow(input, 3)) {
    console.log(parseInt(input / Math.pow(input, 3)));
    console.log(3);
} else {
    console.log(4);
}
