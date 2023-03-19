// 치킨 두마리 (...)
const [balance, chickenPrice] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const totalBalance = Number(balance.split(" ").map(Number).reduce((a,b) => a + b).toString());

if (totalBalance >= (2 * chickenPrice)){
    console.log(totalBalance - (2 * chickenPrice))
}else {
    console.log(totalBalance)
};

