"use strict";
// Immedietly Invoked Function Expression (IIFE)
const runOneTime = function () {
  console.log("You will never see this function call again");
};
runOneTime();

// Closures
const safeBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers!`);
  };
};
const booker = safeBooking();

// Example 1
let f1;

const f2 = function () {
  const x = 11;
  f1 = function () {
    console.log(x ** 2);
  };
};

const f3 = function () {
  const y = 12;
  f1 = function () {
    console.log(y ** 2);
  };
};

const f4 = function () {
  const z = 13;
  f1 = function () {
    console.log(z ** 2);
  };
};
f2();
f1();
f1();
f1();
f3();
f1();
f1();
f4();
f1();
f2();
f1();
// Example 2
const boardPassengers = function (passengerNumber, secondBeforeBoarding) {
  const passengerInGroup = passengerNumber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumber} passengers are now boarding`);
    console.log(`Each group contains ${passengerInGroup} passengers`);
  }, secondBeforeBoarding * 3000);
  console.log(`The boarding will start in ${secondBeforeBoarding} seconds`);
};

boardPassengers(150, 3);
(function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "yellow";
  document.querySelector("body").addEventListener("click", function () {
    h1.style.color = "blue";
  });
})();
