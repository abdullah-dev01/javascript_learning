// 3. How to Declare Variables in JavaScript
// JavaScript provides three ways to declare variables: var, let, and const.

// 1. var (Old way, avoid using it)
// - Function-scoped (accessible inside the function where declared)
// - Can be re-declared and updated
// - Hoisted with an undefined value
var x = 10;
x = 20; // Allowed
console.log(x); // Output: 20

// 2. let (Modern way, preferred)
// - Block-scoped (accessible only inside the block where declared)
// - Cannot be re-declared within the same scope
// - Hoisted but not initialized (Temporal Dead Zone)
let y = 15;
y = 25; // Allowed
console.log(y); // Output: 25

// => see example 1.1 at last

// 3. const (For constant values)
// - Block-scoped like let
// - Cannot be reassigned after initialization
const z = 30;
// z = 40; // Error: Assignment to constant variable
console.log(z); // Output: 30

// Summary:
// - Prefer `let` and `const` over `var` in modern JavaScript.
// - Use `const` when the value should not change.

// 4. String Data Type in JavaScript
// - Strings are sequences of characters enclosed in quotes.
let firstName = "Alice";
let lastName = 'Johnson';
let fullName = `Hello, my name is ${firstName} ${lastName}.`;
console.log(fullName); // Output: Hello, my name is Alice Johnson.

// - String Methods
console.log(firstName.length); // Output: 5
console.log(firstName.toUpperCase()); // Output: ALICE
console.log(lastName.toLowerCase()); // Output: johnson
console.log(firstName.concat(" ", lastName)); // Output: Alice Johnson
console.log(firstName.charAt(1)); // Output: l
console.log("  Trim Me  ".trim()); // Output: Trim Me

// 5. Number Data Type in JavaScript
// - JavaScript has a single Number type for integers and decimals.
let integer = 42;
let decimal = 3.14;
let scientific = 1e5; // Equivalent to 100000
console.log(integer, decimal, scientific); // Output: 42 3.14 100000

// - Math Operations
console.log(Math.round(4.7)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(25)); // Output: 5
console.log(Math.random()); // Output: Random number between 0 and 1

// 6. Practice Questions

// ✅ Add Two Integers and Store in a Third Variable
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("Sum:", sum); // Output: Sum: 15

// ✅ Multiply Two Decimal Numbers
let decimal1 = 2.5, decimal2 = 3.5;
let product = decimal1 * decimal2;
console.log("Product:", product); // Output: Product: 8.75

// ✅ Swap Values of Two Variables
let a = 1, b = 2;
[a, b] = [b, a]; // Using array destructuring
console.log("After swap: a =", a, ", b =", b); // Output: After swap: a = 2 , b = 1

// ✅ Swap Values of Three Variables
let p = 3, q = 4, r = 5;
[p, q, r] = [q, r, p]; // Rotating values
console.log("After swap: p =", p, ", q =", q, ", r =", r); // Output: After swap: p = 4 , q = 5 , r = 3

// Summary:
// - Strings store text and support various operations like concatenation and case changes.
// - Numbers include integers and decimals, with built-in math functions.
// - Practice problems reinforce basic JavaScript operations.




// Example 1.1
function testScope() {
    if (true) {
        var a = 10; // var is function-scoped
        let b = 20; // let is block-scoped
    }
    
    console.log(a); // ✅ Works because var is function-scoped
    console.log(b); // ❌ Error: b is not defined (because let is block-scoped)
}

testScope();
// Output: 10
