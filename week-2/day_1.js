// 1. Boolean Data Type & Comparison Operators
let x = 10;
let y = "10";

console.log(x == y); // Output: true
console.log(x === y); // Output: false

// 2. Logical Operators
if (x > 10 && x < 20) {
  console.log("x is between 10 and 20");
}

// 3. If-Else Statements
let marks = 90;
if (marks >= 80 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade B");
} else if (marks >= 40 && marks <= 59) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// 4. Simple ATM System
let balance = 1000;
function withdraw(amount) {
  if (amount > balance) {
    console.log("Insufficient balance");
  } else {
    balance -= amount;
    console.log("Remaining balance:", balance);
  }
}
withdraw(500);

// 5. Null & Undefined
let a = null;
let b = undefined;
console.log(typeof a); // Output: object
console.log(typeof b); // Output: undefined

// 6. Simple Interest
function calculateInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}
let principal = 1000;
let rate = 10;
let time = 2;
let simpleInterest = calculateInterest(principal, rate, time);
console.log("Simple Interest:", simpleInterest);

