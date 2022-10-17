// let name = 'Nar';
// console.log(`My name is ${name}`);
// name = 'Nariman';
// console.log(`My name is ${name}`);

// const user = {
//     name: 'Nar',
//     gender: 'male',
//     isMarried: false,
//     age: 20
// }
// console.log(user);
// user.name = 'Nariman'
// console.log(user);

// const colors = ['red', 'green', 'yellow']
// console.log(colors);
// colors.push('black')
// console.log(colors);

/**

let userName,
    lastName,
    age;

userName = prompt('What is your name?');
lastName = prompt('What is your lastname');
age = prompt('How old are you?');

console.log(`Your name is ${userName}`);
console.log(`Your last name is ${lastName}`);
console.log(`Your are ${age} years old!`);
 
 
const weight = prompt('enter your weight in kilograms?');
const height = prompt('enter your height in meters?');
const BMI = weight / Math.pow(height, 2);
const areYouOverHeight = BMI >= 25;


if(areYouOverHeight) {
    console.log(`Yes, you are fat, your body index ${BMI - 25}`);
    alert(`Yes, you are fat, your body index ${BMI - 25}`);
} else {
    console.log(`No, you are normal`);
    alert(`No, you are normal`);
}
*/
// console.log(BMI);
// console.log(areYouOverHeight);

// Ternary Operator

const age = prompt('Enter your age?');
const message = (age >= 18) ? ('You can buy the alcohol!') : ('You can Not buy the alcohol');

console.log(message);
alert(message);