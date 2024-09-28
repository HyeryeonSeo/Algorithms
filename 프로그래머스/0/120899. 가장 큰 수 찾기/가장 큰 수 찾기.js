function solution(array) {
    let maxNum = Math.max(...array); // Math.max([...array])라고 하면 안됨!!
    let maxIndex = array.indexOf(maxNum);
    return [maxNum, maxIndex];
}