 function startQuiz() {  
      let name = prompt("Enter your Name:");
      let email = prompt("Enter your Email:");
      let age = parseInt(prompt("Enter your Age:"));

      if (!name && !email &&age && age < 12) {
        alert("Invalid input! Age must be 12 or above, all fields required.");
        return;
      }
      let q1 = parseInt(prompt("Q1: 2+2=? \n1. 3\n2. 4\n3. 5\nEnter option number:"));
      if (q1 === 0) score++;

      let q2 = parseInt(prompt("Q2: 5*3=? \n1. 15\n2. 20\n3. 10\nEnter option number:"));
      if (q2 === 1) score++;

      let q3 = parseInt(prompt("Q3: 10-6=? \n1. 2\n2. 4\n3. 6\nEnter option number:"));
      if (q3 === 2) 
      score++;
      let percentage = (score/3)*100;
      let grade = (percentage>=80)?"A" :
                  (percentage>=60)?"B" :
                  (percentage>=40)?"C" : "D";
      let resultData= {
      name: name,
      email: email,
      age: age,
      result: {
      score: score,
      percentage: percentage,
      grade: grade,
        }
};
      alert("Name: " + name +"\nEmail: " + email +"\nAge: " + age +"\nScore: " + score + "\nPercentage: " + percentage.toFixed(2) + "%" +"\nGrade: " + grade +"\nJSON Data:\n" + JSON.stringify(resultData, null, 2)
      );

      console.log("Result JSON:", resultData);
        }