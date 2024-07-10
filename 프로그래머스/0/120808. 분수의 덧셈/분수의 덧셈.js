function solution(numer1, denom1, numer2, denom2) {
    let sumNumer = numer1*denom2 + numer2*denom1;
    let sumDenom = denom1*denom2;
    
     /* 분자, 분모의 최대공약수 구하기 */
    let gcd= 1;
    for(let i=2; i<=Math.min(sumNumer, sumDenom); i++){
        if(sumNumer % i === 0 && sumDenom % i === 0){
            gcd = i;
        }
     }
         
    var answer = [sumNumer/gcd, sumDenom/gcd];
    return answer;
}