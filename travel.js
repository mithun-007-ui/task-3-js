let distance = Number(prompt("Enter travel distance (in km):"));
alert("please enter an transport type");
let transportType = prompt("Enter transport type (bus / train / flight/sea)");
let fare;
switch (transportType) {
  case "bus":
    fare = 10;
    break;
  case "train":
    fare = 5;
    break;
  case "flight":
    fare = 50;
    break;
    case "sea":
    fare = 100;
    break;
  default:
    fare = 0;
    alert("Invalid transport type!");
}
let total = distance * fare;
alert("Total Fare:" + total);