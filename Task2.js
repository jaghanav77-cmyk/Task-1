let students = [
 {id: 1, name: "Naveen", mark: 85, course: "MERN"},
 {id: 2, name: "John", mark: 45, course: "Python"},
 {id: 3, name: "Priya", mark: 72, course: "Java"},
 {id: 4, name: "Arun", mark: 95, course: "React"}
];

// Task 1: All Students
console.log("Task 1: All Students");
students.forEach(student => {
    console.log(`${student.id} ${student.name} ${student.mark} ${student.course}`);
});

// Task 2: Pass / Fail
console.log("Task 2: Pass / Fail");
students.forEach(student => {
    let status = student.mark >= 50 ? "Pass" : "Fail";
    console.log(`${student.name} - ${status}`);
});

// Task 3: Grade System
console.log("Task 3: Grade System");
students.forEach(student => {
    let grade;
    if (student.mark >= 90) grade = "A Grade";
    else if (student.mark >= 75) grade = "B Grade";
    else if (student.mark >= 50) grade = "C Grade";
    else grade = "Fail";
    console.log(`${student.name} - ${grade}`);
});

// Task 4: Topper Student
console.log("Task 4: Topper Student");
let topper = students.reduce((max, student) => student.mark > max.mark ? student : max);
console.log(`Topper is ${topper.name} - ${topper.mark}`);

// Task 5: Course Search
console.log("Task 5: Course Search");
let searchResult = students.filter(student => student.course === "React");
searchResult.forEach(s => console.log(`${s.id} ${s.name} ${s.mark} ${s.course}`));

// Task 6: Add New Student
console.log("Task 6: Add New Student");
students.push({id: 5, name: "Rahul", mark: 88, course: "Node JS"});
students.forEach(student => {
    console.log(`${student.id} ${student.name} ${student.mark} ${student.course}`);
});

// Task 7: Attendance System
console.log("Task 7: Attendance System");
let status = "present"; 

switch (status) {
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
    default:
        console.log("Invalid Status");
}
// Task 8: Login System
console.log(" Task 8: Login System");
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}

    