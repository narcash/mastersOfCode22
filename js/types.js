// Primitive Data types

// String
// const someText = "Some Text";
// console.log(typeof someText);

// Number
// const someNumber = 11;
// console.log(typeof someNumber);

// Boolean true or false
// const someBoolean = true;
// console.log(typeof someBoolean);

// Null
// const someNull = null;
// console.log(typeof someNull);

// Undefined
// let someUndefined;
// console.log(typeof someUndefined);

// Symbol
// const someSymbol = Symbol();
// console.log(typeof someSymbol);

// Reference data types

// Array
// const someArray = [1, 'hello', 2];
// console.log(typeof someArray);

// Object Literal
// const someObjectLiteral = {
//     firstProperty: 1,
//     ssecondProperty: 'two',
//     thirdProperty: true
// };
// console.log(typeof someObjectLiteral);

// Function
// const someFunction = new Function();
// console.log(typeof someFunction);

// Date
// const someDate = new Date();
// console.log(typeof someDate);

// 14 Numbers Math

/*const firstNumber = 50;
const secondNumber = 7;
let result;*/

// Simple Math Operations
/*
result = firstNumber + secondNumber;
result = firstNumber - secondNumber;
result = firstNumber * secondNumber;
result = firstNumber / secondNumber;
result = firstNumber % secondNumber;
*/

// Math object
/*
result = Math.PI;
result = Math.round(3.5);
result = Math.ceil(2.3);
result = Math.floor(2.9);
result = Math.sqrt(9);
result = Math.abs(-7);
result = Math.pow(3, 4);
result = Math.min(3, 4, 9, 2, 8, 82, -4);
result = Math.max(3, 4, 9, 2, 8, 82, 900);
result = Math.floor(Math.random() * 100);

console.log(result);
 */

// 15 String Manipulation
/*
let result;
const firstName = 'Nariman';
const lastName = 'Mir';
const space = ' ';
const age = 32;
const greeting = 'Hello, World!';
*/

// Concatanation
/*
result = 'Nar';
result = 'Nar' + ' Mir';
result = greeting + space + 'My name is' + space + firstName + space + lastName + '!' + ' ' + 'I am ' + age + 'years old!';
*/

//Escaping
/*
result = 'I\'m 32 years old' ;
result = "I like \"Star Wars\"";
*/

//Properties and methods
/*
result = 'Hello World!'.length;
result = firstName.length;
*/

// Concat()
/*
result = firstName.concat(' ', lastName);
result = greeting.concat(space, 'My name is ', firstName, space, lastName,'!. ', 'I\'m ', age, space, 'years old!');
*/

// toUpperCase()
/*
result = result.toUpperCase();
result = result.toLowerCase();
*/
// index

/*
result = firstName[1];
result = firstName.indexOf('a');
result = firstName.lastIndexOf('a');
result = firstName.indexOf('s');
*/

// charAt()

/*
result = firstName.charAt(1);

const longString = 'Hey! I\'m a long string';
result = longString.charAt(longString.length - 1);
*/

// substring()

/*
result = greeting.substring(0, 5);
result = greeting.substring(7, 12);
*/

// slice()
/*
result = greeting.slice(7, 11);
result = greeting.slice(-6);
*/

// split()
/*
result = longString.split(' ');
const colors = 'red, green, blue, yellow';
result = colors.split(',');
result = firstName.split('');
*/


// replace
/*
result = colors.replace('red', 'white');
*/


// inncludes
/*
result = colors.includes('green');
console.log(result);

*/

// 16 Template Strings

const brand = 'Tesla';
const model = '3';
const color = 'white';
const year = 2022;

let carHtml;

// old approach before ES6
/**************************** 
carHtml = '<h3>' + 'Car desc' + '</h3>' + 
'<ul>' +
'<li>Brand: ' + brand + '</li>' +
'<li>Model: ' + model + '</li>' +
'<li>Color: ' + color + '</li>' +
'<li>Year: ' + year + '</li>' +
'</ul>'
document.body.innerHTML = carHtml;
*****************************/

carHtml = `

   <h3>Car Description</h3>
   <ul>
      <li>Brand: ${brand}</li>
      <li>Model: ${model}</li>
      <li>Color: ${color}</li>
      <li>Year: ${year}</li>
      <li>Year: ${2010 + 7}</li>
      <li>Tax: ${year < 2000 ?'20%' : '10%'}</li>
   </ul>

`;
document.body.innerHTML = carHtml;
