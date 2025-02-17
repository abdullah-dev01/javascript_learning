// 1.
// Boolean Data Type & Comparison Operators**

let x = 10;
let y = "10";
let z = true;

console.log("== vs ===");
console.log(x == y); // Output: true
console.log(x === y); // Output: false

console.log(">, <, >=, <=");
console.log(x > y); // Output: false
console.log(x < y); // Output: false
console.log(x >= y); // Output: false
console.log(x <= y); // Output: false


// 2.
// Logical Operators
//    - Watch Video #13.
//    - Practice: Use `&&`, `||`, and `!` to create logical conditions.
//    - Example: Check if a number is between 10 and 20 using logical operators.

// Use `&&`, `||`, and `!` 

// 3.
//    - Watch Video #14.
//    - Practice: Write programs using `if`, `else` to make decisions.
//    - Example: Create a program to check if a user is eligible to vote.




if (x > 10 && x < 20) {
    console.log("x is between 10 and 20");
}else if (x > 10 || x < 20) {
    console.log("x is either greater than 10 or less than 20");
}else if( !z) {
    console.log("x is not true");
}


// 4. 
//    - Watch Video #15.
//    - Practice: Use multiple conditions with `if-else if-else`.
//    - Example: Write a program to assign grades based on marks.

let marks = 90;

if (marks >= 80 && marks <= 100) {
    console.log("Grade A");
}else if (marks >= 60 && marks <= 79) {
    console.log("Grade B");
}else if (marks >= 40 && marks <= 59) {
    console.log("Grade C");
}else {
    console.log("Grade D");
}


// 5. 
//    - Watch Video #16.
//    - Practice: Build a simple ATM withdrawal system using `if-else`.
//    - Example: Check balance, withdraw money, and display remaining balance.

let balance = 1000;

function withDraw(amount){
    if(amount > balance){
        console.log("Insufficient balance");
    }else{
        balance -= amount;
        console.log("Remaining balance:", balance);
    }
}

withDraw(500);

// 6.
//    - Watch Video #17.
//    - Practice: Experiment with `null` and `undefined` values.
//    - Example: Create variables and check their types.

let a = null;
let b = undefined;
let c = "abc"
console.log(typeof a); // Output: object
console.log(typeof b); // Output: undefined
console.log(typeof c);

//  7.
//    - Revise all topics from Week 1.
//    - Solve small problems combining all concepts learned so far.
//    - Example: Create a program to calculate simple interest.

// formula to calculate simple interest is (p * r * t) / 100
// p = principal amount, r = rate of interest, t = time
function calculateInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}

let principal = 1000;
let rate = 10;
let time = 2;

let simpleInterest = calculateInterest(principal, rate, time);
console.log("Simple Interest:", simpleInterest);