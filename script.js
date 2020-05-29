'use strict';

// Функция выбора ID города по клику на кнопку с Value города
    let cityId = '361058';
    let cityIdArr = function() {
    const btns = document.querySelectorAll('.btn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(){
                cityId = btns[i].value;
                getWeather(cityId);
            });
        }
    };

// Функция даты
    const date = new Date().toLocaleString();

    cityIdArr();
    getWeather(cityId);

function getWeather(cityId) {
    const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=ab301f47bc888b6dd8fbe9ec9461c9e2&lang=ru`);   
fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.date').innerHTML = `Текущая дата и  время ${date}`;
            document.querySelector('.temperature').innerHTML= 'Температура воздуха ' + Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.condition').textContent = data.weather[0].description;
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
            document.querySelector('.pressure').textContent = `Атмосферное давление ${data.main.pressure} мбар`;
            document.querySelector('.wind').innerHTML = `Скорость ветра ${data.wind.speed} м/с`;
        })
        .catch(function () {

        });
    }

// Cities ID
// Alexandria 361058
// Cairo 360630
// Dahab 358245
// Hurghada 361291
// Marsa Alam 352736
// Sharm-El-Sheikh 349340
