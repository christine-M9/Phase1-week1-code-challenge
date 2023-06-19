// Prompt Input student marks;
const marks = marks("student marks(0 t0 100:");


 //defining marksGrade
const marksGrade = Number(marks);
let grade;
     if (marksGrade > 79 && marksGrade <=100) {
  grade = "A";
}

      else if (marksGrade >= 60 && marksGrade <= 79) {
    grade = "B";
  }

      else if (marksGrade >= 50 && marksGrade <= 59) {
    grade = "C";
  }

     else if (marksGrade >= 40 && marksGrade <= 49) {
    grade = "D";
  } 

      else if (marksGrade >= 0 && marksGrade <=39 ) {
    grade = "E";
  }


  else   { 
      grade = "Invalid marks"; }
    

//Output of the grade
console.log( grade);



//on the terminal run node index1.js


