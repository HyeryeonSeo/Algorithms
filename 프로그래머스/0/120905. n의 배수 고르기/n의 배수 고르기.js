function solution(n, numlist) {
    // filter 는 새 배열을 리턴 , splice 는 인덱스로 제거
    return numlist.filter(e => {
        return e%n == 0
    })
}