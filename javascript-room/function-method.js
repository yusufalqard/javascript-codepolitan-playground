// Function and Method section
// Here is how to remember how to use function
// function Name_of_function () {
//      code will processed
// }

function RollDice(){
    console.log(Math.floor(Math.random()*6) +1);
}
RollDice();

// Argument and Paramater
function Greeting(MyName){
    console.log(`Hello there!, ${MyName}`);
}
Greeting("Yusuf");
// How to remember
// Greeting("Yusuf") where "Yusuf" is argument
// function Greeeting() are considered as paramater

// You can also use multiple paramater and argument together
function AddNumeric(a,b){
    const total = a + b;
    console.log(`Result a + b is ${total}`);
}
AddNumeric(2,8);