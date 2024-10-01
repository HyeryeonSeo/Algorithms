function solution(rsp) {
    let winner = '';
    for (let e of rsp) {
        if (e == 2) {
             winner += 0; 
        } else if (e == 0) {
            winner += 5;            
        } else if (e == 5) {
            winner += 2;
        }
    }
    return winner;
}