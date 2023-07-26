function random_password_generator(allChars, len, string_len) {
    let random_password = "";
    for (let i = 0; i < len; i++){
        let random_index = Math.floor(Math.random() * string_len);
        random_password += allChars[random_index];
    }
    return random_password;
}


let allChars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*()_+-={}|[]\:<>?,./";
let len = 12, string_len = allChars.length;
const result = random_password_generator(allChars, len, string_len);
console.log(result);