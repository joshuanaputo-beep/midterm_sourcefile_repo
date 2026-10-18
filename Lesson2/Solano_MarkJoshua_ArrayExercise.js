'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// Use a for loop and the length property to display every index, name, and score.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith and her score at the end of both arrays using push().
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron and his score at the beginning of both arrays using unshift().
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Display the updated arrays and the new number of students.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first student (Aaron) from both arrays using shift().
studentNames.shift();
studentScores.shift();

// Remove the last student (Faith) from both arrays using pop().
studentNames.pop();
studentScores.pop();

// Find Daniel's index using indexOf() before removing him.
const danielIndex = studentNames.indexOf('Daniel');

// Remove Daniel and his score using splice().
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Insert Grace and her score at index 2 using splice().
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Display the resulting arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

// Calculate the total score using reduce().
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

// Calculate the average score.
const averageScore = totalScore / studentScores.length;

// Find the highest and lowest scores using a loop.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

// Display all statistics.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

// Use filter() to obtain only the passing scores.
const passingScores = studentScores.filter(score => score >= passingScore);

// Use map() to produce a Passed or Failed status for every score.
const passFailStatus = studentScores.map(score => (score >= passingScore ? 'Passed' : 'Failed'));

// Use some() to check whether at least one student failed.
const atLeastOneFailed = studentScores.some(score => score < passingScore);

// Use every() to check whether all students passed.
const allStudentsPassed = studentScores.every(score => score >= passingScore);

// Display all results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', passFailStatus);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

console.log('\nPART F: SORT AND SEARCH');

// Copy the scores using Array.from() so the original array is not changed.
const sortedScoresCopy = Array.from(studentScores);

// Sort the copy from highest to lowest using a numeric comparison function.
sortedScoresCopy.sort((a, b) => b - a);

// Search the original studentScores array for the score 91.
const hasScore91 = studentScores.includes(91);
const indexOfScore91 = studentScores.indexOf(91);

// Display the results.
console.log('Scores from Highest to Lowest:', sortedScoresCopy);
console.log('Contains 91:', hasScore91);
console.log('Index of 91:', indexOfScore91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Use nested loops to display every score and calculate each row's average.
for (let row = 0; row < activityScores.length; row++) {
  let rowTotal = 0;

  for (let col = 0; col < activityScores[row].length; col++) {
    console.log(`Row: ${row}, Column: ${col}: ${activityScores[row][col]}`);
    rowTotal += activityScores[row][col];
  }

  // Store each student's activity average in activityAverages.
  const rowAverage = rowTotal / activityScores[row].length;
  activityAverages.push(rowAverage);

  console.log(`${originalNames[row]}'s activity average: ${rowAverage.toFixed(2)}`);
}

// Display the resulting array of averages.
console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

// Use join() to display all current student names separated by " | ".
console.log('Students:', studentNames.join(' | '));