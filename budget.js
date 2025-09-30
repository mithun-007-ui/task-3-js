let income = Number(prompt("Enter your monthly income:"));

let rent = Number(prompt("Enter your Rent:"));
let groceries = Number(prompt("Enter your Groceries:"));
let transport = Number(prompt("Enter your Transport:"));

let totalExpenses = rent + groceries + transport;
let remainingBalance = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;

if(totalExpenses > income){
  alert( "You are overspending!");}
else{
alert( "You are within budget.");}

alert(
  "Total Expenses: " + totalExpenses +
  "\nRemaining Balance: " + remainingBalance +
  "\nPercentage Spent: " + percentageSpent.toFixed(2) + "%" 
 );