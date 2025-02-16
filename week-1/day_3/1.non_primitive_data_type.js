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
  console.log(person.name); // Output: Aliceweek-1/day_3/non_primitive_data_type.js

  // 2. Array (Ordered Collection)
  // - Arrays store multiple values in an ordered way.
  let fruits = ["Apple", "Banana", "Cherry"];
  let names = [1,2,3];
  console.log(fruits[1]); // Output: Banana
  console.log(names[1]);
  
  // 3. Function (Reusable Code Blocks)
  // - Functions perform specific tasks and can return values.
  function greet(name) {
    return `Hello, ${name}!`;
  }
  function helloWorld(name){
    return `Hello World, ${name}`
  }
  console.log(helloWorld("Ali"))
  console.log(greet("Alice")); // Output: Hello, Alice!
  
  // 4. Date (Working with Time and Dates)
  // - The Date object allows manipulation of time-related values.
  let currentDate = new Date();
  // let currectTime = new Date.now();
  console.log(currentDate.toDateString()); // Example Output: Fri Feb 07 2025
  // console.log(currectTime.toDateString());
  
  // 5. RegExp (Regular Expressions)
  // - Used for pattern matching in strings.
  let pattern = /hello/i; // Case-insensitive match for "hello"
  console.log(pattern.test("Hello, world!")); // Output: true
  
  // 6. Map (Key-Value Pairs with Any Data Type as Keys)
  // - Unlike objects, Maps can have non-string keys.
  let userMap = new Map();
  var userMap2 = new Map();

  userMap.set(1, "Alice");
  userMap.set("role", "Admin");
  console.log(userMap.get(1)); // Output: Alice
  console.log(userMap.delete("role")); 
  console.log(userMap.get("role")); 
  
  // Summary:
  // - Objects store structured data with key-value pairs.
  // - Arrays hold ordered collections of values.
  // - Functions allow reusable logic execution.
  // - Date objects handle time-related data.
  // - Regular expressions define search patterns.
  // - Maps allow flexible key-value pair storage.
  