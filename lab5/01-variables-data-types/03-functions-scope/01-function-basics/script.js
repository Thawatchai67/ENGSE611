// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log("Addition:", add(3, 5)); // 8

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(4, 2)); // 8

// Default Parameter
function sayHi(name = "Guest") {
  return `Hi, ${name}!`;
}
console.log(sayHi()); // "Hi, Guest!"

// Rest Parameter + Reduce
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4)); // 10
