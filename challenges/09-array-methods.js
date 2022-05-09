// have access to students from data.js

const updatedSudents = students.map((student) => {
  student["role"] = "student";
  return student;
});
//console.log(updatedSudents);

const highScores = students.filter((student) => student.score >= 80);

console.log(highScores);

const specificId = students.find((student) => student.id === 3);
//console.log(specificId);

console.log("students", students);

const totalScore = students.reduce((acc, student) => {
  console.log(acc);
  return acc + student.score;
}, 0);
const averageScore = totalScore / students.length;
console.log(averageScore);

const survey = students.reduce((acc, student) => {
  console.log("acc", acc);
  console.log("student", student);
  acc[student.favoriteSubject]
    ? acc[student.favoriteSubject]++
    : (acc[student.favoriteSubject] = 1);
  return acc;
}, {});

console.log("survey", survey);
