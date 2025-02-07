// Here's a structured plan to cover these topics in three days:  

// ---

// ## **JavaScript Basics in 3 Days**  

// ### **Day 1: Data Types and Variables**  
// 📌 **Topics:**  
// - What is Data?  
// - Data Types in JavaScript  
//   - **Primitive Data Types:** String, Number, Boolean, Undefined, Null, Symbol, BigInt  => check day 2
//   - **Non-Primitive Data Types:** Object, Array, Function, Date, RegExp, Map  
// 2. Non-Primitive Data Types
// These types hold references to values rather than storing data directly. They can contain multiple values.

// Type        | Description                                     | Example
// ----------- | -----------------------------------------------|---------------------------------------------
// Object      | Key-value pairs storing structured data       | { name: "Alice", age: 25 }
// Array       | Ordered list of values                        | ["apple", "banana", "cherry"]
// Function    | Block of reusable code                        | function greet() { console.log("Hello"); }
// Date        | Stores and manipulates dates and time         | new Date("2025-02-07")
// RegExp      | Defines patterns for text matching            | /hello/i
// Map         | Key-value pairs allowing any data type as keys| new Map([["name", "Alice"], ["age", 25]])

// 1. Object (Key-Value Pairs)
// - Objects store data in key-value pairs.
// - Keys are always strings, and values can be any data type.
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
  };
  console.log(person.name); // Output: Alice
  
  // 2. Array (Ordered Collection)
  // - Arrays store multiple values in an ordered way.
  let fruits = ["Apple", "Banana", "Cherry"];
  console.log(fruits[1]); // Output: Banana
  
  // 3. Function (Reusable Code Blocks)
  // - Functions perform specific tasks and can return values.
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Output: Hello, Alice!
  
  // 4. Date (Working with Time and Dates)
  // - The Date object allows manipulation of time-related values.
  let currentDate = new Date();
  console.log(currentDate.toDateString()); // Example Output: Fri Feb 07 2025
  
  // 5. RegExp (Regular Expressions)
  // - Used for pattern matching in strings.
  let pattern = /hello/i; // Case-insensitive match for "hello"
  console.log(pattern.test("Hello, world!")); // Output: true
  
  // 6. Map (Key-Value Pairs with Any Data Type as Keys)
  // - Unlike objects, Maps can have non-string keys.
  let userMap = new Map();
  userMap.set(1, "Alice");
  userMap.set("role", "Admin");
  console.log(userMap.get(1)); // Output: Alice
  
  // Summary:
  // - Objects store structured data with key-value pairs.
  // - Arrays hold ordered collections of values.
  // - Functions allow reusable logic execution.
  // - Date objects handle time-related data.
  // - Regular expressions define search patterns.
  // - Maps allow flexible key-value pair storage.
  
// - How to Declare Variables in JavaScript  
//   - `var`, `let`, and `const`  
// - **String Data Type in JavaScript**  
// - **Number Data Type in JavaScript**  
// - **Practice Questions:**  
//   ✅ Add Two Integers and Store in a Third Variable  
//   ✅ Multiply Two Decimal Numbers  
//   ✅ Swap Values of Two Variables  
//   ✅ Swap Values of Three Variables  














// ---

// ### **Day 2: Operators & Control Flow**  
// 📌 **Topics:**  
// - **Arithmetic Operators in JavaScript**  
//   - `+`, `-`, `*`, `/`, `%`, `++`, `--`  
// - **Boolean Data Type & Comparison Operators**  
//   - `<, >, <=, >=, ==, ===, !=, !==`  
// - **Logical Operators in JavaScript**  
//   - `&&` (AND), `||` (OR), `!` (NOT)  
// - **Practice Questions:**  
//   ✅ Convert Feet to Meters & Meters to Kilometers  
//   ✅ Convert Celsius to Fahrenheit & Fahrenheit to Celsius  
//   ✅ Calculate Area of Circle, Square, and Rectangle  
//   ✅ Convert Days to Years and Weeks  

// ---

// ### **Day 3: Conditional Statements & Real-world Problems**  
// 📌 **Topics:**  
// - **If-Else Statements in JavaScript**  
// - **If-Else If-Else Statements**  
// - **Practice Problems:**  
//   ✅ Grade Calculator  
//   ✅ Traffic Light Simulation  
//   ✅ Age-Based Ticket Pricing  
//   ✅ Shopping Discount Calculator  
//   ✅ Shipping Cost Calculator  
//   ✅ Restaurant Tip Calculator  
//   ✅ Simple ATM Withdrawal  

// ---

// This plan ensures you cover **all fundamental concepts** while practicing with **real-world problems**. 🚀  
// Would you like any additional examples or explanations on any of these topics? 😊