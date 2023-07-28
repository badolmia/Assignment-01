// Create a function called "calculateGrade" that takes a student's
// score as input and returns the corresponding grade using the following scale:

// 90 or above: 'A'
// 80 to 89: 'B'
// 70 to 79: 'C'
// 60 to 69: 'D'
// Below 60: 'F'

function calculateGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
      break;
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    case score >= 0 && score < 60:
      grade = "F";
      break;

    default:
      grade = "Invalid score!";
      break;
  }

  return grade;
}
var res = calculateGrade(102);
console.log("\n" + res + "\n");
