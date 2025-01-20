// This section are part of looping in javascript
// Basic knowledge for Looping

// Example Looping for Easy Level

// for (let i = 1; i <= 20; i++)
// Result are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

for (let i = 20; i >= 0; i -= 2)
// Result are 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0

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
const Drink = ['Cola','Fanta','Sprite','DrPepper','BigCola'];
for (let M = 0; M < Drink.length; M++ ){
    console.log(M, Drink[M]);
}
// Result are [0, Cola], [1, Fanta], [2, Sprite], [3, DrPepper], [4, BigCola]

// Nested Loop Section
// You can even loop nested same like IF ELSE NEST STATEMENT in different way code built in
// Here is the example
const QNA = 'abcd';
for (let T=1; T<=5; T++){
    console.log(`${T}. Question Number ${T}: `);
    for (let Q=0; Q< QNA.length; Q++ ){
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