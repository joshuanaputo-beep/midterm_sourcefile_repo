class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
    let total = 0;

    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }

    return total / this.scores.length;
  }

  getLetterGrade() {
    const average = this.getAverage();
    let grade;

    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    return grade;
  }
}

function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  let classTotal = 0;
  let topStudentName = "";
  let topAverage = 0;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = student.getAverage();
    const letterGrade = student.getLetterGrade();

    console.log(`${student.name} - Average: ${average.toFixed(1)} | Grade: ${letterGrade}`);

    classTotal += average;

    if (average > topAverage) {
      topAverage = average;
      topStudentName = student.name;
    }
  }

  const classAverage = classTotal / students.length;

  console.log("-----------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudentName} with ${topAverage.toFixed(1)}`);
}

const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];








const students = studentData.map(data => new Student(data.name, data.scores));

analyzeClass(students);