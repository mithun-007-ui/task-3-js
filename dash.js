let student = "mithun";
let password = "7290";
let city ="coimbatore"; 

let student_check = prompt("Student Name:");
let password_check = prompt("Enter Password:");
let city_check = prompt("Enter City:");

if (student_check.toLowerCase() === student && password_check === password && city_check.toLowerCase() === city) {
    
    alert(" Welcome!");
    let birthyear = parseInt(prompt("Enter your Birth Year:"));
    let date = new Date();
    let year = date.getFullYear();
    let age = year - birthyear;
    alert("Your Age is: " + age);
    if (age >= 18) {
        alert("You are Eligible ");
    } else {
        alert("You are Not Eligible ");
    }
    let time = date.getHours();
    if (time < 12) {
        alert("Good Morning ");
    } else if (time < 12 && time <= 16) {
        alert("Good Afternoon ");
    } else {
        alert("Good Evening ");
    }
    let num1 = parseInt(prompt("Enter first number:"));
    let mathematical = prompt("Enter a mathematical operation (+, -, *, /):");
    let num2 = parseInt(prompt("Enter another number:"));
    let result;

    if (mathematical === "+") {
        result = num1 + num2;
    } else if (mathematical === "-") {
        result = num1 - num2;
    } else if (mathematical === "*") {
        result = num1 * num2;
    } else if (mathematical === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operation";
    }
    alert("Answer: " + result);
    alert("Happiness is the key to success.");
   let student_json = {
        name: student_check,
        password: password_check,
        city: city_check,
        birthyear: birthyear,
        age: age,
        eligibility: age >= 18 ? "Eligible" : "Not Eligible"
    };
    alert("Info:\n" + JSON.stringify(student_json,));

} else {
    alert(" Invalid Credentials!");
}

