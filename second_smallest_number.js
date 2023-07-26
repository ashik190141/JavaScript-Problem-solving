function second_smallest(arr) {
    let sort_array = arr.sort();
    let first_smallest_number = sort_array[0];
    for (let i = 0; i < arr.length; i++){
        if (sort_array[i] != first_smallest_number) {
            return sort_array[i];
        }
    }
}

arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = second_smallest(arr);
console.log(result);