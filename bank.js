let pin = prompt("PIN:");
let enterpin = "7290"; 
let balance = 1000000000; 

if (pin === enterpin) {
   
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
    
        let amount = parseInt(prompt("withdraw amount:"));
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
            alert("Deposited successful! New balance:"+ balance);
        } else {
            alert("Invalid amount!");
        }
    } else if (choice === "3") {
    
        alert("Your balance:" + balance);
    } else {
        alert("Invalid choice!");
    }
}
 else {
    alert("Worng PIN!");}