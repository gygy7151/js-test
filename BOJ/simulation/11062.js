// 카드 게임
// 세번째풀이 - input을 2줄이상 취해야 할때는 input길이 만큼 반복해주는 것이 중요하다! 기억하자.
let [T, ...input] = require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim().split("\n");

// 왼쪽끝 인덱스와 오른쪽 끝 인덱스 정보 및 근우 또는 명우 순서를 알려주는 player 정보를 파라미터로 받는 findMax()


for(let i=0; i<input.length; i += 2){
	const N = Number(input[i]);
	let card = input[i+1].split(" ").map(Number);
	// dp 배열 초기화
	let dp = [];
	for(let i=0; i<N; i++){
		dp.push(Array(N).fill(0));
	}

	const findMax = (idxL, idxR, player)=>{
		if(idxL > idxR) return 0;
		if(dp[idxL][idxR]) return dp[idxL][idxR];
	
		// 근우 차례
		if(player == true){
			let scoreG = Math.max(card[idxL] + findMax(idxL+1, idxR, false), card[idxR]+findMax(idxL, idxR-1, false))
			dp[idxL][idxR] = scoreG
			return scoreG
		// 명우 차례
		}else{
			let scoreG = Math.min(findMax(idxL+1, idxR, true), findMax(idxL, idxR-1, true));
			dp[idxL][idxR] = scoreG;
			return scoreG;
		}
	}
	findMax(0, N-1, true);
	console.log(dp[0][N-1]);

}

// 실수한 것
// - 왼쪽 카드를 빼주는 것은 idxL-1이 아니라 idxL+1임을 주의하자. 카드를 제외한것이지만 인덱스는 오른쪽으로 한칸 이동하는 것임.

// 두번째 풀이 - 파이썬참조
// def pickCard(turn, i, j):
//     if i > j: return 0
//     if dp[i][j]: return dp[i][j] #이미 계산된 적이 있으면 해당 값 리턴
    
//     #근우 차례
//     if turn:
//         # i카드 + (i+1~j)범위 카드의 명우 순서 or j카드 + (i~j-1)범위 카드의 명우 순서 중 최대 스코어
//         score = max(pickCard(False, i+1, j) + cards[i], pickCard(False, i, j-1) + cards[j]) 
//         dp[i][j] = score
//         return score
        
//     #명우 차례
//     elif not turn:
//         # (i+1~j)범위 카드의 근우 순서 or (i~j-1)범위 카드의 근우 순서 중 최소 스코어
//         # 각각 명우가 i, j 카드를 가져갔다고 가정하지만, 근우 입장의 점수를 계산하는 거기 때문에 카드 점수를 더해주지 않음
//         score = min(pickCard(True, i+1, j), pickCard(True, i, j-1))
//         dp[i][j] = score
//         return score

// import sys
// T = int(input()) #테스트케이스

// for _ in range(T):
//     N = int(input()) #카드 개수
//     cards = list(map(int, sys.stdin.readline().split()))
//     dp = [[0 for _ in range(N)] for _ in range(N)] #DP 배열 초기화
//     pickCard(True, 0, N-1) #카드가 (0~N-1)범위만큼 있고,  근우 순서일 때 얻는 점수 계산
//     print(dp[0][N-1])

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
