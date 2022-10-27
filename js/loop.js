// console.log('push up repetition 1');
// console.log('push up repetition 2');
// console.log('push up repetition 3');
// console.log('push up repetition 4');
// console.log('push up repetition 5');
// console.log('push up repetition 6');
// console.log('push up repetition 7');
// console.log('push up repetition 8');
// console.log('push up repetition 9');
// console.log('push up repetition 10');
/** 
for(let i = 1; i <= 10; i += 3) {
    console.log(`Push up repetition ${i}`);
}
console.log('Out of loop!');


const user1 = ['Nar', 'Mir', 1990, 67, false, true, ['developer']];
const types = []
// console.log(types);
// console.log(user1[0]);
// console.log(user1[1]);
// console.log(user1[2]);
// console.log(user1[3]);

for(let i = 0; i < user1.length; i++){
    console.log(user1[i], typeof user1[i]);
    // types[i] = typeof user1[i]
    types.push(typeof user1[i]);
};
console.log(types);


const birthYear = [1990, 1994, 2002, 1989];

const ages = [];
for(let i = 0; i < birthYear.length; i++) {
    ages.push(2022 - birthYear[i]);
}
console.log(ages);


// continue & braek
const user1 = ['Nar', 'Mir', 1990, 67, false, 'true', ['developer']];

console.log('CONTINUE');
for(let i = 0; i < user1.length; i++){
    if(typeof user1[i] !== 'string') continue;
    console.log(user1[i], typeof user1[i]);
};

console.log('BREAK');
for(let i = 0; i < user1.length; i++){
    if(typeof user1[i] === 'number') break;
    console.log(user1[i], typeof user1[i]);
};



// 53
const user1 = ['Nar', 'Mir', 1990, 67, false, 'true', 'developer'];

console.log('BACKWARDS ITERATION');

for(let i = user1.length - 1; i >= 0; i--) {
    console.log(user1[i]);
}

console.log('LOOP IN LOOP!');
for(exercise = 1; exercise <= 3; exercise++) {
    console.log(`Exercise ${exercise}!`);
    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} ${rep}`);
    }
    console.log('Out of INNER LOOP');

}
console.log('Out of LOOP');


// While Loop

// console.log('FOR LOOP');

// for(let i = 1; i <= 10; i++) {
//     console.log(`Push up repetition ${i}`);
// }

// console.log('WHILE LOOP');

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Push up repetition ${rep}`);
//     rep++;
// }

let diceNumber = (Math.random() * 6) + 1;
console.log(`Dice number before loop: ${diceNumber}`);

while(diceNumber !== 6) {
    console.log(diceNumber);
    diceNumber = ~~((Math.random() * 6) + 1);
    console.log(`Dice number after random creation inside the loop: ${diceNumber}`);
}


// 55 loop Task

const calculateTips = (bill) => (bill < 20 ? bill * 0.2 : bill * 0.15);
const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTips(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calculateAverage([1, 2, 3]));
console.log(calculateAverage(totals));
console.log(calculateAverage(bills));
console.log(calculateAverage(tips));


// 62
const calculateHumidities = function (humidities) {
  let max = humidities[0];
  let min = humidities[0];
  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (currentHumidity !== "number") continue;
    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }
  console.log(min, max);
};
calculateHumidities([1, 0, 14, 5, -5, 17]);


// 64 breakpoints
const celciusToKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // value: +prompt("Temperature in Celcius"),
    value: 35,
  };
  //   console.log(measurement);
  //   console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(celciusToKelvin());

// Debugging
const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
  const humidities = h1.concat(h2);
  console.log(humidities);
  let max = humidities[0];
  let min = humidities[0];
  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (currentHumidity !== "number") continue;
    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }
  console.log(min, max);
  return max - min;
};
const amplitude = calculateHumiditiesAmplitudeTwoArrays(
  [1, 20, 50],
  [23, 48, 79]
);
console.log(amplitude);

*/
// 66 Dev Solution

const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}% in ${i + 1} days ... `;
  }
  console.log(str);
};

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);
