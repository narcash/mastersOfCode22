"use strict";
/*** 
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

*/

// const curruncies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["CNY", "Chinese yuan"],
// ]);
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

//////////////////////////////////////////////////////////////////////////

// let letters = ["a", "b", "c", "d", "e", "f"];

// slice() создает копию и возвращает новый
// console.log(letters.slice(1));
// console.log(letters.slice(0, 4));
// console.log(letters);

// splice() возвращает вырезанный массив, меняет оригинальный массив

// console.log(letters.splice(1, 4));
// console.log(letters);

// reverse() возвращает массив в обратном порядке, меняет оригинальный массив
// console.log(letters.reverse());

// concat() соединяет массивы. исходный массив не меняется
// let letters1 = ["a", "b", "c", "d"];
// let letters2 = ["d", "e", "f", "g"];
// console.log(letters1.concat(letters2));
// console.log([...letters1, ...letters2]);

// join() пречисляет элементы массива
// let letters = ["a", "b", "c", "d"];
// console.log(letters.join(","));

// forEach Iteration
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited!`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew!`);
//   }
// }
/***
transactions.forEach(function (transaction, index) {
  if (transaction > 0) {
    console.log(`Transaction №${index + 1}: ${transaction}$ was deposited!`);
  } else {
    console.log(
      `Transaction №${index + 1}: ${Math.abs(transaction)}$ was withdrew!`
    );
  }
});

// forEach c Map and Set
// Map
const curruncies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["CNY", "Chinese yuan"],
]);
curruncies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// Set
const uniqueCurruncies = new Set([
  "USD",
  "EUR",
  "USD",
  "CNY",
  "USD",
  "CNY",
  "CNY",
]);
console.log(uniqueCurruncies);
uniqueCurruncies.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});


// array.Map()
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const usdToEuro = 1.01;
// const transactionsEuro = transactions.map(function (trans) {
//   return trans * usdToEuro;
// });
const transactionsEuro = transactions.map((trans) => trans * usdToEuro);
console.log(transactions);
console.log(transactionsEuro);

const transactionsEuro1 = [];
for (const trans of transactions) {
  transactionsEuro1.push(trans * usdToEuro);
}
console.log(transactionsEuro1);

// const transactionDescriptions = transactions.map((trans, index, array) => {
//   let description = "";
//   if (trans > 0) {
//     description = `Transaction №${index + 1}: ${trans}$ was deposited!`;
//   } else {
//     description = `Transaction №${index + 1}: ${Math.abs(
//       trans
//     )}$ was withdrew!`;
//   }
//   return description;
// });

const transactionDescriptions = transactions.map(
  (transaction, index, array) =>
    `Transaction №${index + 1}: ${Math.abs(transaction)} was ${
      transaction > 0 ? "deposited" : "withdrew"
    }`
);
console.log(transactionDescriptions);


// array.filter()
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const withdrawls = transactions.filter(function (trans) {
  return trans < 0;
});
console.log(withdrawls);
const withdrawls1 = [];
for (const trans of transactions) {
  if (trans < 0) {
    withdrawls1.push(trans);
  }
}
console.log(withdrawls1);

const deposits = transactions.filter((trans) => trans > 0);

console.log(deposits);
const deposits1 = [];

for (const trans of transactions) {
  if (trans > 0) {
    deposits1.push(trans);
  }
}
console.log(deposits1);


// reduce()
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const balance = transactions.reduce(function (accum, item, index, array) {
//   // console.log(accum);
//   return accum + item;
// }, 0);
const balance = transactions.reduce(
  (accum, item, index, array) => accum + item,
  0
);
console.log(balance);

const min = transactions.reduce(
  (accum, trans) => (accum < trans ? accum : trans),
  transactions[0]
);
console.log(`Min of transactions is '${min}'`);

let balance1 = 0;

for (const trans of transactions) {
  balance1 += trans;
}
console.log(balance1);
*/
// 161 Method Chining
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const totalWithdrawlsInEuro = transactions
  .filter((trans) => trans < 0)
  .map((trans) => trans * 1.02)
  .reduce((accum, trans) => accum + trans, 0);

console.log(transactions);
console.log(totalWithdrawlsInEuro);
