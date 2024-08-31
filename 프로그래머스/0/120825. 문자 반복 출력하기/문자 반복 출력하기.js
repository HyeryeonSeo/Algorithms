function solution(my_string, n) {
    let repeatedArray = [];
    my_string.split("").forEach(c => {
        let repeated = c.repeat(n);
        repeatedArray.push(repeated);
    })
    return repeatedArray.join("").toString();
}