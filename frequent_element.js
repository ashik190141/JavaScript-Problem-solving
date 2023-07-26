function frequent_element(arr) {
    let sort_array = arr.sort();
    let last_element = sort_array[sort_array.length-1];
    let count_array = [];
    for (let i = 0; i < last_element; i++){
        count_array[i] = 0;
    }
    for (let i = 0; i < arr.length; i++){
        let k = arr[i];
        count_array[k - 1]++;
    }
    let max = Math.max(...count_array);
    for (let i = 0; i < count_array.length; i++){
        if (count_array[i] == max) {
            let ans = i + 1;
            return ans;;
        }
    }
} 


arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = frequent_element(arr);
console.log(result);