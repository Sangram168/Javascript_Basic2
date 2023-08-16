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

// Arrays -It is a collection different items

let numbers = [1,4,5,7];
console.log(numbers);

// beginning element add
numbers.unshift(34);
console.log(numbers);

// end element add
numbers.push(25);
console.log(numbers);

// middle
numbers.splice(2,0,'a','b','c');
console.log(numbers);

// Searching
console.log(numbers.indexOf('a'));

// We want to check if a number exists in an array
if(numbers.indexOf(4) != -1)
console.log("present");

console.log(numbers.includes(7));
console.log(numbers.indexOf(4, 2));
console.log(numbers);

// reference type searching of element using callback function
// callback function - A callback function is a function passed into another
// function as an argument,which is then invoked inside the outer function
// to complete some kind of routine or action

let courses = [
    {no:1, naam:'Rohit'},
    {no:2, naam:'Rahul'}
];

// console.log(courses.includes({no:1, naam:'Rohit'}));

let course = courses.find(function(course){
    return course.naam === 'Rohit';

})

// Removing Element
// end pop()
// beginning shift()
// middle splice

let numbers1 = [1,2,3,4,5,6,7];

numbers1.pop();
numbers1.shift();
numbers1.splice(2, 1);

console.log(numbers1);

// Emptying an array

let numbers2 = [1,2,3,4,5];
numbers2.length = [];
console.log(numbers2);

// second method
numbers2.splice(0, numbers2.length);
console.log(numbers2);

// Combining and Slicing Arrays

let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

// slicing - The slice() method returns selected elements in an array, as a new array. 
let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(); // it copy the original array
// console.log(sliced);
let sliced = marks.slice(2); // It all element from 2 to last index
console.log(sliced);

let sliced1 = marks.slice(2,6);
console.log(sliced);

// spread operator
// combined using spread operator
let first2 = [1,2,3];
let second2 = [4,5,6];
let combined1 = [...first,'a', false, ...second, 'b', true];
console.log(combined1);

// copy 

let another = [...combined1];
console.log(another);

// iterating an array
// for of
let arr = [10,20,30,40,50];

for(let value of arr){

    console.log(value);
}

// for each loop - The forEach() method calls a function 
// for each element in an array

let arr1 = arr.forEach(function(num){
    console.log(num);
});

















