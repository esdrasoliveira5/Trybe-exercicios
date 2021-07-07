function convertGrade(grade) {
    if (grade >= 90 && grade < 100) {
        grade = "A";
   } else if (grade >= 80 && grade < 100) {
       grade = "B";
   } else if (grade >= 70 && grade < 100) {
       grade = "C";
   } else if (grade >= 60 && grade < 100) {
       grade = "D"
   } else if (grade >= 50 && grade < 100) {
       grade = "E"; 
   } else if (grade < 50) {
       grade = "F";
   } else {
       grade = "Erro"
   }
   
   return grade;
}

console.log(convertGrade(57));
