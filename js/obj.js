"use strict";

const weekdays = ["mon", "tue", "wed", "fri", "sun"];
const workingHours = {
  [weekdays[1]]: {
    open: 10,
    close: 23,
  },
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 12,
    close: 21,
  },
};
const japaneseRestaurant = {
  name: "Banzai",
  location: "108 Markham Wood Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seawood Salad", "Tempure Shrimp", "Edmame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],

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
// const {
//   sun: { open: openHours, close: closeHours },
// } = hours;
// console.log(openHours, closeHours);

// const arr = [1, 3, 5];
// // old approach
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);
// // new approach with Spread Operator
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// const newMenu = [...japaneseRestaurant.mainMenu, "Miso Salmon", "Fish"];
// console.log(newMenu);

// // Array copying
// const categoriesCopy = [...japaneseRestaurant.categories];
// console.log("copy: ", categoriesCopy);
// // Merge Arrays
// const menuMerge = [
//   ...japaneseRestaurant.appetizers,
//   ...japaneseRestaurant.mainMenu,
// ];
// console.log("merge: ", menuMerge);

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
// const newJapaneseRest = {
//   foundationDate: 2022,
//   ...japaneseRestaurant,
//   owner: "Suzuki",
// };
// const japaneseRestaurantCopy = {
//   ...japaneseRestaurant,
// };
// japaneseRestaurantCopy.name = "Suzuki Sushi";
// console.log(japaneseRestaurant.name);
// console.log(japaneseRestaurantCopy.name);

// const menU = [...japaneseRestaurant.mainMenu, ...japaneseRestaurant.appetizers];
// console.log("menU: ", menU);
// for (const x of menU) {
//   console.log(x);
// }

// 115
// for (const day of Object.key(workingHours)) {
//   console.log(day);
// }

// Property names
const props = Object.keys(workingHours);
console.log(props);
console.log(`"Banzai opens ${props.length} days in a week`);

for (const day of props) {
  console.log(day);
}

// Property values
const values = Object.values(workingHours);
console.log(values);

// Property names and values
const entries = Object.entries(workingHours);
console.log(entries);
// 118 Set
/***
  const orders = new Set([
  "Sushi",
  "Ramen",
  "Sushi",
  "Tempura",
  "Ramen",
  "Sushi",
]);
console.log(orders);
const hello = new Set("HeLLo!");
console.log(hello);
console.log(orders.size);
console.log(orders.has("Sushi"));
orders.add("Edamame");
orders.add("Edamame");
orders.delete("Edamame");
// orders.clear();

console.log(orders);
for (const order of orders) {
  console.log(order);
}

// remove dublicate
const mealIngredients = [
  "Rice",
  "Garlic",
  "Meat",
  "Pepper",
  "Garlic",
  "Meat",
  "Meat",
];
const mealIngredientsSet = new Set(mealIngredients);
console.log(mealIngredientsSet);
 */
// Map
const restaurant = new Map();
restaurant.set("name", "Burger");
restaurant.set(1, "New York, USA");
restaurant.set(2, "London, England");
console.log(restaurant.set(3, "Kiev, Ukraine"));
restaurant
  .set("categories", ["Japanese", "Sushi", "Vegetarian", "Organic"])
  .set("open", 10)
  .set("close", 23)
  .set(true, "Burger is open")
  .set(false, "Burger is closed");

console.log(restaurant.get("name"));
console.log(restaurant.get(3));
const currentTime = 24;
console.log(
  restaurant.get(
    currentTime > restaurant.get("open") &&
      currentTime < restaurant.get("close")
  )
);
console.log(restaurant.has("open"));
