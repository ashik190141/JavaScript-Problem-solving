function roman_to_integer(roman_word) {
    let roman_word_lower = roman_word.toLowerCase();
    let ans = 0;
    for (let i = 0; i < roman_word_lower.length; i++){
        if (roman_word_lower[i] == 'i' && (i == 0 && (roman_word_lower[i + 1] == 'v' || roman_word_lower[i + 1] == 'x'))) {
            ans--;
        }
        else if (roman_word_lower[i] == 'i' && (i == 0 && (roman_word_lower[i + 1] == 'i'))) {
            ans++;
        }
        else if (roman_word_lower[i] == 'i' && roman_word_lower.length==1) {
            ans++;
        }
        else if (roman_word_lower[i] == 'i' && (i == (roman_word_lower.length)-1 && (roman_word_lower[i-1]=='v' || roman_word_lower[i-1]=='x'))) {
            ans++;
        }
        else if (roman_word_lower[i] == 'i' && (i == (roman_word_lower.length)-1 && (roman_word_lower[i-1]=='i'))) {
            ans++;
        }
        else if (roman_word_lower[i] =='i' && (roman_word_lower[i - 1] == 'i'||roman_word_lower[i - 1] == 'i')) {
            ans++;
        }
        else if (roman_word_lower[i] =='i' && (roman_word_lower[i - 1] == 'x'||roman_word_lower[i - 1] == 'v')) {
            ans++;
        }
        else if (roman_word_lower[i] == 'i' && (roman_word_lower[i + 1] == 'x'||roman_word_lower[i + 1] == 'v')) {
            ans--;
        }
        else if (roman_word_lower[i] == 'v') {
            ans += 5;
        }
        else {
            ans += 10;
        }
    }
    return ans;
}


let roman_word = 'I';
const result = roman_to_integer(roman_word);
console.log(result);