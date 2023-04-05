function solution(babbling) {
    var answer = 0;

    babbling.forEach(word => {
        if(check(word) === true) {
            answer += 1;
        }
    })
    return answer;
}

// 리턴해주는 값은 boolean
function check(word) {
    let temp = ''
    let origin = word.split("");

    while (origin.length > 1) {
        if (origin.slice(0,3).join('') === 'aya' || origin.slice(0,3).join('') === 'woo') {
            if (origin.slice(0,3).join('') !== temp) {
                temp = origin.splice(0,3)
            } else {
                return false
            }

        } else if (origin.slice(0,2).join('') === 'ye' || origin.slice(0,2).join('') === 'ma') {
            if (origin.slice(0,2).join('') !== temp) {
                temp = origin.splice(0,2)
            } else {
                return false
            }
        } else {
            return false
        }

    }

    return true

}