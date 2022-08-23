// Viva la Diferencia

// - 첫번째풀이

function sol() {
    let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

    input.forEach(a => {
        let data = a.split(" ").map(x => Number(x));

        let reducer = (accumulator, curr) => accumulator + curr;

        const N = data.reduce(reducer);

        if (N == 0) {
            return;
        }
        let answer = 0;

        while (data[0] != data[1] || data[1] != data[2] || data[2] != data[3]) {
            answer++;
            const A = Math.abs(data[0] - data[1]);
            const B = Math.abs(data[1] - data[2]);
            const C = Math.abs(data[2] - data[3]);
            const D = Math.abs(data[0] - data[3]);
            data[0] = A;
            data[1] = B;
            data[2] = C;
            data[3] = D;
        }

        console.log(answer);
    });
}

sol();
