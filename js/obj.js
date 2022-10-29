"use strict";

const japaneseRestaurant = {
  name: "Banzai",
  location: "108 Markham Wood Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seawood Salad", "Tempure Shrimp", "Edmame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],
  workHours: {
    wednesday: {
      open: 10,
      close: 23,
    },
    friday: {
      open: 10,
      close: 23,
    },
    sunday: {
      open: 12,
      close: 21,
    },
  },
  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
  foodDelivery: function ({
    deliveryTime,
    address,
    mainMenuIndex,
    appetizersIndex,
  }) {
    console.log(
      `Your order on the way ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrive in ${address} at ${deliveryTime}`
    );
  },
  orderSushi: function (ing1, ing2, ing3) {
    console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`);
  },
};
japaneseRestaurant.foodDelivery({
  deliveryTime: "12:30",
  address: "108 Markham Wood Rd, Longwood, USA",
  mainMenuIndex: 1,
  appetizersIndex: 0,
});
// destructuring objects
const { workHours: hours, name: restNmae, categories } = japaneseRestaurant;
console.log(hours, restNmae, categories);

// default values
const { menu = [], appetizers: startMenu = [] } = japaneseRestaurant;
console.log(menu, startMenu);
// Mutating Variable
let x = 3;
let y = 5;
const obj = { x: 11, y: 22, z: 33 };
({ x, y } = obj);
console.log(x, y);
// Nested Objects
const {
  sunday: { open: openHours, close: closeHours },
} = hours;
console.log(openHours, closeHours);

const arr = [1, 3, 5];
// old approach
const newArr = [7, 9, arr[0], arr[1], arr[2]];
console.log(newArr);
// new approach with Spread Operator
const newArrSpread = [7, 9, ...arr];
console.log(newArrSpread);
const newMenu = [...japaneseRestaurant.mainMenu, "Miso Salmon", "Fish"];
console.log(newMenu);

// Array copying
const categoriesCopy = [...japaneseRestaurant.categories];
console.log("copy: ", categoriesCopy);
// Merge Arrays
const menuMerge = [
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];
console.log("merge: ", menuMerge);

// iterable - arrays, strings, maps, sets. OBJECTS - are NOT iterable
// // Spread operator with Strings
// const greeting = "Hello";
// const gtreetingHello = [...greeting, "!"];
// console.log(gtreetingHello);
// console.log(...greeting);

// const ingredients = [
//   prompt(`ingredient 1 for your sushi`),
//   prompt(`ingredient 2 for your sushi`),
//   prompt(`ingredient 3 for your sushi`),
// ];
// console.log(ingredients);
// japaneseRestaurant.orderSushi(...ingredients);

// Objects
const newJapaneseRest = {
  foundationDate: 2022,
  ...japaneseRestaurant,
  owner: "Suzuki",
};
const japaneseRestaurantCopy = {
  ...japaneseRestaurant,
};
japaneseRestaurantCopy.name = "Suzuki Sushi";
console.log(japaneseRestaurant.name);
console.log(japaneseRestaurantCopy.name);
