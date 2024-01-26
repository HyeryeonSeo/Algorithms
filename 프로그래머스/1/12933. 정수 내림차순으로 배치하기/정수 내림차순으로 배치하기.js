function solution(n) {
    const str = String(n); // 숫자->문자열
    const mapfn = (arg) => Number(arg);// 배열로 만들때, 배열원소들을 숫자화시켜줄 mapfn 정의
    const numArr = Array.from(str, mapfn);
    // 문자열->배열(Array.from메서드) & 원소를 숫자화(mapfn)
    
    const descArr = numArr.sort((a,b) => b-a); //numArr 숫자 원소들을 내림차순으로 정렬
    const descStr = descArr.join(''); //내림차순된배열(descArr)의 원소들을 하나의 문자열로
    return (Number(descStr)); //문자열->숫자
    
    
    
    
}