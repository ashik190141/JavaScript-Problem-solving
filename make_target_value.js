function make_target_value(arr, target) {
    let target_array = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] == target) {
                target_array[0] = i;
                target_array[1] = j;
                return target_array;
            }
        }
    }
}

let arr = [1, 3, 6, 8, 11, 15];
let target = 9;
const result = make_target_value(arr, target);
console.log(result);