// Prompt Input student marks
const marks = marks ("student marks ( 0 to 100):");
// Convert the input to a number
const marksNumber = Number(marks);
// Confirm the grade based on the marks given
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
//To get the Output of the grade
console.log("Grade:", grade);

//on the terminal run node index1.js


