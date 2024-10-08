function solution(my_string, num1, num2) {
    let array = Array.from(my_string);
    array.splice(num1, 1, my_string[num2]); 
    array.splice(num2, 1, my_string[num1]);
    return array.join('');
}