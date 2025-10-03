let student = "mithun";
let password = 7290;
let city ="Coimbatore";

let student_check = prompt("Student Name:");
let password_check = prompt("Enter Password:");
let city_check = prompt("Enter City:");
    if (student_check == "mithun" && password_check == 7290 && city_check == "coimbatore") {
    alert("Welcome!");
    let birthyear = prompt("Enter your DOB:");
    let date=new Date();
    let year=date.getFullYear();
    let age=year-birthyear;
    alert("Your Age is: " + age);
    if (age >= 18) {
        alert("You are eligible");
} 
     if (age < 18) {
        alert("You are not eligible");
    }

            let time=date.getHours();
        if (time<12){
            alert("good morning!");
        }else if(time>=12 && time <=16){
            alert("Good afternoon!");
        }else{
            alert("Good evening!");
        }
        let num1 = parseInt(prompt("enter any number for mathematical operation"));
        let mathematical = prompt("enter a mathematical operation (+, -, *, /)");
        let num2 = parseInt(prompt("enter another number"));
        if (math === "+") {
            alert ("Answer: "+(num1+num2));
        } else if (math === "-") {
            alert ("Answer: "+(num1-num2));
        } else if (math === "*") {
            alert ("Answer: "+(num1*num2));
        } else if (math === "/") {
            alert ("Answer: "+(num1/num2));
        } else {
            alert ("Invalid operation");
        }
        alert ("Happiness is the key to success.");

        let student_json = {
            name: student_check,
            password: password_check,
            city: city_check,
            birthyear: birthyear,
            age: age,
            eligibility: age >= 18 ? "Eligible" : "Not Eligible"
        };
        alert("Info :\n" + JSON.stringify(student_json, null, 2));
} else {
    throw "Invalid Credentials";
}