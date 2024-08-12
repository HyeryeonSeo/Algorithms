function solution(n) {
    let piece = 6;
    
    while (piece <= 6*n) { 
        if (piece % n === 0) {
            break;
        }
        piece += 6;
    }
    
    return piece / 6;
}