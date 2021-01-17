'use strict';
const API_KEY = 'ab301f47bc888b6dd8fbe9ec9461c9e2';
let cityId = '361058';

// Функция даты
const date = new Date().toLocaleString();

const render = (data) => {
  const { name, main, weather, wind } = data;
  if (data) {
    document.querySelector('.lds-ring').style.display = 'none';
  }
  
  document.querySelector('.city-name').textContent = name;
  document.querySelector('.date').innerHTML = `Текущая дата и время ${date}`;
  document.querySelector('.temperature').innerHTML= 'Температура воздуха ' + Math.round(main.temp - 273) + '&deg;';
  document.querySelector('.condition').textContent = weather[0].description;
  document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`;
  document.querySelector('.pressure').textContent = `Атмосферное давление ${main.pressure} мбар`;
  document.querySelector('.wind').innerHTML = `Скорость ветра ${wind.speed} м/с`;
};

const renderError = (error) => {
  document.querySelector('.weather-box').insertAdjacentHTML('afterbegin', `<p>${error.message}</p>`);
}

// Функция получения погоды
const getWeather = async (cityId, api) => {
  const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${api}&lang=ru`);
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) {
      renderError(data);
    }
    render(data);
  } catch (error) {
    console.log(error);
  }
};

// Функция выбора ID города по клику на кнопку с Value города
const cityIdArr = () => {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((item) => {
    item.addEventListener('click', (event) => {
      cityId = event.currentTarget.value;
      getWeather(cityId, API_KEY);
    });
  });
};

cityIdArr();
getWeather(cityId, API_KEY);

// Cities ID
// Alexandria 361058
// Cairo 360630
// Dahab 358245
// Hurghada 361291
// Marsa Alam 352736
// Sharm-El-Sheikh 349340
