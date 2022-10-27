"use strict";
/**
console.log("hello scope");

function getAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);
  function printAge() {
    const info = `${firstName} is ${age} years old and was born in ${birthYear}`;
    console.log(info);
    if (age >= 18) {
      const adult = `${firstName} is adult`;
      console.log(adult);
    }
  }
  printAge();
  return age;
}

const firstName = "Nar";
getAge(1995);


// Hoisting, Variable Environment

// console.log(firstName);
// console.log(job);
// console.log(birthYear);

var firstName = "Nar";
let job = "programmer";
const birthYear = 1990;

console.log(declSum(1, 2));
// console.log(expSum(1, 2));
console.log(arrSum(1, 2));
function declSum(a, b) {
  return a + b;
}

const expSum = function (a, b) {
  return a + b;
};

const arrSum = (a, b) => a + b;


// This
// console.log(this);

const getAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
getAge(2002);

const getAgeArr = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};
getAgeArr(2002);

const user1990 = {
  birthYear: 1999,
  getAge: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
  },
};
user1990.getAge();

const user1991 = {
  birthYear: 2000,
};
user1991.getAge = user1990.getAge;
user1991.getAge();
 */
