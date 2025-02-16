// 1. Primitive Data Types
// These are the building blocks of data. They hold a single value and are copied by value.

// Type	Description	Example
// String	Text enclosed in quotes	"Hello", 'JavaScript'
// Number	Integers, decimals, or scientific numbers	42, 3.14, 1e5
// Boolean	Logical true or false	true, false
// Undefined	Declared but not assigned a value	let x; → x is undefined
// Null	Intentional absence of value	let y = null;
// Symbol	Unique, immutable identifier (ES6+)	const id = Symbol("id");
// BigInt	Extremely large integers (ES2020+)	9007199254740991n

// Variables in JavaScript
// In JavaScript, variables are used to store values, and there are a few different ways to declare them.
// The most common methods are using `var`, `let`, and `const`.

// 1. var (Older way, less recommended)
// - Function scoped: accessible within the function where declared
// - Hoisted to top of scope but initialized as undefined
// - If declared outside function, becomes global variable
var x = 5;
console.log(x); // Output: 5

// 2. let (Modern way, preferred) 
// - Block scoped: only accessible within block where declared
// - Hoisted but not initialized until declaration (temporal dead zone)
let y = 10;
console.log(y); // Output: 10

// 3. const (For constant values)
// - Block scoped like let
// - Cannot be reassigned after initialization
const z = 15;
console.log(z); // Output: 15
// z = 20; // Error: Assignment to constant variable

// Types of Variables
// JavaScript is dynamically typed - type is determined by assigned value

// String - for text
let name = "John";

// Number - for numeric values
let age = 25;

// Boolean - true/false
let isActive = true;

// Object - collections of data
let person = { name: "John", age: 25 };

// Array - ordered collections
let colors = ["red", "blue", "green"];

// Null - intentional absence of value
let car = null;

// Undefined - declared but not assigned
let address;
console.log(address); // Output: undefined

// Summary:
// - Prefer let/const over var in modern code
// - let/const have block scope, var has function scope
// - Use const for values that shouldn't change