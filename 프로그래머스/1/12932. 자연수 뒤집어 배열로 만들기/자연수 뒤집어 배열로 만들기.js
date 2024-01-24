function solution(n) {
    const str = String(n); // 숫자 -> 문자열
    const mapfn = (arg) => Number(arg) // element를 문자열->정수로 바꿔주는 mapfn 정의
    const preArr = Array.from(str, mapfn); // 문자열 -> 배열(정수가 원소인)
    const newArr = [];
    for(let i = preArr.length-1; i >= 0; i--) {
        newArr.push(preArr[i]);
    }
     return newArr;
}