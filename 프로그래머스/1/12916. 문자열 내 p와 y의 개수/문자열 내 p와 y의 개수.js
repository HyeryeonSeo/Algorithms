function solution(s){
    let pArr = s.match(/p/gi);
    let yArr = s.match(/y/gi);
    let pNum = pArr == null ? 0 : pArr.length;
    let yNum = yArr == null ? 0 : yArr.length;
    return pNum == yNum ? true : false;
}