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
/*** 
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
*/
// Функции возвращающие функции
/***
const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}`);
  };
};
// const hi = greet("Hi!");
// console.log(hi("Nariman"));
greet("hello")("Nar!");

const greetArr = (greetingText) => (name) => {
  console.log(`${greetingText} ${name}`);
};
const arr = greetArr("Hi from arrow!");
console.log(arr("Nar!"));

// 135 Methods Call() an Apply()
const airline1234 = {
  airlineName: "SkyUp",
  iataCode: "SU",
  booking: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`
    );
    this.booking.push({
      flight: `${this.iataCode} ${flightNumber}`,
    });
  },
};
airline1234.book(346, "Nar Mirmanov");
airline1234.book(344, "Nick Mirmanov");
airline1234.book(347, "Narik Mirmanov");
console.log(airline1234);

const airline567 = {
  airlineName: "FlySky",
  iataCode: "FS",
  booking: [],
};
***/
// Bind
const airline1 = {
  airlineName: "SkyUp",
  iataCode: "SU",
  booking: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`
    );
    this.booking.push({
      flight: `${this.iataCode} ${flightNumber}`,
    });
  },
};
// const airline2 = {
//   airlineName: "FlySky",
//   iataCode: "FS",
//   booking: [],
// };
// const book = airline1.book;
// console.log(book);
airline1.book(346, "Nar Mirmanov");
// airline1.book(344, "Nick Mirmanov");
// airline1.book(347, "Narik Mirmanov");
// console.log(book.call(airline1, 1, "Nar B2"));
// console.log(airline1);

// const bookAirline2 = book.bind(airline2);
// bookAirline2(24, "Nar M");
// console.log(airline2);
airline1.airplanes = 200;
airline1.purchaseAirplane = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};
airline1.purchaseAirplane();

document
  .querySelector("#purchase")
  .addEventListener("click", airline1.purchaseAirplane.bind(airline1));

const getPercentage = (totalValue, value) => (value / totalValue) * 100;
// console.log(getPercentage(2, 400));
const getPercentage10992 = getPercentage.bind(null, 10992);

console.log(getPercentage10992(109.92));
