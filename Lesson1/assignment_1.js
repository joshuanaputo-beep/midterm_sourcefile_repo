let score = [85, 72, 91, 64, 78];

let total = 0;
let passed = 0;
let failed = 0;

let highest = [0];
let lowest = [100]; 

console.log("Students Scores:");

for(let j = 0; j < score.length; j++) {
    console.log(score[j]);
}

console.log();

for(let i = 0; i < score.length; i++) {

    let grade;

    if(score[i] >= 90 && score <= 100) {
        grade = ("Excellent - Passed");
    } else if(score[i] >= 80) {
        grade = ("Very Good - Passed");
    } else if(score[i] >= 75) {
        grade = ("Good - Passed");
    } else {
        grade = ("Failed");
    }

    total += score[i];


    if(score[i] > highest) {
        highest = score[i];
    }
    
    if(score[i] < lowest) {
        lowest = score[i];
    }

    if(score[i] >= 75) {
        passed++;
    } else{
        failed++;
    }
    
    console.log("Student " + (i+1) + ": " + score[i] + " - " + grade);


}

console.log();
let avg = total/score.length;
console.log("Total Score: " + total);
console.log("Average Score: " + avg);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
