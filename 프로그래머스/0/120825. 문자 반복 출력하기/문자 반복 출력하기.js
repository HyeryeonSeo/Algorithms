function solution(my_string, n) {
    let repeatedArray = [];
    my_string.split("").forEach(c => {
        let repeated = c.repeat(n);
        repeatedArray.push(repeated);
    })
    // return toString(repeatedArray); 이렇게 쓰면안됨 그냥 join() 안됨.
    // join 안쓰면 hhh,eee, .. 콤마찍힘
    return repeatedArray.join("").toString();
}