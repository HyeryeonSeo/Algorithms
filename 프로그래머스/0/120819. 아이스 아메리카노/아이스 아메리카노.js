let solution = (money) => {
    let answer = [];
    
    let cup = Math.floor(money / 5500);
    answer.push(cup);
    
    let change = money - (cup * 5500);
    answer.push(change);
    
    return answer;
}