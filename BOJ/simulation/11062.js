// 카드 게임
// 두번째풀이
let [T, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");

for(let i=0; i<input.length; i+=2){
	N = Number(input[i]);
	let cards = input[i+1].split(" ").map(Number);
	if(cards.length == 1){
		console.log(cards[0]);
	}else{
		while(cards.length)
		let [left, right] = [cards.shift(), cards.pop()] //GW, MW
		
	}
	



}


// 첫번째풀이 - 단순히 왼쪽 오른쪽중 더 큰값만 골라서 더하는 전략이 최선의 전략이 아님을 알게됨 -> 해당 전략은 틀린 접근임
// let [T, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");


// /**
//  * 각 턴마다 번갈아 가면서 가장 왼쪽 또는 오른쪽에 있는 카드를 가져갈 수 있다.
//  * 각 카드는 점수다.
//  */

// for(let i=0; i<input.length; i+=2){
// 	N = Number(input[i]);
// 	let cards = input[i+1].split(" ").map(Number);
// 	let score = [0, 0] //GW, MW
// 	const M = cards.length
// 	let who = 0
	
// 	while(cards.length > 0){
// 		// 갯수가 하나밖에 없는 경우
// 		if(M == 1){
// 			score[0] = cards[0];
// 			break;
// 		// 왼쪽값이 더 큰 경우
// 		}else if(cards[0] > cards[M-1]){
// 			score[who] += cards.shift();
// 		// 오른쪽값이 더 큰 경우
// 		}else{
// 			score[who] += cards.pop();
// 		}
// 		who == 0? who += 1 : who -= 1;
// 	}

// 	console.log(score[0]);
// }
