function solution(n, numlist) {
    // filter 는 새 배열을 리턴 (안 콜백함수, 한 줄이면 {return..}필요x)
    // + splice 는 인덱스로 제거할때
    return numlist.filter(num => num % n === 0);
}