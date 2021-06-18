const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let password = "";

console.log('Welcome to this password validator tool.');
reader.question("Please input a 10 letter or digit password: ", function(input){
    password = input;

    if(password.length >= 10){
        console.log("Successfully inputted a valid password.");
    } else {
        console.log("Unfortunately that password is not 10 digits or more.");
    }
    reader.close()
})
