let fs = requre("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = Number(input); i > 0; i--) {
  console.log("*".repeat(i));
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = Number(input); i >= 1; i--) {
  console.log("*".repeat(i));
}

/*첫도전 08.09.22 */
