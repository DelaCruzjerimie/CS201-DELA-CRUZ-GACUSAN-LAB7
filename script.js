//1. Create a variable name password & store p@ssw0rd@2023
//2. If password length is greater or equal to password.includes ("p@ssword")
//3. console.log (valid password)
//4. Else, console.log (invalid password)

//Do this code with an if else statement along with the use of .length and .includes

let password = "p@ssw0rd@2023";

if (password.length >= 8 && password.includes("p@ssword")) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}