function solution(n) { // 숫자 한자리씩 떼려면? 배열로?
    // Array.from 사용하려면 먼저 유사배열객체-문자열로 바꿔야
    // Array.from(String(n)) : 알아서 ["1", "2",..] 문자하나씩 분리되어 배열화 
    // split는 수에 x 문자열에 쓰는 메서드
    // map 은 새배열 반환, forEach() 메소드는 그냥 배열 반복문(동작수행)일뿐. 반환값도 X, 기존배열수정도 X
    // forEach 안에서 재할당해도 안바뀜 array.forEach((e) => e = Number(e));
    // for문으로 배열 원소 하나씩 변경 가능
    let array = Array.from(String(n));
    let sum = 0;
    for (let i = 0; i <= array.length-1; i++) {
       sum += Number(array[i]);
    }
    return sum;
}