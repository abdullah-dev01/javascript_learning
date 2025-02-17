// day_1
// Boolean Data Type & Comparison Operators**
//    - Watch Video #12.
//    - Practice: Write code to compare different values using 
//         `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
//    - Example: Compare numbers, strings, and boolean values.

// `==` vs `===`

// `==` checks for value equality (ignoring type)
// `===` checks for both value and type equality


let x = 10;
let y = "10";
let z = true;

console.log("See difference between == and ===");
console.log(x == y); // Output: true
console.log(x === y); // Output: false

console.log("See difference between != and !==");
console.log(x != y); // Output: false
console.log(x !== y); // Output: true

console.log("See difference between >, <, >=, and <=");
console.log(x > y); // Output: false
console.log(x < y); // Output: false
console.log(x >= y); // Output: false
console.log(x <= y); // Output: false

// these `>`, `<`, `>=`, `<=` does not work with string and boolean

console.log("See difference between >, <, >=, and <=");
x = 7;
y = 8;

console.log(x > y); // Output: false
console.log(x < y); // Output: false
console.log(x >= y); // Output: false
console.log(x <= y); // Output: false
