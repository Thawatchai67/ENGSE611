let fruits = ["Apple", "Banana", "Cherry"];
let numbers = new Array(10, 20, 30);
let emptyArray = [];

console.log("First fruit:", fruits[0]);
console.log("Total fruits:", fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add elements
fruits.push("Mango");
fruits.unshift("Grape");

// Remove elements
fruits.pop();
fruits.shift();

// Searching in array
console.log("Index of Banana:", fruits.indexOf("Banana"));
console.log("Is Mango in array?", fruits.includes("Mango"));

// Iterating through array
console.log("Fruits list:");
fruits.forEach(fruit => console.log("-", fruit));

console.log("Using for...of loop:");
for (let fruit of fruits) {
  console.log("-", fruit);
}

// Array slicing and combining
let newFruits = fruits.slice(1, 3);
console.log("Sliced array (index 1 to 2):", newFruits);

let combined = fruits.concat(["Mango", "Pineapple"]);
console.log("Combined array:", combined);
