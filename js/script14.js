'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const displayCountry = function (data, clasName = '') {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;

  const languges = data.languages;
  const firstLanguage = Object.values(languges)[0];

  const html = `
    <article class="country ${clasName}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
          +data.population / 1000000
        ).toFixed(1)} mln</p>
        <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
        <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/**
//////////////////////////////////////////////////////
// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const currencies = data.currencies;
//     const currencyName = Object.values(currencies)[0].name;
//     const currencySymbol = Object.values(currencies)[0].symbol;

//     const languges = data.languages;
//     const firstLanguage = Object.values(languges)[0];

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} mln</p>
//       <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//       <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const getCountryAndBorderCountries = function (countryName) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request1.send();
  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    console.log(data1);

    // Отображение страны
    displayCountry(data1);

    // Получаем первую соседнюю страну
    const [firstNeighbour] = data1.borders;
    if (!firstNeighbour) return;

    // Вызов AJAX для получения данных о первой соседней стране
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      displayCountry(data2, 'neighbour');
    });
  });
};
/**
 * 
 
const getCountryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(reaponse => reaponse.json())
    .then(data => {
      displayCountry(data[0]);
      const firstNeighbour = data[0].borders[0];
      console.log(firstNeighbour);
      if (!firstNeighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
    })
    .then(reaponse => reaponse.json())
    .then(data => displayCountry(data[0], 'neighbour'))
    .catch(e => {
      console.log(`${e} :(`);
      displayError(`Что-то пошло не так ${e.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('canada');
});
* /
// getCountryAndBorderCountries('usa');

// setTimeout(() => {
//   console.log('past 1 sec: ');
//   setTimeout(() => {
//     console.log('past 2 sec: ');
//     setTimeout(() => {
//       console.log('past 3 sec: ');
//       setTimeout(() => {
//         console.log('past 4 sec: ');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/ukraine');
// console.log(request);

// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(function (reaponse) {
//       console.log(reaponse);
//       return reaponse.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//     });
// };

// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(reaponse => reaponse.json())
//     .then(data => {
//       displayCountry(data[0]);
//       const firstNeighbour = data[0].borders[0];
//       console.log(firstNeighbour);
//       if (!firstNeighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then(reaponse => reaponse.json())
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.log(`${e} :(`);
//       displayError(`Что-то пошло не так ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('canada');
// });

// const displayCountryByGPS = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(reaponse => {
//       if (!reaponse.ok) throw new Error(`Error ${reaponse.status}`);
//       return reaponse.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(e => console.error(`${e.message} :(`));
// };
// displayCountryByGPS(35.756, 139.256);
// displayCountryByGPS(48.857, 2.358);
// displayCountryByGPS(40.708, -74.051);

// Пример работы с циклом событий
/** 
console.log('Test starts');
setTimeout(() => console.log('Timer 0 sec'), 0);

Promise.resolve('Done Promise 1').then(result => console.log(result));

Promise.resolve('Done Promise 2').then(result => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(result);
});
console.log('test ends');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Происходит розыгрыш!');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win!:)');
    } else {
      reject(new Error('You Lose!:('));
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('past 1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('past 2 sec');
    return wait(1);
  })
  .then(() => {
    console.log('past 3 sec');
    return wait(1);
  })
  .then(() => {
    console.log('past 4 sec');
    return wait(1);
  })
  .then(() => {
    console.log('past 5 sec');
    return wait(1);
  });

Promise.resolve('Resolved').then((res = console.log(res)));
Promise.reject(new Error('Rejected')).catch((err = console.log(err)));


// Промисификация  API

console.log('getting position');

const getUserPositoon = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   e => reject(e)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getUserPositoon()
//   .then(pos => console.log(pos))
//   .catch(e => console.error(e));

const displayUserCountry = function () {
  getUserPositoon()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Error w geocoords (error ${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
        'country is not find'
      );
    })
    .then(data => displayCountry(data[0]))
    .catch(e => {
      console.error(`${e}???`);
      displayError(`something is error: ${e.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
    .catch(e => console.error(`${e.message} &&&`));
};

displayUserCountry();
*/

const getUserPositoon = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCountryData = async function (countryName) {
  try {
    const userPosition = await getUserPositoon();
    const { latitude: lat, longitude: lng } = userPosition.coords;
    const geocodingResponse = await fetch(
      `https://geocode.xyz${lat},${lng}?geoit=json`
    );

    const geocodingData = await geocodingResponse.json();
    console.log(geocodingData);

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    console.log(data);
    displayCountry(data[0]);
  } catch (e) {
    console.error(`${e} (())`);
  }
};
console.log('sync code');
getCountryData('usa');
