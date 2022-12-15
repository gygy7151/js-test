// 큐2
// 두번째풀이 - class와 switch활용
// shift()는 O[N]을 가지지만, push()나 pop()은 O[1]을 가짐
// 우선순위 큐를 사용하면 deque에서 shift()를 사용해야 하므로 데이터가 2백만개인 경우 계산이 2억회를 넘게되서 사용 못함.

class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(item){
        const node = new Node(item)
        if(this.head === null){
            this.head = node;
            this.head.next = null;
            
        }else{
            this.tail.next = node;
        }
        
        this.tail = node;
        this.length += 1;
    }
    
    pop(){
        if(this.empty() == 1) return -1;
        const popItem = this.head; // head는 노드임
        this.head = this.head.next;
        this.length -= 1;
        return popItem.item;
    }
    
    size(){
        return this.length;
    }
    
    empty(){
        if(this.length == 0){
            return 1;
        }else{
            return 0;
        }
    }
    
    front(){
        if(this.empty() == 1) return -1;
        return this.head.item;
    }
    
    back(){
        if(this.empty() == 1) return -1;
        return this.tail.item;
    }
}

let [N, ...input] = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");
N = Number(N);
let queue = new Queue();
let answer = [];
input.map(x=>{
    const [action, num] = x.split(" ");
    switch(action){
        case 'push':
            queue.push(Number(num));
            break;
        
        case 'pop':
            answer.push(queue.pop());
            break;

        case 'size':
            answer.push(queue.size());
            break;

        case 'empty':
            answer.push(queue.empty());
            break;

        case 'front':
            answer.push(queue.front());
            break;

        case 'back':
            answer.push(queue.back());
            break;

    }
})

console.log(answer.join("\n"))



// 새롭게 알게된 것
// - ES6 문법 Class
// - 객체는 자바스크립트의 기본 자료 구조로써, 객체 속성값과 메서드를 가질 수 있다.
// - 객체 이터럴을 통해 객체를 생성하는 템플릿이 바로 class문법이다.

// 첫번째풀이-shift는 O(N)이라서 시간복잡도 큰 차이가 난다..
// 다른 문제풀이를 살펴보니 queue를 아예 클래스로 구현하는 방법이 존재했다.
// let input = require("fs").readFileSync("./test.txt", "utf-8").toString().trim().split("\n");

// N = Number(input.shift());
// let A = [];
// input.map(x => {
//     const [order, num] = x.split(" ");
//     if(order == 'push'){
//         A.push(Number(num));
//     }else if(order == 'pop'){
//         if(l)
//         console.log(A.shift());
//     }
// })
