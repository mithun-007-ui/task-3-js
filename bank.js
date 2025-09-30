let pin = prompt("Enter your PIN:");
let correctPin = "1234"; 
let balance = 1000; 

if (pin === correctPin) {
   
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
    
        let amount = parseInt(prompt("Enter amount to withdraw:"));
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Insufficient balance or invalid amount!");
        }
    } else if (choice === "2") {
        
        let amount = parseInt(prompt("Enter amount to deposit:"));
        if (amount > 0) {
            balance += amount;
            alert("Deposit successful! New balance: " + balance);
        } else {
            alert("Invalid amount!");
        }
    } else if (choice === "3") {
    
        alert("Your current balance is: " + balance);
    } else {
        alert("Invalid choice!");
    }
}
 else {
    alert("Incorrect PIN!");}