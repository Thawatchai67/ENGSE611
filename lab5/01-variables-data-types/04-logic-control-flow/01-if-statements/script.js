let userAge = 25;

if (userAge < 18) {
  console.log("You are underaged.");
} else {
  console.log("You are an adult.");
}

let userAge2 = 17;
let status = userAge2 < 18 ? "Underage" : "Adult";

console.log(status); // "Underage"

let userScore = 92;

if (userScore >= 95) {
  console.log("Outstanding performance!");
} else if (userScore >= 85) {
  console.log("Grade: A");
} else if (userScore >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

let userAge3 = 21;
let hasPermission = false;

if (userAge3 >= 18) {
  if (hasPermission) {
    console.log("You are allowed entry.");
  } else {
    console.log("Permission required to enter.");
  }
} else {
  console.log("You are not old enough to enter.");
}
