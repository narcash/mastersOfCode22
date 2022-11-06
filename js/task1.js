"use strict";
/*** 
const events = new Map([
  [19, "Goal"],
  [21, "Substitution"],
  [43, "Goal"],
  [56, "Substitution"],
  [69, "Yellow card"],
  [73, "Substitution"],
  [75, "Yellow card"],
  [79, "Substitution"],
  [81, "Red card"],
  [93, "Goal"],
]);

const game = {
  team1: "REAL MADRID",
  team2: "BARCELONA",
  players: [
    [
      "Courtois",
      "Vazquez",
      "Militao",
      "Nacho",
      "Mendy",
      "Casemiro",
      "Valverde",
      "Modrich",
      "Kroos",
      "Vinicius",
      "Benzema",
    ],
    [
      "Stegen",
      "Mingueza",
      "Araujo",
      "Lenglet",
      "Dest",
      "Busquets",
      "Jong",
      "Alba",
      "Messi",
      "Pedri",
      "Dembele",
    ],
  ],
  score: "2:1",
  scored: ["Kroos", "Benzema", "Mingueza", "Mingueza"],
  date: "Apr 10th, 2021",
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const players1Total = [
  ...players1,
  "Marcelo",
  "Isco",
  "Asensio",
  "Diaz",
  "Odriozola",
];
console.log(players1Total);
// 5
const {
  odds: { team1, draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...gamePlayers) {
  console.log(`${gamePlayers.length} scored`);
};
printGoals("Kroos", "Benzema", "Mingueza", "Ronaldo");
printGoals(...game.scored);
// 7
team1 < team2 && console.log(`${game.team2} is more likly win`);
team1 > team2 && console.log(`${game.team1} is more likly win`);

for (const [index, name] of game.scored.entries()) {
  // console.log(entry);
  console.log(`Goal ${index + 1} - ${name}`);
}
*/
/*** 
// 2
let oddSum = 0;
let odds = Object.values(game.odds);
for (const odd of Object.values(game.odds)) {
  oddSum += odd;
}
const averageOdd = oddSum / odds.length;
console.log(averageOdd);
// 3
for (const [teamName, odd] of Object.entries(game.odds)) {
  // console.log(teamName, odd);
  const multText = teamName === "draw" ? "draw" : `${game[teamName]} victory`;
  console.log(`Rate for ${multText}: ${odd}`);
}

const goalScorers = {};
for (const player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);

// 3.1

// console.log(events.values());
const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 3.2
events.delete(75);
console.log(events);
// 3.3

console.log(`On average, an event happened every ${90 / events.size} minutes`);
// 3.4

for (const [key, value] of events) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF ${key}: ${value}`);
}


// 139
// 4.1
const survey = {
  question: "What programming language would you like to learn?",
  options: ["0: JavaScript", "1: Python", "2: Ruby", "3: Java", "4: C#"],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    const answer = +prompt(
      `${this.question}\n${this.options.join("\n")}\n(Enter option Number)`
    );
    console.log(answer);
    if (
      typeof answer === "number" &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    }
    console.log(this.answers);
    this.printResults();
    this.printResults("string");
  },
  printResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Survey results:${this.answers.join(", ")}.`);
    }
  },
};
// survey.logNewAnswer();
survey.printResults("string");
document
  .querySelector("#survey")
  .addEventListener("click", survey.logNewAnswer.bind(survey));

// 152
const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJuliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJaneData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJuliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const veryfyCats = function (catsJane, catsJulia) {
  const catsJaneCorrect = catsJaneData1.slice();
  catsJaneCorrect.splice(0, 1);
  catsJaneCorrect.splice(-1);
  // console.log(catsJaneCorrect);
  const cats = catsJaneCorrect.concat(catsJulia);
  // console.log(cats);

  cats.forEach(function (catAge, index) {
    if (catAge >= 2) {
      console.log(`Cat №${index + 1} is adult and he is ${catAge} years old!`);
    } else {
      console.log(`Cat №${index + 1} is kitty and he is ${catAge} years old!`);
    }
  });
};

veryfyCats(catsJaneData1, catsJuliaData1);

const getAverageHumanAge = function (catAges) {
  const humanAges = catAges.map((catAge) =>
    catAge <= 2 ? catAge * 10 : catAge * 7
  );
  const adultCats = humanAges.filter((humanAge) => humanAge >= 18);
  const getAverageHumanAge =
    adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;

  return getAverageHumanAge;
};
const getAverageHumanAge1 = getAverageHumanAge([13, 1, 14, 2, 4, 5]);
const getAverageHumanAge2 = getAverageHumanAge([10, 1, 14, 2, 4, 5]);
console.log(getAverageHumanAge1);
console.log(getAverageHumanAge2);
*/
