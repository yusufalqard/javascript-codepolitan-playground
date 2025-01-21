// START SECTION of Callback Function and Array Method in Javascript

// For Each in Javascript
// Can be used as Callback Function that Retrieve some function as many element in array has
const BoxDonut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
BoxDonut.forEach(function (DonutElement) {
  if (DonutElement % 2 === 0) {
    console.log(DonutElement);
  }
});
// This function will show even number in BoxDonut array
// It will show 2, 4, 6, 8, 10 in console.log(DonutElement);
const MovieList = [
    {
        titleMovie: "Snowden",
        rating : 73,
    },
    {
        titleMovie: "Terminator 3: Rise of the Machines",
        rating : 78,
    },
    {
        titleMovie: "Fast & Furious Tokyo Drift",
        rating : 81,
    },
];
MovieList.forEach(function (MovieElement) {
    console.log(`${MovieElement.titleMovie} - ${MovieElement.rating}/100`);
});
// Result will show in console as:
// Snowden - 73/100
// Terminator 3: Rise of the Machines - 78/100
// Fast & Furious Tokyo Drift - 81/100

// MAP in Javascript
// Usage of Map in Javascript is to create new array from existing array
// that can be modified by callback function

const Donut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DoubleBox = Donut.map(function (DonutElement) {
      return DonutElement * 2;
});
DoubleBox;

const IceCream = ['Vanilla', 'Chocolate', 'Oreo'];
const IceCreamTaste = IceCream.map(function (tasty){
    return tasty.toUpperCase();
});
IceCreamTaste; // ["VANILLA", "CHOCOLATE", "OREO"]

const ToppingIceCream = ['Blueberry', 'Strawberry', 'Mint'];
const ToppingTaste = ToppingIceCream.map(function (tasty){
    return tasty.toLowerCase();
});
ToppingTaste; // ["blueberry", "strawberry", "mint"]

// Arrow Function in Javascript
// Arrow Function is a shorter way to write function in Javascript
// Arrow Function is not only shorter but also more readable

const BusTicket = (x) => {
    return x * 2;
}
console.log(BusTicket(5));
// Result will show 10 in console.log(BusTicket(5));

// Return Explicit in Arrow Function
// If the function is only one line, we can remove the curly braces
const RollWheel = () => (
    Math.floor(Math.random()*50)
);
console.log(RollWheel());
// RollWheel() will generate random number between 0 to 50

const CountMoney = (a, b) => a + b
console.log(CountMoney(10, 20));
// Result will show 30 in console.log(CountMoney(10, 20));

// Settimeout and Setinterval in Javascript
// setTimeout is a function that will execute the function after certain time
// setInterval is a function that will execute the function repeatedly after certain time

// console.log('Hello, can you hear me?');
// setTimeout(() => {
//     console.log('Hello, i can hear you');
// }, 5000);

// Result will show in console as:
// `Hello, can you hear me?`
// `Hello, i can hear you` after 5 seconds function executed

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 3000);
// Result are random number that will show in console every 3 seconds
// To stop the setInterval, we can use clearInterval(interval);