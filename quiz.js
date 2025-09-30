alert("lets start a quiz...");
let score=0;
let quiz=prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch(quiz){
    case "2":
        score++;
        break;

}
let q2 = prompt("Q2: What is the capital of India?\n1. New Delhi\n2. Mumbai\n3. Kolkata");
switch (q2) {
  case "1":
    score++;
    break;
}
let q3 = prompt("Q3: Which is the largest planet?\n1. Earth\n2. Jupiter\n3. Mars");
switch (q3) {
  case "2":
    score++;
    break;
}
alert("Your Final Score: " + score + "/3");