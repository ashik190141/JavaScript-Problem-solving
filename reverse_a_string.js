
function reverse(input) {
    original_string = input;
    let reverse_string='';
    for (let i = original_string.length - 1; i >= 0; i--){
        reverse_string = reverse_string + original_string[i];
    }
    return reverse_string;
}

let input = "Hello World";
const result = reverse(input);
console.log(result);