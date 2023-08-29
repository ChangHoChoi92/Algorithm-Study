// https://school.programmers.co.kr/learn/courses/30/lessons/120863
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
    var answer = [];
    let arr = polynomial.split(' + ');
    console.log(arr);

    // arr 값에서 x가 포함된 배열을 map으로 x는 1로 변경해주고 reduce를 이용하여 그 배열을 더 해줘서 상수로 만들어준다.
    let xArr = arr.filter(v => v.includes('x'))
        .map(v => parseInt(v.replace('x', '')) || 1)
        .reduce((a, c) => a + c, 0);

    // arr 값에서 x가 포함되지 않는 숫자를 뽑아서 reduce를 이용해서 더해서 상수로 만들어 준다.
    let numArr = arr.filter(v => !v.includes('x'))
        .reduce((a, c) => a + parseInt(c), 0);
    console.log(xArr);
    console.log(numArr);

    if (xArr) {
        if (xArr === 1) {
            answer.push('x');
        } else {
            answer.push(`${xArr}x`);
        }
    }

    if (numArr) {
        answer.push(numArr);
    }


    return console.log(answer.join(' + '));
}


solution("3x + 7 + x");