let distance = Number(prompt("Enter travel distance (in km):"));
alert("please enter an transport type into an small letter");
let transportType = prompt("Enter transport type (bus / train / flight)");

let farePerKm;

switch (transportType.toLowerCase()) {
  case "bus":
    farePerKm = 10;
    break;
  case "train":
    farePerKm = 5;
    break;
  case "flight":
    farePerKm = 50;
    break;
  default:
    farePerKm = 0;
    alert("Invalid transport type entered!");
}

let totalFare = distance * farePerKm;
alert("Total Fare: " + totalFare);