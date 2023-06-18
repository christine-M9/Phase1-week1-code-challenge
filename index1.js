// Prompt Input student marks;
const marks = marks ("student marks ( 0 to 100):");
const marksNumber = Number(marks); //defining marksNumber

let grade;
     if (marksNumber > 79) {
  grade = "A";
}

      else if (marksNumber >= 60 && marksNumber <= 79) {
    grade = "B";
  }

      else if (marksNumber >= 50 && marksNumber <= 59) {
    grade = "C";
  }

     else if (marksNumber >= 40 && marksNumber <= 49) {
    grade = "D";
  } 

      else {
    grade = "E";
  }

//Output of the grade
     console.log("Grade:", grade);

//on the terminal run node index1.js


