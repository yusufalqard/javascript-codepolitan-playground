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

function convertColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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

// Create Object with Constructor Function
// Constructor function is a function that is used to create an object.

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// // So, we can call the function Color like this
// // Input in browser console this code below
// // new Color(255, 100, 25).hex()
// // Result is #ff6419
// Color.prototype.rgba = function (a = 1.0) {
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
// Input in browser console this code below
// document.body.style.backgroundColor = new Color (255, 100, 25).rgba(0.5);
// Result is rgba(255, 100, 25, 0.5)
// Your Document HTML will change to those color by browser console temporary

// To test logic of OOP try this code in browser console

// const color1 = convertColor(21,44,36);
// const color2 = convertolor(120,14,55);
// color1.rgb === color2.rgb;
// Result are false
// Method color on convertColor will have different object everytime we input new value

// Meanwhile with using prototype we could make the method shared between object
// const color1 = new Color(21,44,36);
// const color2 = new Color(120,14,55);
// color1.rgb === color2.rgb;
// Result are true
// Method color on Color will have shared method between object and it will be the same everytime we input new value
// Its belong to the prototype of the object source location

// Create Object with Class on OOP Javascript
// Class is a blueprint for creating objects with pre-defined properties and methods.
// Class is a template for creating objects.

// class Color {
//     constructor(r,g,b){
//         // Constructor is a method that is called when an object is created.
//         // It is used to initialize the object's properties.

//         this.r = r;
//         this.g = g;
//         this.b = b;
//         console.log("Testing constructor");
//         console.log(`${r}, ${g}, ${b}`);
//     }
// }
// Input in browser console to test the code
// Color
// Result are detail of class Color
// new Color()
// Result are Testing constructor and undefined, undefined, undefined
// new Color(255,14,11)
// Result are Testing constructor and 255, 14, 11

// However there is a better way to create new constructor for this one
// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   colorName() {
//     console.log(`This color is ${this.name}`);
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
// }
// Clearly this is how to create a class with constructor and method inside the class
// WIthout writing same method for each object created

// Input in browser console to test the code
// const SkyColor = new Color(185,243,252, 'Sky Blue');
// Initialize the object SkyColor with new Color(185,243,252, 'Sky Blue')
// SkyColor
// Result are detail of class Color
// SkyColor.rgb()
// Result are rgb(185, 243, 252)

// Now try this to change style of element html
// document.body.style.backgroundColor = SkyColor.rgb()
// or
// document.body.style.backgroundColor = SkyColor.hex()
// or
// document.body.style.backgroundColor = SkyColor.rgba(0.5)
// Your HTML Body color changes to Sky Blue depend which element code you input before
// either rgb, hex, or rgba

// Create object with class - OOP Javascript level intermediate technique
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  colorName() {
    console.log(`This color is ${this.name}`);
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hsl(){
    const {r,g,b} = this;
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
  fulllySaturated(){
    const {h,l} = this;
    return `hsl(${h}, 100%, ${l})`;
  }
  opposite(){
    const {h,s,l} = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }

  // Reference from https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}
// Input in browser console to test the code
// const SkyColor = new Color(185,243,252, 'Sky Blue');
// Initialize the object SkyColor with new Color(185,243,252, 'Sky Blue')

// document.body.style.backgroundColor = SkyColor.hsl()
// Result is hsl(195, 86.3%, 86.3%)
// document.body.style.backgroundColor = SkyColor.fulllySaturated()
// Result is hsl(195, 100%, 86.3%)
// document.body.style.backgroundColor = SkyColor.opposite()
// Result is hsl(15, 86.3%, 86.3%)

// This is how to create a class with constructor for intermediate level

// OOP, Extend Class, Super in Javascript for Intermediate Level

// class AnimalPet {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   eat(){
//     return `${this.name} is eating`;
//   }
//   age(){
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   // Input const Cat = new Cat('Tom', 3);
//   // Result is Cat.eat() => Tom is eating
//   age(){
//     return `${this.name} is ${this.age} years old`;
//   }
//   // Input Cat.age() then Result are Tom is 3 years old
//   sound(){
//     return 'Meow';
//   }
// }

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
  
//   }
//   // Input const Dog = new Cat('Spike', 5);
//   // Result is Dog.eat() => Spike is eating
//   age(){
//     return `${this.name} is ${this.age} years old`;
//   }
//   // Input Dog.age() then Result are Spike is 3 years old
//   sound(){
//     return 'Woof woof';
//   }
// }

// After we build those code, It is sounds less efficient and repetitive
// We could generalize this code by using extend class and super in Javascript
// Here is how the code can be generalized much better

class AnimalPet { // This is parent class of Object
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`;
  }
  age(){
    return `${this.name} is ${this.age} years old`;
  }
}
class Cat extends AnimalPet { // This is child class of Object from AnimalPet
  constructor(name, age, livesLeft = 9){
    super(name, age);
    this.livesLeft = livesLeft;
  }
  CatSound(){
    return 'Meow';
  }
}
class Dog extends AnimalPet { // This is child class of Object from AnimalPet
  DogSound(){
    return 'Woof woof';
  }
}
// You can see clearly this is much better than before :D

// Why OOP is standarized in programming?
// It is because OOP is a way to structure the code in a more organized way.
// And make Developer do not repeat same writing code for each object created