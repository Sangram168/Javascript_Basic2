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

// Template literal(Escape Notation)
// let message1 = "This is \n my first \n  Message";
// console.log(message1);

let message1 = `This is my 
first Message for ${lastName}`;
console.log(message1);

// Date and Time - Data objects are created with new date()
let date = new Date();
console.log(date);

let date2 = new Date('June 20 1998 07:15');
console.log(date2);

let date3 = new Date(1998, 5, 20, 7);
console.log(date3);

// getter

console.log(date2.getMilliseconds());

// setter

console.log(date3.setFullYear(1999));



