"use strict";
/*** 

const getAverage = (x, y, z) => (x + y + z) / 3;
// console.log(getAverage(1, 2, 3));
// The first quarater
const dept1AverSales1 = getAverage(35467, 29824, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);

console.log(dept1AverSales1, dept2AverSales1);
const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

const printBonus = function(dept1AverSales, dept2AverSales) {
    if(dept1AverSales > dept2AverSales) {
        const diff = dept1AverSales - dept2AverSales;
        const persent = diff / dept2AverSales * 100;
        if(persent >= 30) {
            console.log(`Dept 1 will geet a bonus of ${persent}%!`);
        } else {
            console.log('No bonus in this quarter!');
        }
    } else if (dept2AverSales > dept1AverSales) {
        const diff = dept2AverSales - dept1AverSales;
        const persent = diff / dept1AverSales * 100;
        if(persent >= 30) {
            console.log(`Dept 2 will get a bonus of ${persent}%!`);
        } else {
            console.log('No bonus in this quarter!');
        }
    } else {
        console.log('No bonus in this quarter!');
    }
}
printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);


// Array Methods

const numbers = [25, 54, 10, 4, 17];
 let result;

 result = numbers.length;
 result = Array.isArray(numbers);
 result = numbers.indexOf(17);
 result = numbers.push(18);
 result = numbers.pop();

 result = numbers.unshift(0, 12);
 result = numbers.shift();
 result = numbers.push(11, 19, 20);
 result = numbers.reverse();
 result = numbers.concat(result);



console.log(numbers);
 console.log(result);

 

 const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;
 const bills = [11, 20, 47];
 const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
 const totalBills = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
 console.log(bills, tips, totalBills);
 



// 46 Objects. Dot and bracket notation


// const myObj = {
//     name: 'Nar',
//     lastName: 'Mir',
//     birthYear: 1990,
//     job: 'programmer',
//     hasCar: true
// };
// console.log(myObj.name);
// console.log(myObj['name']);

// const baseName = 'Name';
// console.log(myObj['last' + baseName]);

// const userInput = prompt('What do you want to know about me? Choose name, lastName, birthYear, job, hasCar');

// if(myObj[userInput]) {
//     console.log(myObj[userInput]);
// } else {
//     console.log('this property does not exist! Choose name, lastName, birthYear, job, hasCar');
// }
//  creatr new properties

// const tg = 'telegram'
// myObj.location = 'Almaty';
// myObj[tg] = '@narcash';

// console.log(myObj);
// // chellange
// console.log(`${myObj.name} was born in ${myObj.birthYear} and his lastname is ${myObj['lastName']}`);


const myObj = {
    name: 'Nar',
    lastName: 'Mir',
    birthYear: 1990,
    job: 'programmer',
    hasCar: true,
    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }
    // calcAge: function() {
    //     // console.log(this.job);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function() {
        // console.log(this.job);
        this.age = 2022 - this.birthYear;
        return 2022 - this.birthYear;
        // console.log(this);
    },
    // getSummary: function() {
    //     console.log(`${myObj.name} is ${myObj.age} years old and he's job is ${myObj.job}. And he has a driver license`);
    // },
    getSummary: function() {
        return `${myObj.name} is ${this.calcAge()} - years old ${this.job}. And he has ${this.hasCar ? 'a' : 'no'} driver license`;
    }
};
console.log(myObj.calcAge());

// console.log(myObj.age);
console.log(myObj.getSummary());

// console.log(myObj.age);
// console.log(myObj.age);
// console.log(myObj['age']);


// 48

const jack = {
    firtsName: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.7,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi; 
    }
};
const mike = {
    firstName: 'Mike',
    lastName: 'Black',
    weight: 51,
    height: 1.93,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi; 
    }
};

console.log(~~(jack.calcBMI()));
console.log(~~(jack.bmi));

console.log(~~(mike.calcBMI()));
console.log(~~(mike.bmi));

console.log(`${mike.firstName}'s BMI is ${~~(mike.bmi)}`);

if(jack.bmi > mike.bmi) {
    console.log(`${jack.firtsName} ${jack.lastName} BMI (${~~(jack.bmi)}) is higher than ${mike.firstName} ${mike.lastName} (${~~(mike.bmi)})!`);
} else if (jack.bmi < mike.bmi) {
    console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) is higher than ${jack.firstName} ${jack.lastName} (${jack.bmi})!`);
} else {
    console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) and ${jack.firstName} ${jack.lastName} (${jack.bmi}) are equal!`);
}

// 100 Regular and Arrow Function
const user1990 = {
  firstName: "Nar",
  birthYear: 1990,
  getAge: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
    // Old approach
    // const self = this;
    // const isAdult = function () {
    //   console.log(self);
    //   console.log(2022 - self.birthYear >= 18);
    // };
    // New
    const isAdult = () => {
      console.log(this);
      console.log(2022 - this.birthYear >= 18);
    };
    isAdult();
  },
  sayGreeting: function () {
    console.log(`Hello ${this.firstName}`);
  },
};
user1990.sayGreeting();
user1990.getAge();
*/
// 101 Primitives and Refferencts Types
let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);

const x = {
  foo: "bar",
  a: 1,
};

const y = x;
y.a = 1;
console.log("Object X: ", x);
console.log("Object Y: ", y);
