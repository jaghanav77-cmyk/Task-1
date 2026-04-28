// Task 1: Student Form
function studentForm(name, age, course) {
    console.log("Name :-",name);
    console.log("Age :-",age);
    console.log("Course :-",course);
}
studentForm("Jaghanav", 22, "FS");

// Task 2: Calculator Function
 function calc(a,b,c){
    console.log(a+b+c); //19
    console.log(a-b-c); //1
    console.log(a*b*c); //200
 }
 calc(10,5,4)

// Task 3: Reusable Greeting
function welcome(name){
    console.log(`Hi ${name}`);
}
welcome("Jaghanav");
welcome("Jahanav");
welcome("Jaggy");

// Task 4: Return Value
function square(num){
    return num*num;
}
console.log(square(5)); // 25

// Task 5: Scope Check
function scopeCheck() {
    let secret = "javascript";
}
//console.log(secret); 

/* EXPLANATION: 
  ReferenceError: secret is not defined.
  Why? Variables declared with 'let' inside a function have 'Function Scope'. 
  They only exist within the curly braces of that function and are inaccessible from outside.
*/

// Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];
let combined = [...boys, ...girls]; // Spread operator expands the arrays
console.log(combined);

// Task 7: Unlimited Numbers (Rest Parameter)
function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(10, 20, 30, 40)); // 100

// Task 8: Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);

// Task 9: Object Destructuring
let emp = { name: "Jaghanav", role: "Developer", salary: "5LPA" };
let { name, role } = emp;
console.log(name, role);

// Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    return "Try again";
}

const getOffer = offerGenerator();
console.log(getOffer.next().value); // 10%
console.log(getOffer.next().value); // 20%
console.log(getOffer.next().value); // 50%
console.log(getOffer.next().value); // Try again
console.log(getOffer.next().done ? "No more offers" : ""); // No more offers

// Task 11: Curry Function
const add = (a) => (b) => (c) => a + b + c;
console.log(add(10)(20)(30)); // 60

// Task 12: Student Marks Analyzer
function marks1(...nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let avg = total / nums.length;
    console.log(`Total = ${total}`);
    console.log(`Average = ${avg}`);
}
marks1(80, 90, 70, 60);

/**
 * Employee Registration System
 * @param {string} name - The name of the employee
 * @param {string} role - Job designation
 * @param {...string} skills - A 'rest parameter' to collect multiple skills into an array
 */
function register(name, role, ...skills) {
    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    
    // .join(" ") converts the skills array into a single string separated by spaces
    console.log(`Skills: ${skills.join(" ")}`);
}

// Execution:
register("Jaghanav", "FullStack", "HTML", "CSS", "JS", "React","JAVA","mysql");

/* EXPLANATION:
  1. We use the 'Rest Parameter' (...skills) because we don't know how many 
     skills a user might enter. It captures everything after 'role' into an array.
  2. Template literals (``) are used for clean string formatting.
  3. The join() method ensures the output looks like a professional list rather 
     than a raw array format.
*/