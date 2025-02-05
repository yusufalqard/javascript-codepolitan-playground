// This section are part of looping in javascript
// Basic knowledge for Looping

// Example Looping for Easy Level

// for (let i = 1; i <= 20; i++)
// Result are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

for (let i = 20; i >= 0; i -= 2) // Result are 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0

// for (let i = 10; i <= 20; i += 2)
// Result are 10, 12, 14, 16, 18, 20

// Enable/Disable the code to see the result
{
  console.log(i);
}

// For Looping, make sure to NOT make mistake during FOR condition
// This is Example if you run with console.log() this looping
// for (let a = 20; a >=0; i++)
// { console.log(a)}
// Result it will give you infinite loop until your hardware become not responding or lag
// DO NOT TRY THIS LOOP CODE

// In looping condition, you can even fetch array data into looping code
// Here is the example
const Drink = ["Cola", "Fanta", "Sprite", "DrPepper", "BigCola"];
for (let M = 0; M < Drink.length; M++) {
  console.log(M, Drink[M]);
}
// Result are [0, Cola], [1, Fanta], [2, Sprite], [3, DrPepper], [4, BigCola]

// Nested Loop Section
// You can even loop nested same like IF ELSE NEST STATEMENT in different way code built in
// Here is the example
const QNA = "abcd";
for (let T = 1; T <= 5; T++) {
  console.log(`${T}. Question Number ${T}: `);
  for (let Q = 0; Q < QNA.length; Q++) {
    console.log(` ${QNA[Q]}. Ans Option`);
  }
}
// Result are
// 1. Question Number 1:
// a. Ans Option
// b. Ans Option
// c. Ans Option
// d. Ans Option
// ... until ...
// 5. Question Number 5:
// a. Ans Option
// b. Ans Option
// c. Ans Option
// d. Ans Option

// Fetch Data from Array using Nested Loop and Nested Array
const Supermarket = [
  ["Chicken", "Fish", "Wagyu"],
  ["Tomato", "Chili", "Garlic"],
  ["Soy Sauce", "Mustard", "Smoke Paprika"],
];
for (let B = 0; B < Supermarket.length; B++) {
  const Product = Supermarket[B];
  console.log(`[Item List #${B + 1}]`);
  // Result are Item List #1, Item List #2, Item List #3
  for (let G = 0; G < Product.length; G++) {
    console.log(Product[G]);
    // Result are Chicken, Fish, Wagyu, Tomato, Chili, Garlic, Soy Sauce, Mustard, Smoke Paprika
  }
}
// Final result of this nested loop and array are below

// [Item List #1]
// Chicken
// Fish
// Wagyu
// [Item List #2]
// Tomato
// Chili
// Garlic
// [Item List #3]
// Soy Sauce
// Mustard
// Smoke Paprika

// This is how you can fetch data array using Nested Loop and Array together

// Looping with While
let LineNumber = 0;
while (LineNumber < 10) {
  console.log(LineNumber);
  LineNumber++;
}

// Try this on index.html and disable comment code below to copy script
// <script>
// const Password = 'Admin';
// let verify = prompt('Insert your password');
// while ( verify !== Password){
//     verify = prompt('Insert your password');
// }
// alert('Welcome, Admin');
// </script>

// As long while verify password user input not correct it will remain loop
// until condition met where Password = Admin

// Break in looping condition
// Try this on index.html and disable comment code below to copy script
// <script>
// let input = prompt('Input exit text or you will keep asked until your text input correct');
// while(true) {
//      input = prompt(input);
//      if (input.toLoweredCase() === 'exit')
//          break;
//      }
// alert('Good Job');
// </script>

// Example how break in looping condition for numeric
for (let i = 0; i < 8; i++) {
  console.log(i);
  if (i === 5) break;
}
// Result are normally without break is 0, 1, 2, 3, 4, 5, 6, 7
// if we do another condition IF inside FOR as break condition
// Result are different, it will force IF condition where number equal 5
// It will stop looping number into result 0, 1, 2, 3, 4, 5

// Looping with FOR..OF (Advance Javascript only supports with Newest Browser Version)
// This code really elegant much clear on writing and understandable to read
const Assign = ['Fix Bug','Revision','Create Idea','Preview'];
for (let Task of Assign ){
    console.log(Task);
}
// NESTED LOOP AND ARRAY with FOR..OF methods
const PickNum = [
    [1,3,4],
    [51,2,100],
    [7,831,209],
    [81,9,729],
];
for (let Roll of PickNum){
    for(let RNG of Roll){
        console.log(RNG);
    }
}
// Essential this writing much flexible and less confusing
// The problem that it does not support with Internet Explorer
// You have to used newest browser version in order script to run

// For..OF on Object looping condition
const PricePlan = {
    VPN:30,
    YoutubePremium:5,
    Spotify:10,
    Mudfish:15,
    Internet:20,
};
// for(let PayPrice in PricePlan){
//     console.log(`${PayPrice} price are $${PricePlan[PayPrice]}`);
// }
// Result are below
// VPN price are $30
// YoutubePremium price are $5
// Spotify price are $10
// Mudfish price are $15
// Internet price are $20

let BuyPlan = 0;
let Prices = Object.values(PricePlan);
for (let CheckingOut of Prices){
    BuyPlan += CheckingOut;
}
console.log(BuyPlan/Prices.length);
// Result are total buyplan of price plan divided by items category
// 80 / 5 = 16, which consider every product sells are average cost $16 in median range