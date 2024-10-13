function solution(cipher, code) {
    let arr = cipher.split('');
    let answer = '';
    for (let i = code-1; i <= arr.length-1; i+=code) {
        answer += arr[i];
    }
    return answer;
}