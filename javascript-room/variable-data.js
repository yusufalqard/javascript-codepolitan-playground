// There is Constants and Variables in JavaScript
// Their fundamental difference is that Constants cannot be changed, while Variables can be changed
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