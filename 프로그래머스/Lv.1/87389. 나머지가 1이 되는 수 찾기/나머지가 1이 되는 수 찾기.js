function solution(n) {
    for(let x =1; x < n; x++) {
        if(n % x == 1) { 
            // x=1부터 for문을 돌리며 확인하므로, 가장 작은 x가 먼저 if문 조건에 걸리게 되어있다
            // 바로 x를 답으로 리턴
            return x; 
            break; // 최소 자연수만 리턴하고 멈추기
        }
    }
}