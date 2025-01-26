// Object-Oriented Programming (OOP) in JavaScript
// OOP is a programming paradigm that relies on the concept of classes and objects. 
// It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.
// Which makes it easier to manage and maintain the code.
// Without OOP, the code can be messy and hard to maintain.
// OOP is a way to structure the code in a more organized way.

// Example of OOP in JavaScript - Introduction
console.log([1,2,3].length);
console.log([1,2,3].pop);
// Result are 3 and function pop() { [native code] }
const Arr = [1,2,3];
Arr.hello = () => {console.log('Hello')};
console.log(Arr.hello());
// Result is Hello if you run the script in the browser console.
// But if you run the script in the terminal, the result is undefined.
// Because the array is an object in JavaScript, so you can add a property to the object.
// But the property is not a part of the array, it is a part of the object.