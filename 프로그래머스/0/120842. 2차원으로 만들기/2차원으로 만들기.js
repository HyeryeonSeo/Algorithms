function solution(num_list, n) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < num_list.length; i++) {
        arr2.push(num_list[i]);
        if (arr2.length == n) {
            arr1.push(arr2);
            arr2 = []; // 초기화 
        }
    }
    
    return arr1;
}