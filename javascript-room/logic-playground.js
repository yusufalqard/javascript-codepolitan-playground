// This is example javascript code from logical-decision.js

// console.log('This is logging');
// console.warn('Warning');
// console.error('Error');
// prompt('Fill this message below');
// confirm('Are you sure?');

// Enable/Disable code one by one to see the result
// Install Live Server Extension to make your development work project easier

// IF ELSE STATEMENT
let Age = 26; // Change the value to see different result
if (Age > 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}
// Check the result in browser console or using Quokka.js

// IF ELSE NEST STATEMENT
const Weight = 60;
if (Weight > 70) {
  console.log("You are fat");
} else if (Weight <= 69) {
  console.log("You are normal");
} else if (Weight >= 50) {
  console.log("You are thin");
}

// Another example of IF ELSE NEST STATEMENT
const GradeScore = 90;
if (GradeScore >= 90) {
  console.log("You are dilligent student");
} else if (GradeScore >= 75) {
  console.log("Keep up and improve your score");
} else if (GradeScore >= 60) {
  console.log("Better try harder");
} else if (GradeScore >= 50) {
  console.log("Keep practice and learn");
} else {
  console.log("You are failed, keep practice");
}
// Change the value of Weight and GradeScore to see the result code
// Why 2 example above has different writing IF ELSE NEST STATEMENT?
// First of example if you dont have weight than 50 kg, no script will run
// while second of example if you have score other or equal 50, script else will run
// Mostly developer use second example to make sure all condition will run