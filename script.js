// Built-In Object
// Math is a built-in object that has properties and methods
// for mathematical constants and functions

console.log(Math.random())
console.log(Math.PI);
console.log(Math.round(1.2));
console.log(Math.max(1,34,3,2));
console.log(Math.min(21,3,4,5));
console.log(Math.abs(-2));
console.log(Math.abs(2));

// String

let lastName = 'Aman';

let firstName = new String('Love');

console.log(lastName.length);
console.log(lastName);
console.log(lastName[0]);
console.log(lastName.includes('an'));
console.log(lastName.startsWith('Am'));
console.log(lastName.endsWith('an'));
console.log(lastName.indexOf('n'));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim()); // space trim
console.log(lastName.replace('Am', 'Na'));

let message = 'This is my first Message';
let words = message.split(' ');
console.log(words);

