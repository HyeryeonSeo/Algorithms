function solution(arr, divisor) {
    const dividedArr = arr.filter(e => e % divisor === 0).sort((a, b) => a-b);
    return dividedArr.length == 0 ? [-1] : dividedArr ;
}