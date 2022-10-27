"use strict";

const japaneseRestaurant = {
  name: "Banzai",
  location: "108 Markham Wood Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seawood Salad", "Tempure Shrimp", "Edmame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],
  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

// Returning 2 values from function
console.log(japaneseRestaurant.orderFood(2, 1));
const [appetizerS, mainM] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizerS, mainM);

// Nested Destructuring
const nestedArr = [1, 2, [3, 4]];
// const [a, , b] = nestedArr;
// console.log(a, b);
const [a, , [c, d]] = nestedArr;
console.log(a, c, d);

// Defult values
const unkwownArr = [1];
const [ab = 0, cd = 0, fg = 0] = unkwownArr;
console.log(ab, cd, fg);
