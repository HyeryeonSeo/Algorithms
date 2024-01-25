function solution(n) {
    let answer = 0;
     for(let x = 1; x <= n; x++) { 
         if ( n / x == x) {
            return (x+1)**2;
        } else {
            answer = -1;        
        } 
    }
    return answer;
} 
