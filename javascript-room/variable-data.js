// There is Constants and Let in JavaScript
// Their fundamental difference is that Constants cannot be changed, while Let can be changed
// Let function is used to declare Variables, while Const function is used to declare Constants

// Example of Constants
const YourScore = 90;
// YourScore += 1;
// YourScore -= 1;
// YourScore *= 1;
// YourScore /= 1;
// YourScore++;
console.log(YourScore);
// Result are 90 even though there are 4 math operations, const function cannot be changed or modified
// Enable/Disable each math operation to see the result
// There is an error message that says "TypeError: Assignment to constant variable." in each math operation

// Example of Variables using Let function
let MyGrade = 90;
MyGrade += 1;
// MyGrade -= 1;
// MyGrade *= 2;
// MyGrade /= 2;
// MyGrade++;
console.log(MyGrade);
// Result are different from the Constants, MyGrade can be changed or modified
// Enable/Disable each math operation to see the result
// There is no error message because let function can be changed or modified


// Differences of Const and Let function

// Function : Const is used to declare constant variables are not changed after initial process, which is used to declare variables that are not changed.
// Const also have advantageous in terms of security, because it cannot be changed or modified
// There are immutability to define var for easier debugging process
// and Readability code to understand and maintenance for development process
// The problem of this Const function are it has Restrictions to change or modify the value of the variable.
// Once its set, developer cannot modify any changes of this value. Initial value const will remain same.

// Function : Let is used to declare variables are changes after initial process, which is used to declare variables that are changed.
// Let function also have advantageous in terms of flexibility, because it can be changed or modified
// What does it means? It can be used on Looping and Conditional Statements for changes of the value of the variable
// Let function only have block scope which only accessible with bracket {} that was declared
// This block scope purpose to prevent any conflict of variable and unintended side effects
// The problem of this Let function are it's vulnerable changes especially on large code database project
// Developer should known that Let function usage purpose for development process

// Const and Let function are mostly used in JavaScript for development process
// Const give option to practice for new developer to understand how the process code works
// Let give option to developer who already have enough fundamental of purpose usage to create application