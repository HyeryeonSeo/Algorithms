function solution(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) { 
        // Math.sqrt(n) 범위, n +=2 로 반복문시간줄일 수 
        if (n % i === 0) num ++;
    }
    return num;
}