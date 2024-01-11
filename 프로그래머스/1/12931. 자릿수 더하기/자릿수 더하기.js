function solution(N) {
    let numStr = N.toString();
    let sum = 0;
    for (let x of numStr) {
        sum += Number(x);
    }
    return sum;
}