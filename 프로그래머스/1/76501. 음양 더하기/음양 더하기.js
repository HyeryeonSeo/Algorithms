function solution(absolutes, signs) {
    let answerSum = 0;
     for (let i = 0; i < absolutes.length; i++) {  
        answerSum += signs[i] == true ? absolutes[i] : absolutes[i] * -1
     }
    return answerSum;
}