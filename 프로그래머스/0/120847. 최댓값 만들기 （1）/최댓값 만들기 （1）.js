function solution(numbers) {
    numbers.sort((a, b) => a - b)
    let indexMax1 = numbers.length - 1;
    let indexMax2 = numbers.length - 2;
    return numbers[indexMax1] * numbers[indexMax2];  
    
}