function calculator(a, b, operator) {
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '*') {
        return a * b;
    } else {
        return a / b;
    }
}


let a = 10, b = 20;
let operator = '-';
const result = calculator(a, b, operator);
console.log(result);