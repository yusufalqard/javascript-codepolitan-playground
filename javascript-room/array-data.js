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

// There are some other array method you can use
// concat - for combining array of index
// includes - for search value inside of array with condition true or false
// indexOf - searching index of array position
// join - make string from some array
// reverse - make array sort by descending
// slice - copy or replace some value from specific array of index
// splice - add remove or delete of array element
// sort - for sorting of value array

// Array concat
let Melon = [12,41,31,99];
let Lemon = [80,19,22,60];
const fruit = Lemon.concat(Melon);
console.log(fruit);
// Result are 80, 19, 22, 60, 12, 41, 31,99
// This is how array concat work

// Array sort
fruit.sort();
console.log(fruit);
// Result are 12, 19, 22, 32, 41, 60, 80, 99 
// This is how array sort work

// Array Reverse
fruit.reverse();
console.log(fruit);
// Result are 99, 80, 60, 41, 31, 22, 19, 12
// This is how array reverse work


// Array indexOf
const Animal = ['Elephant','Fish','Shark','Piranha'];
console.log(Animal.indexOf('Elephant'));
// console.log(Animal.indexOf('Fish'));
// console.log(Animal.indexOf('Shark'));
console.log(Animal.indexOf('Piranha'));
// Result are index of 0, 1, 2, and 3
// Enable/Disable the code of Animal in console.log

// Array includes
console.log(Animal.includes('Fish'));
console.log(Animal.includes('Cat'));
// Result are true because fish exist on array and false because cat does not exist
// This is how array includes work

// Array Splice
Animal.splice(1, 0,'Monkey');
console.log(Animal);
// Result are Elephant, Monkey, Fish, Shark, Piranha
// Splice means that we gonna insert new value at index 1 where there is nothing changes value
// 1 means that index of 1 replaced and it will given after position of index 0
// Result are Fish will remain there but the order value index from 1 to 2
Animal.splice(2, 1, 'Cat');
console.log(Animal);
// Result are Elephant, Monkey, Cat, Shark, Piranha
// Index of 2 will be inserted with new value called Cat
// But it will replace current value of Fish into Cat
// 2 means that index of 2 replaced and it will given after position index  1
// This is how array splice work

// Array Slice
console.log(Animal.slice(1));
// Result are Monkey, Cat, Shark, Piranha
console.log(Animal.slice(2));
// Result are Cat, Shark, Piranha
console.log(Animal.slice(3));
// Result are Shark, Piranha
// This is how slice work on specific index order

// Array Join
console.log(Animal.join(' + '));
// Result are Elephant + Monkey + Cat + Shark + Piranha
console.log(Animal.join(' % '));
// Result are Elephant % Monkey % Cat % Shark % Piranha
// This is how array join work