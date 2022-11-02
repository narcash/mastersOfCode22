"use strict";
// console.log("hello");

// const flightNumber = "MN1234";
// const passengerK123 = {
//   firstName: "Jack",
//   lastName: "White",
//   passport: "HN121444",
// };

// const checkIn = function (flight, passenger) {};
// checkIn(flightNumber, passenger);

// 133 CallBack functions
const removeSpaces = function (text) {
  return text.replaceAll(" ", "").toLowerCase();
};
const upperFirstWord = function (text) {
  const [first, ...others] = text.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const converter = function (str, func) {
  console.log(`The original text: ${str}`);
  console.log(`The converted text: ${func(str)}`);

  console.log(`Converted by: ${func.name}`);
};
converter("Hello to everyone!", upperFirstWord);
converter("Hello to everyone!", removeSpaces);

// Callback functions are very common in JS
const twice = (num) => console.log(num * 2);
[1, 2, 3].forEach(twice);
