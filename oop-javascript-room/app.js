// Object-Oriented Programming (OOP) in JavaScript
// OOP is a programming paradigm that relies on the concept of classes and objects. 
// It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.
// Which makes it easier to manage and maintain the code.
// Without OOP, the code can be messy and hard to maintain.
// OOP is a way to structure the code in a more organized way.

// Example of OOP in JavaScript - Introduction
// console.log([1,2,3].length);
// console.log([1,2,3].pop);
// Result are 3 and function pop() { [native code] }
// const Arr = [1,2,3];
// Arr.hello = () => {console.log('Hello')};
// console.log(Arr.hello());
// Result is Hello if you run the script in the browser console.
// But if you run the script in the terminal, the result is undefined.
// Because the array is an object in JavaScript, so you can add a property to the object.
// But the property is not a part of the array, it is a part of the object.

// Create Object with Factory Function
// const hex = (r,g,b) => {
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// };
// const rgb =  (r,g,b) => {
//     return `rgb(${r}, ${g}, ${b})`;
// };
// function convertColor (r,g,b) {
//     const color = {};
//     color.r = r
//     color.g = g
//     color.b = b

//     return color;
// }

// This is code less effective
// Therefore we could make those code much better shown below here

function convertColor (r,g,b) {
    const color = {};
    color.r = r
    color.g = g
    color.b = b
    
    color.rgb = function () {
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const {r, g, b} = this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
    };

    return color;
}

// So, we can call the function convertColor like this
// Input in browser console this code below
// const color = convertColor(255, 100, 25);
// color.rgb();
// result is rgb(255, 100, 25);
// color.hex();
// result is #ff6419;
// It also works with Array, Object, and Function.