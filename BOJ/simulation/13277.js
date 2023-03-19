const nums = require("fs").readFileSync("./test.txt").toString().trim().split(" ").map(BigInt);
console.log((nums[0] * nums[1]).toString());

