function solution(order) {
    let answer = 0; 
    String(order).split('').forEach(n => n % 3 == 0 && n != 0 ? answer += 1 : '');
    return answer;
}