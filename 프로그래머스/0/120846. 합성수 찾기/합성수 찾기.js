function solution(n) { 
    let cnPlusNum = n >= 91 ? 3 : n >= 77 ? 2 : n >= 49 ? 1 : 0;
    let cnNum = parseInt(n / 2) - 1;   // 4부터(2만 제외) n까지의 짝수 개수 세기
    for (let i = 9; i <= n; i+=2) { // 9부터, 홀수 중에서만 체크
        if (i % 3 == 0 || i % 5 == 0) cnPlusNum += 1; // 3의 배수거나 5의 배수면 합성수로 추가
    }
    return n <= 3 ? 0 : n < 9 ? cnNum : cnNum + cnPlusNum;
}