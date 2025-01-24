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

// Destructuring in Javascript
// Destructuring is used to extract array elements or object properties
// First of all, we will use Destructuring with Array first

// I am using exmaple of OylmpicWinner array at line 64
const [a,b,c] = [OylmpicWinner];
console.log(a,b,c);
// Result are Usain Bolt Michael Phelps Simone Biles, Undefined and Undefined
// Because b and c are not defined in array before at line 76
// Where it should be [OylmpicWinner, ... , ... ] if we want to use b and c

// Destructuring with Object in Javascript
// This is example of Deconstructing with Object
// const userStatus = {
//     FullName : "Monica Galindo",
//     Email : "moga@gmail.com",
//     Role : "Admin",
// };
// const {FullName : realName , Email : registeredEmail, Role : jobDesk, phone = '555-0001'} = userStatus;
// console.log(realName);
// Result is Monica Galindo
// console.log(registeredEmail);
// Result is moga@gmail.com
// console.log(jobDesk);
// Result is Admin
// console.log(phone);
// Result is 555-0001

// You can also use Destructuring with object inside of function
// This is example of Deconstructing with Object inside of function
// I am using example of userStatus object at line 84
const userStatus = {
    FullName : "Monica Galindo",
    Email : "moga@gmail.com",
    Role : "Admin",
};

const EmployeeRole = ({FullName, Role}) => {
    return `${FullName} is ${Role}`;
};
EmployeeRole(userStatus);
console.log(EmployeeRole(userStatus));
// Result is Monica Galindo is Admin

// Remember in the day about Movie Title?
// We can use Destructing method too in this case
const MovieTitle = [
    {
    Title : "The Matrix",
    Year : 1999,
    Director : "Lana Wachowski",
    Rating : 8.7,
    },
    {
    Title : "The One",
    Year : 2001,
    Director : "James Wong",
    Rating : 8.1,
    },
    {
    Title : "Project Almanac",
    Year : 2015,
    Director : "Almanac",
    Rating : 7.3,
    },
    {
    Title : "Eagle Eye",
    Year : 2008,
    Director : "D.J. Caruso",
    Rating : 9.1,
    },
];

// First of thing you need to flashback with callback function
const Movie = MovieTitle.map((Movie) => {
    return `${Movie.Title} is directed by ${Movie.Director} at ${Movie.Year}`;
});
console.log(Movie);
// Result are ["The Matrix is directed by Lana Wachowski at 1999", "The One is directed by James Wong at 2001", "Project Almanac is directed by Almanac at 2015", "Eagle Eye is directed by D.J. Caruso at 2008"]
// However, it really less effective
// So in this case, we use Destructuring method

const BestMovie = MovieTitle.map(({Title, Director, Year}) => {
    return `${Title} from ${Director} at ${Year}`;
});
console.log(BestMovie);
// Result are ["The Matrix from Lana Wachowski at 1999", "The One from James Wong at 2001", "Project Almanac from Almanac at 2015", "Eagle Eye from D.J. Caruso at 2008"]
// You can see the different between line 145 and line 153
// Which is more efficient and understandable


// END of SECTION Javascript ROOM - BONUS JAVASCRIPT MODULE
// This is part of end material of Learn Javascript - Beginner level

// Please check onto next folder Object-Oriented Programming with Javascript