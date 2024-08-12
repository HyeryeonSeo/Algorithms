function solution(n) {
    let pizNum = 6;
    
    while (pizNum <= 6*n) { // 이 조건이 맞는 한 계속 반복
        if (pizNum % 6 === 0 && pizNum % n === 0) {
            break;
        }
        pizNum++;
    }
    
    return pizNum/6;
}