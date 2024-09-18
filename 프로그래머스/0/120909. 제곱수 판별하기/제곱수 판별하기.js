function solution(n) {
    let answer = 2;
    for (let i = 1; i <= 1000; i++) {
        if (i ** 2 == n) {
            answer = 1;
        }
    }
    return answer;
}