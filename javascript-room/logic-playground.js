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

// Example correct way to use IF ELSE Nest Statement for development
// Here is example how to make IF Else nest for password prompt basic level
// const Password = prompt("Enter your password");
// if (Password.length >= 8) {
//   if (Password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//     } else {
//       console.log("Password cannot contain space");
//     }
//   } else {
//     console.log("Password must be 8 characters long");
// }

// Using AND operator to make the code efficient
// if (Password.length >= 8 && Password.indexOf(" ") === -1) {
//   console.log("Valid Password");
// } else {  
//   console.log("Password does not meet the requirements");
// }

// Using OR operator for role access
const role = prompt("Enter your role");
if (role === 'admin' || role === 'editor') {
  console.log('Access Granted, Welcome admin');
} else {
  console.log('Access Denied, You are not admin');
}
// Result if prompt admin and role anything else than editor
// Condition will given true, because OR operator only need one of the condition to be true
// If first condition other than admin, then result was false
// and you got notification Access Denied, You are not admin

// Using NOT operator
const UserLogIN = prompt("Enter your role");
if (UserLogIN !== 'admin') {
  console.log('You are not admin');
} else {
  console.log('Welcome admin');
}