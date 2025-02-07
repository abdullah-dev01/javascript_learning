// In JavaScript, Strings are used to represent textual data. A string is simply a sequence of characters 
// enclosed in quotes, and it can be used to store words, sentences, or even symbols.

// ### Key Points about Strings in JavaScript:

// 1. Declaring Strings:  
// Strings can be declared using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) (Template literals).
   
// Example of string declarations:
let str1 = 'Hello World';    // Using single quotes
let str2 = "JavaScript";     // Using double quotes
let str3 = `Hello, ${str2}`; // Using backticks (template literals)

// 2. String Concatenation:
// You can join or combine multiple strings using the + operator.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// 3. Template Literals (Backticks):
// Template literals allow for easier string concatenation and also support multi-line strings.
// You can embed variables directly into the string using ${}.
let age = 30;
let message = `My name is ${firstName} and I am ${age} years old.`;
console.log(message); // Output: "My name is John and I am 30 years old."

// 4. String Length:
// You can find the length of a string using the .length property.
let greeting = "Hello";
console.log(greeting.length); // Output: 5

// 5. Accessing Characters in a String:
// You can access individual characters in a string using indexing. 
// Strings in JavaScript are zero-indexed, so the first character is at index 0.
let word = "JavaScript";
console.log(word[0]); // Output: 'J'
console.log(word.charAt(1)); // Output: 'a' (Using charAt method)

// 6. String Methods:
// JavaScript provides several useful string methods for manipulating and working with strings.
// Some common ones include:

// toUpperCase(): Converts the string to uppercase
let text = "hello";
console.log(text.toUpperCase()); // Output: "HELLO"

// toLowerCase(): Converts the string to lowercase
text = "HELLO";
console.log(text.toLowerCase()); // Output: "hello"

// trim(): Removes whitespace from both ends of the string
let str = "   Hello World!   ";
console.log(str.trim()); // Output: "Hello World!"

// substring(): Extracts a portion of a string
text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"

// replace(): Replaces a substring with another string
text = "Hello World!";
let newText = text.replace("World", "JavaScript");
console.log(newText); // Output: "Hello JavaScript!"

// 7. Escape Characters:
// Sometimes, you may need to include special characters (like quotes, newlines, etc.) 
// inside strings. You can do this by using escape characters.
str = "He said, \"JavaScript is awesome!\"";
console.log(str); // Output: He said, "JavaScript is awesome!"

let multilineStr = `This is a string
that spans multiple lines.`;
console.log(multilineStr);

// Summary:
// - Strings are one of the most commonly used data types in JavaScript
// - You can use single quotes, double quotes, or backticks to declare a string
// - Strings have useful methods like .toUpperCase(), .toLowerCase(), .substring(), .trim(), and .replace() for manipulation
// - Template literals (backticks) allow for easier string interpolation and multi-line strings

// Note: In Hindi/Urdu, strings can be used in exactly the same way, but the text will be written 
// in the respective language script, like Urdu, Hindi, or any other language supported by JavaScript.