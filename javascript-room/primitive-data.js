// Primitive data types in JavaScript
// There are Number, String, Boolean, Undefined, Null, Symbol, and BigInt

// Example of Number
// let bookline = 1 + 2;
// Result are 1 + 2 = 3
// let bookline = 1 - 2;
// Result are 1 - 2 = -1
// let bookline = 1 * 2;
// Result are 1 * 2 = 2
// let bookline = 1 / 2;
// Result are 1 / 2 = 0.5
// console.log(bookline);
// const phi = 22 / 7;
// let bookline = 7 * phi ;
// Result are 7 * 22 / 7 = 22
// console.log(bookline);
// let bookline = 2 ** 5;
// Result are 2 ** 5 = 32
// console.log(bookline);

// Example of String
// const greet = "Hello, ";
// const MYname = "Yusuf Al Qardhawi";
// console.log(greet + MYname);
// Result are "Hello, Yusuf Al Qardhawi"

// You can use many type string such as toUpperCase, toLowerCase, toLocaleUpperCase, toLocaleLowerCase,
// .trim(), .trim().toUpperCase(), .trim().toLowerCase(), .trim().toLocaleUpperCase(), .trim().toLocaleLowerCase(), and many more
// Here an example how to use it
// let ThisIsMe = "Hello, My name is Yusuf Al Qardhawi"
// console.log(ThisIsMe.toUpperCase());
// console.log(ThisIsMe.toLowerCase());
// console.log(ThisIsMe.toLocaleUpperCase());
// console.log(ThisIsMe.toLocaleLowerCase());
// console.log(ThisIsMe.trim());
// console.log(ThisIsMe.trim().toUpperCase());
// console.log(ThisIsMe.trim().toLocaleUpperCase());
// console.log(ThisIsMe.trim().toLowerCase());
// console.log(ThisIsMe.trim().toLocaleLowerCase());
// Enable/Disable this code to see the result

// Some.method(argument) is a function that is used to manipulate data in JavaScript
// Here is advance method type string you can used are below
// .indexOf, .slice, .replace and you can view more in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
// Here an example how to use it
let Engineer = "fix this line of code";
console.log(Engineer.indexOf("line"));
console.log(Engineer.slice(14, 21));
console.log(Engineer.replace("fix", "repair"));

// There is trick you can use to manipulate data in JavaScript much better
// By using Dollar sign or ${} to modify data changes
// Here an example how to use it
// use ` on top of tab your keyboard
console.log(`${Engineer.replace("fix", "repair")}`);
// Instead using Engineer.replace("fix", "repair") + ' ' + ... etc
// This method is much better and easier to understand

// Example of Boolean
// const What = 1;
// const Why = 1;
// let How = What - Why;
// let "How" do you know that "How" is a Boolean? 
// Boolean(How);
// Result of Boolean(How) is false because 1 - 1 = 0 because value 0 is false and 1 is true for Boolean numeric value
// console.log(Boolean(How));

// Example of Undefined and Null
const Job = null;
console.log(Job);
const Notified = NaN;
console.log(Notified);
const Accepted = Job + Notified;
console.log(Accepted);
// NaN is Not a Number, so the result of Job + Notified is NaN
// Undefined is a variable that has been declared but not assigned a value, so the result of Job is null

