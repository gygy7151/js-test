// 나이트의 이동
// 첫번째 풀이
// [ 접근방법 ]
// 테스트 케이스 만큼 현재 있는 칸에서 나이트가 이동하려는 칸으로 bfs를 돌린다.
// 나이트의 이동 dir
// [[-2,-1], [-1,-2] ,[1,-2], [2,-1], [-2,1], [-1,2], [1,2], [2,1]] //  x, y

let [T, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");
const dir = [[-2,-1], [-1,-2] ,[1,-2], [2,-1], [-2,1], [-1,2], [1,2], [2,1]];
let answer = [];
for(let i=0; i<T; i++){
  let [boardSize, startPos, endPos] = input.splice(0, T);
  let N = Number(boardSize);
  let graph = Array.from(Array(N), () => Array(N).fill(0));
  let [sy, sx] = startPos.split(" ").map(Number);
  let [ey, ex] = endPos.split(" ").map(Number);
  graph[sy][sx] = 'S';
  graph[ey][ex] = 'E';
  
  let q = [];
  q.push([sy, sx]);
  while(q.length > 0){
    const [x, y] = q.shift();
    dir.map((data)=> {
      const [dx, dy] = data;
      const [ny, nx] = [y+dy, x+dx]; 
      if(ny >= 0 && nx >= 0 && ny < N && nx < N){
        if(graph[ny][nx] == 0){
          graph[ny][nx] = graph[y][x] + 1;
          q.push([ny, ny])
        }else if(graph[ny][nx] == 'E'){
          graph[ny][nx] = -1;
          answer.push(graph[y][x]);
        }
      }
    })
  }
}
console.log(answer.join("\n"));
