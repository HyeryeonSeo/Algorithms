function solution(sides) {
    let longest = sides.sort((a, b) => a-b)[2];
    return longest < sides[0] + sides[1] ? 1 : 2;
}