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

// for each loop using arrow function
 arr.forEach(num=> console.log(num));


 // Joining arrays - The join() method returns an array as a string
let numbers3 = [10,20,30,40,50];
let joined = numbers3.join('-');
console.log(joined);

// split() - The split() method splits a string into an array of substrings.

let state = 'This is the first statement';
let statement = state.split(' ');
console.log(statement);


// Sorting arrays - The sort() method of Array instances sorts 
// the elements of an array in place and returns the reference 
// to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings,
//  then comparing their sequences of UTF-16 code units values.
 let sorted = [1,23,4,5,1111];
 console.log(sorted.sort());

 let sorted1 = ["red", "blue", "yellow", "pink", "lightblue"];
console.log(sorted1.sort());


// filter arrays

let ar = [13,23,-3,-56,12];
let fil = ar.filter(function(value){

    return value > 0;
})

console.log(fil);


// mapping arrays - map each element of array to something else

let num = [7,8,9,10];
console.log(num);

let items = num.map(function(value){
    return 'student_no' + value;
})

console.log(items);

// mapping with objects

let num3 = [2,3,4,5]

let items1 = num3.map(function(val){

    return {value:val}
});

console.log(items1);

// function - A block of code that fullfil specific task

function run(){

    console.log('running');
}

run();

function sum(a,b){

    return a+b;
}

console.log(sum(4,5));

// Hoisting - It is process of moving function declaration to the 
// top of the file

run1();
function run1(){
    console.log('running');
}

// function assignment
let stand = function walk(){
    console.log('walking');
}

stand();

// Anonymous function assignment

let stand2 = function(){
    console.log('working');
}

stand2();

function sum2(a, b){
    return a+b;
}
console.log(sum2(1)); // NaN(not a number)
console.log(sum2()); // NaN
console.log(sum2(1,2,3,4,5));

// special object argument

function sum3(a,b){
    console.log(arguments); // It is array like object which save the remaining value
    return a+b;
}
console.log(sum3(1,2,3,4,5,6));

function sum4(a,b){
    let total = 0;
    for(let value of arguments)
    total = total + value;
   return total;
}

let ans = sum4(1,2,3,4);
console.log(ans);

// Rest operator - The rest operator in js allows a function to take
// an indefinite number of arguments and bundle them in an array

function sum_1(...args){

    console.log(args);
}

sum_1(1,2,3,4,5);

function sum_2(num,...args){

    console.log(args);
}

sum_2(1,2,3,4,5);

// function sum_3(...args,num1){ // it will not work because of rest, it print only parameter before rest operator

//     console.log(args);
// }

// sum_3(1,2,3,4,5);

// Default parameter - allows the users that they can initialize a function with the default 
// value even if there are no arguments supplied to the function call.

function interest(p,r = 10,y = 10){
    return p*r*y/100
}

console.log(interest(10,8));
console.log(interest(10,undefined,10));


function interest(p,r = 10,y = 10){
    return p*r*y/100
}

console.log(interest(10,undefined, 8)); // hack it use 8 parameter value(not a good practice)
























