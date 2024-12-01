function solution(absolutes, signs) {
    // for 반복문 - 이중 할 필요없음. 인덱스 i 로 같이 공유하면 되니까
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum += signs[i] === true ? absolutes[i] : absolutes[i]*(-1)
    }
     return sum;
}