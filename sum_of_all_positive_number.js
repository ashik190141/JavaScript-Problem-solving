function add_positive_no(arr, sum = 0) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let arr = [2, -5, 10, -3, 7];
const result = add_positive_no(arr);
console.log(result);