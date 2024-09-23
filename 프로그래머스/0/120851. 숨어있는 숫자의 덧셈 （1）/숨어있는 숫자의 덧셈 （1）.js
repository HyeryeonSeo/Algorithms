function solution(my_string) {
    let num = 0;
    [...my_string].forEach(e => {
        Number(e);
        num = e;
     });
//        Number.isInteger(e) ? num += e : ''
    return num;
}