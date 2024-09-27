function solution(my_string) {
    let upper = my_string.toUpperCase().split('');
    let my_stringArr = my_string.split('');
    
    for (let i = 0; i <= my_string.length-1; i++) {
//         upper[i].toLowerCase()
        if (my_stringArr[i] == upper[i]) {
            my_stringArr.splice(i,1,upper[i].toLowerCase());
            // split쓰면 문자열 _> 배열로 나온다 (그냥은 문자열이라 // splice 못씀
        } else {
            my_stringArr.splice(i,1,upper[i].toUpperCase());
        }
    }
    // .toString() 이나 그냥 join()만 쓰면 "C,c,.. "이렇게 ,컴마까지 나옴
    return  my_stringArr.join(''); 
}