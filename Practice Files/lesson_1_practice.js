//Print
// console.log("hello world")

// values
/* let score = 90;
score = 100;
const hatdog = "Juan";
console.log(score);
console.log(hatdog); */

//Type of values
/* let age = 20;
let price = 20.99
let student = "Juan"
let passed = true;
console.log(typeof age);
console.log(typeof student); */

//Testing
/* let number = 10;
console.log(number);
console.log("Testing..."); */

//arithmetic fucntions
/* let a = 10
let b = 20
console.log(a + b);
console.log(a % b);
console.log(a < b) */

//comparison
/* console.log(5 == "5");
console.log(5 === 5); */

//Conditions
/* let num = 10;
if(num > 0 ) {
    console.log("Positive");
} else {
    console.log("False");
} */
//Conditions ternary
/* let age = 20;
let verification = age >= 18
    ? "Adult"
: "Minor";
console.log(verification); */

//Switch
/* let day = 1;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Other Day"); break;
} */

//For loop
/* for(let i = 1; i < 10; i*=2) {
    console.log(i);
} */

//While Loop
/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;
} */

//Do While Loop(executes first before checking the condition)
/* let x = 0;
do {
    console.log(x);
    x++;
} while(x < 10); */

//Functions
/* function sum(a, b){
    return a + b;
}
let result = sum(10, 20);
console.log(result);
console.log(sum(15,20)); */

//Object grouping related informations
/* let student = {
    name: "Joshua",
    age: 19,
    section: "BSIT DA 2-1"
};
console.log(student.name);
 */

// Classes
/* class Student{
    // properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    display() {
        console.log(this.name + this.age);
        //Template Literals
        console.log(`Name is: ${this.name}, and the Age is: ${this.age}`)
    }
}
let stud1 = new Student("Joshua", 19);
let stud2 = new Student("Maria", 25);
stud1.display();
stud2.display(); */

//Arrow Functions
/* // function sum(a, b){
//     return a + b;
// }
const sum = (a, b) => a + b; 

let result = sum(10, 20);
console.log(result);
console.log(sum(15,20)); */

//Default Parameters
/* const multiply = (number, multiplier = 5) => number * multiplier;
console.log(multiply(20)); */

//Spread and rest
/* let numbers = [2, 6, 7];
const sum = (...values) => values[0] + values[1] + values[2];
console.log(sum(...numbers)); */

//Destructing array into single variable
/* const colors = ["red", "Blue", "Yellow"];
const [primary, secondary, tertiary] = colors;

console.log(`The three colors are ${primary}, ${secondary}, and lasty ${tertiary}`)
 */

//Classes and Inheritance
/* class Person{
    // properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    display() {
        // console.log(this.name + this.age);
        //Template Literals
        console.log(`Name is: ${this.name}, and the Age is: ${this.age}`)
    }
}
let stud1 = new Person("Joshua", 19);
let stud2 = new Person("Maria", 25);
stud1.display();
stud2.display();

class Employee extends Person {}

let Itmanager = new Employee("Mark", 20);
Itmanager.display(); */
