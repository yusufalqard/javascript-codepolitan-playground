// Function and Method section
// Here is how to remember how to use function
// function Name_of_function () {
//      code will processed
// }

function RollDice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
RollDice();

// Argument and Paramater
function Greeting(MyName) {
  console.log(`Hello there!, ${MyName}`);
}
Greeting("Yusuf");
// How to remember
// Greeting("Yusuf") where "Yusuf" is argument
// function Greeeting() are considered as paramater

// You can also use multiple paramater and argument together
function AddNumeric(a, b) {
  const total = a + b;
  console.log(`Result a + b is ${total}`);
}
AddNumeric(2, 8);

// Return function in Javascript
function CountMe(a, b) {
  const CountResult = a + b;
  return CountResult;
  // Below this code will not processed and return function will stop and keep the code
  console.log(`Finish counting for ${CountResult}`);
}
CountMe(2, 3);

function Retrying(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
    // If any number does not match condition it will return false value
  }
  return a + b;
  // If both number meet the condition, result will be processed
}
Retrying(2, 9);
// Normally return code will stop other condition process
// Console.log cannot be declare in visual studo code because it does not processed
// Even with Quokka.js extension
// But you can see the result in browser by open index-fc.html file
// And use inspect into console tab to see the result script running

// Scope function in Javascript
// let OS = "Windows 11";
// function bestOS (){
// let OS = "Windows 7";
// OS; // This will show in console as Windows 7
// }
// bestOS(); // This is function call to show the result
// console.log(OS);  //While this on global scope, Result will show as Windows 11

// Variable scope and function in visibility has different result when we build the code
// Global variable can be accessed by any function
// Local variable only can be accessed by the function itself

// Blocked Scope Function
// let Height = 3;
// if (Height > 5){
// let Width = 10;
// console.log(Width); // This will show in console as 10 for Width
// }
// console.log(Width);
// This will show error in console and said
// Width is not defined because Width is blocked scope function
// It only can be accessed by the function itself

// for (let index = 0; index < 10; index++){
// const indexNumber = index;
// console.log(`index `,indexNumber);
// }
// console.log(`index `,indexNumber);

// Lexical Scope Function
function ApplyJob() {
  const Role = "Full Stack Developer";

  function SpecificJob() {
    let SeekerApplicant = `Yusuf as ${Role}`;
    console.log(SeekerApplicant);
  }
  SpecificJob();
}
ApplyJob();
// Lexical Scope is function inside function
// It can access the variable from parent function
// But parent function cannot access variable from child function

// Expression Function
const resultFactorial = function (insertFactorial) {
  return insertFactorial * insertFactorial;
};
console.log(resultFactorial(5));
// Expression function is function that stored in variable

// Function as Other Argument Function
function DoubleRollDice(DiceDouble) {
  DiceDouble();
  DiceDouble();
}

function RollDiceMarble() {
  const ResultDice = Math.floor(Math.random() * 6) + 1;
  console.log(ResultDice);
}
DoubleRollDice(RollDiceMarble);
// This function will call RollDiceMarble function twice at same time
// It shows two result of dice roll in console.log(ResultDice);

// Reverse Function Value as Function
function ResultOfFunction() {
  const rand = Math.random();

  if (rand > 0.1) {
    return function () {
      console.log("Congratulations! You Win!");
    };
  } else {
    return function () {
      console.log("Sorry, You are not lucky today!");
    };
  }
}
const Winner = ResultOfFunction();
Winner();
// This function will show random result of win or lose
// It will generate the result randomly everytime we make changes on this code editor or call the function

// Method in Javascript
const myMath = {
  PI: 3.14159,
  Square: function (num) {
    return num * num;
  },
  Cube: function (num) {
    return num ** 3;
  },
};
console.log(myMath.Square(7));
console.log(myMath.Cube(3));
// Method is function that stored in property of object

// This and Try & Catch Function in Javascript

// This are use to call some property in same object
// Purpose of This is getting value from object property
const Friendship = {
  FriendName: "Yusuf AQ",
  HobbyFriend: "Gaming and Coding",
  FriendIntroduction: function () {
    return `I am ${this.FriendName} and I like ${this.HobbyFriend}`;
  },
};
console.log(Friendship.FriendIntroduction());

// Try & Catch mainly used by many developer around the world
// It is used to catch error in code
// and prevent the code to stop running indefinitely or broke the application
function Shake(msg) {
  try {
    // Friendship.Intro()
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log('Please input the value');
  }
}
Shake('Hello there!');
// End section of Function and Method