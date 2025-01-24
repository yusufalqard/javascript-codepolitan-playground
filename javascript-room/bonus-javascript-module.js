// Default Value Parameter
// In high level programming languages, we write code like this
function multiply (a,b = 1){
    return a * b;
}
console.log(multiply(5,2)); // 10
// In old level programming languages, we write code like this
function multiply (a,b){
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

function RollMonopolyDice (numericDice){
    return Math.floor(Math.random() * numericDice) + 1;
}
console.log(RollMonopolyDice(6)); // 1 to 6

function SayHello (name, msg){
    console.log(`${name}, ${msg}`);
}
console.log(SayHello());
// Result are undefined, undefined
// SayHello("John", "Good Morning");
// Result are John, Good Morning
// Enable/Disable code of comment at line 21 and 23 to see the result in console.log on line 19 with Quokka.js or Browser Console

// Spread Operator (...) on Javascript
// Spread Operator is used to change some array elements or object properties
// even string as parameter into function

const NumArray = [1,2,3,4,5];
console.log(...NumArray);
// Result are 1 2 3 4 5
console.log(Math.min(...NumArray));
// Result are 1
console.log(Math.max(...NumArray));
// Result are 5

// Merge array with Spread in Javascript
// Combine first array with spread operator
const FirstArray = [1,2,3];
const BankName = ["VISA", "MasterCard", "Paypal"];
const SecondArray = [...FirstArray, ...BankName];
console.log(SecondArray);
// Result are [1, 2, 3, "VISA", "MasterCard", "Paypal"]

// Merge object with Spread in Javascript
// Combine first object with spread operator
const UserName = {
    BankName : "VISA",
    IdNumber : 123456,
};
const AddRole = {...UserName, Role : "Admin"};
console.log(AddRole);
// Result are {BankName: "VISA", IdNumber: 123456, Role: "Admin"}

// Rest Param with Spread in Javascript
// Rest param can be optimized with Spread
const PayAll = (...nums) => {
    return nums.reduce((total, num) => total + num);
};
console.log(PayAll(15,85));
// Result are 100
const OylmpicWinner = ["Usain Bolt", "Michael Phelps", "Simone Biles"];
const titleWinner = (gold, silver, bronze) => {
    console.log(`Gold : ${gold}, Silver : ${silver}, Bronze : ${bronze}`);
}
titleWinner(...OylmpicWinner);
// Result are Gold : Usain Bolt, Silver : Michael Phelps, Bronze : Simone Biles