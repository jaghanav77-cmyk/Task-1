// LEVEL 1 (Basic)
// Task 1: Array Basics
let arr = [10, 20, 30, 40, 50];
console.log(arr[0],arr[arr.length-1],arr.length); //First  Element- 10; Last Element-50; Array length-5;


// Task 2: Push & Pop
let arr1 = [1,2,3];
console.log(arr1.push(4));
console.log(arr1.push(5));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);


// Task 3: Includes Check
let arr3 = ["html","css","javascript","react"];
console.log(arr3.includes("javascript"));

// LEVEL 2 (Intermediate)
// Task 4: Filter Salaries
 let emp1 = [
   {name:"A", salary:10000},
   {name:"B", salary:50000},
   {name:"C", salary:30000}
 ];

let salary1= emp1.filter((c,i,t)=>{

    return c.salary > 20000
})

console.log(salary1);

// Task 5: Map Names

let Names= emp1.map((c,i,t)=>{
    return c.name;
})
console.log(Names);

// Task 6: Reduce Sum

let Totsalary= emp1.reduce((acc,c,i,t)=>{
    return acc + c.salary;

},0)
console.log(Totsalary); // Total salary - 90000

// LEVEL 3 (Logic Building)
// Task 7: Remove Duplicates

let arr4 = [1,2,2,3,4,4,5];
let noduplicate= [...new Set(arr4)]
console.log(noduplicate);

// Task 8: Find Largest Number
// let arr5 = [10, 200, 5, 90];
// 1. Define the array
let arr5 = [10, 200, 5, 90];

// We start by assuming the first number in the array is the largest.
let largest = arr5[0];

// 3. Loop through every number (element) in the array
for (let num of arr5) {
    // 4. Check if the current number is bigger than our current value
    if (num > largest) {
        // 5. If it is, update 'largest' to be this new, bigger number
        largest = num; // O/P-200;
    }
}

//  Task 9: Reverse String WITHOUT reverse()

// 1. Define the initial string
let i = "hello";

// 2. Create an empty string to hold the reversed result
let reversed = "";

// 3. Start a loop at the last index of the string and move backwards to 0
for (let index = i.length - 1; index >= 0; index--) {
    // 4. Take the character at the current index and add it to our new string
    reversed += i[index];
}

// 5. Output the result
console.log(reversed); // "olleh"

// LEVEL 4 (Advanced Thinking)
// Task 10: Group by Salary

let emp3 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp3.reduce((acc, current) => {
  // 1. Get the salary of the current employee
  let s = current.salary;
  // 2. If this salary key doesn't exist in our object yet, create an empty array for it
  if (!acc[s]) acc[s] = [];
  // 3. Push the employee's name into that salary's array
  acc[s].push(current.name);
  // 4. Return the object for the next iteration
  return acc;
}, {}); // Starting with an empty object {}

console.log(grouped);
// Output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }

// Task 11: Flatten Array (without flat)

let arr = [1, [2, [3, [4]]]];

function flatten(data) {
  let result = [];
  // 1. Loop through every item in the array
  data.forEach(item => {
    // 2. If the item is an array, flatten it further (recursion)
    if (Array.isArray(item)) {
      result.push(...flatten(item)); 
    } else {
      // 3. If it's just a number, push it to our result
      result.push(item);
    }
  });
  return result;
}

console.log(flatten(arr)); // [1, 2, 3, 4]

// Output: [1,2,3,4]

// Task 12: Custom Sort (Descending)

let arr7= [5, 2, 9, 1];

// b - a sorts from largest to smallest
// a - b would sort from smallest to largest
arr7.sort((a, b) => b - a);

console.log(arr7); // [9, 5, 2, 1]
// Output: [9,5,2,1]

//  BONUS (Interview Level 🔥)
// Task 13: Find Second Largest
let arr = [10, 50, 20, 40];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    // 1. If current is bigger than largest, the old largest becomes second
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    // 2. If current is bigger than second but smaller than largest, update second
    secondLargest = num;
  }
}

console.log(secondLargest); // 40

//  Output: 40
// Task 14: Count Characters
let str = "aabbccdde";
let counts = {};

// 1. Convert string to array of characters and loop
for (let char of str) {
  // 2. If the character exists in the object, add 1. 
  // If it doesn't, set it to 1.
  counts[char] = (counts[char] || 0) + 1;
}

console.log(counts); // {a:2, b:2, c:2, d:2, e:1}

//  Output:
// {a:2, b:2, c:2, d:2, e:1}







