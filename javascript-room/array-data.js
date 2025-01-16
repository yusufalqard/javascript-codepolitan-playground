// Array Data Structure
let box = ['apple', 'banana', 'lemon'];
// console.log(box);
// console.log(box[0]);
console.log(box[1]);
// console.log(box[2]);
// Array is a data structure that can store multiple values
// Array index start from 0
// Enable and Disable code one by one to see the result

// Example how to change array value
let color = ['red', 'green', 'blue'];
color[1] = 'yellow';
color[2] = 'green';
console.log(color);
// Result: ['red', 'yellow', 'green']
// Because we change the value of index 1 and 2
// Array always start from 0,1,2,...,n which n is the last index
// You can easily remember this Array[n] as reference

// Example how to use Array Pop and Array Push
let barble = [];
barble.push(20);
barble.push(25);
barble.push(30,15);
console.log(barble);
// Result are [20,25,30,15]
// Array push means that you will add item on end of array index
// Their value remain true depends what user input
let Rest = [];
Rest.push(3);
Rest.push(6);
Rest.push(7);
Rest.push(2);
Rest.pop();
console.log(Rest);
// Result are [3,6,7]
// Arrat pop means that you will remove item on end of array index
// Which on this one Rest index of 3 will removed

// Example how to use Array Shift and Unshift
let NumTicket = [203,105,319,51,3];
NumTicket.unshift(23);
NumTicket.unshift(43);
NumTicket.unshift(0);
NumTicket.shift();
console.log(NumTicket);
// Array shift means that you will remove item on start of array index
// Array unshift means that you will add item on start of array index
// Result are [43,23,203,105,319,51,3]