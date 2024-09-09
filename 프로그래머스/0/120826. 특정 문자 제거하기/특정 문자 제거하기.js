function solution(my_string, letter) {
    let answer = my_string.includes(letter) ? my_string.replaceAll(letter,"") : my_string;
    return answer;
}