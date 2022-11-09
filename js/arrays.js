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

// 161 Method Chining
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const totalWithdrawlsInEuro = transactions
  .filter((trans) => trans < 0)
  .map((trans) => trans * 1.02)
  .reduce((accum, trans) => accum + trans, 0);

console.log(transactions);
console.log(totalWithdrawlsInEuro);
*/

// find()
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const firstDeposit = transactions.find((trans) => trans > 0);
// const firstWithdraw = transactions.find((trans) => trans < 0);
// console.log(firstDeposit);
// console.log(firstWithdraw);

// some(), every()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// console.log(transactions.includes(300));
// // console.log(transactions.includes(1000));
// const hasWithDrawls = transactions.some((trans) => trans < 0);
// console.log(hasWithDrawls);
// console.log(transactions.every((trans) => trans < 0));

// flat() flatMap()

// const someArr = [[1, [22, 33], 3], [5, 6, 4], 11, 10];
// const someArr2 = someArr.flat();
// console.log(someArr2.flat());
// console.log(someArr);
/**   


const allTransactionsArrays = accounts.map((account) => account.transactions);
console.log(allTransactionsArrays);
const allTransactions = allTransactionsArrays.flat();
console.log(allTransactions);

const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);
console.log(bankBalance);

const bankBalance1 = accounts
  .flatMap((account) => account.transactions)
  .reduce((acc, trans) => acc + trans, 0);
console.log(bankBalance1);

// Сортировка массивов
// sort()

const names = ["Nar", "Julia", "Mikhael", "Mir", "Curry", "Bronny"];
const sortNames = names.sort();
console.log(names);
const sortNumber = [2000, 6400, -1350, -70, -210, -2000, 5500, -30];
sortNumber.sort((x, y) => y- x);
console.log(sortNumber);
*/

/**************** 177  Методы массивов  ************************/
const account1 = {
  userName: "Cecil Ireland",
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: "Amani Salt",
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: "Corey Martinez",
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: "Kamile Searle",
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: "Oliver Avila",
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Ex. 1
const bankDepositTotal = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans > 0)
  .reduce((acc, trans) => acc + trans, 0);
console.log(bankDepositTotal);

// Ex. 2
/*** 
const withdrawlOver300 = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans <= -300).length;
console.log(withdrawlOver300);
*/
const withdrawlOver300 = accounts
  .flatMap((account) => account.transactions)
  .reduce((acc, trans) => (trans <= -300 ? acc + 1 : acc), 0);

console.log(withdrawlOver300);

// Ex. 3

const { depositTotal, withdrawalsTotal } = accounts
  .flatMap((account) => account.transactions)
  .reduce(
    (acc, trans) => {
      // trans > 0 ? (acc.depositTotal += trans) : (acc.withdrawalsTotal += trans);
      acc[trans > 0 ? "depositTotal" : "withdrawalsTotal"] += trans;
      // debugger;
      return acc;
    },
    { depositTotal: 0, withdrawalsTotal: 0 }
  );
console.log(depositTotal, withdrawalsTotal);
// console.log(depositTotal);

// Ex. 4
// работа с массивами в javascript -> Работа с Массивами в Javascript
const text1 = "работа с массивами в javascript";
const text2 = "работа с массивами в javascript ПРОСТЫМ языком для новичков";
const text3 = "работа с массивами и строками в javascript";
const text4 = "для работы с массивами и строками в javascript";
const textToTitleCase = function (text) {
  const exeptions = ["с", "в", "и", "для", "на", "по", "о"];
  const capitalizeString = (word) => word[0].toUpperCase() + word.slice(1);
  const titleCase = text
    .toLowerCase()
    .split(" ")
    .map((word) => (exeptions.includes(word) ? word : capitalizeString(word)))
    .join(" ");
  return capitalizeString(titleCase);
};
console.log(textToTitleCase(text1));
console.log(textToTitleCase(text2));
console.log(textToTitleCase(text3));
console.log(textToTitleCase(text4));
