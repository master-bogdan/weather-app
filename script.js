'use strict';

    let cityId = '361058';
    let cityIdArr = function() {
    const btns = document.querySelectorAll('.btn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(){
                cityId = btns[i].value;
                getWeather(cityId);
            });
        }
         console.log(btns);
    };

    console.log(cityId);
    console.log(cityIdArr(361058));

    getWeather(cityId);

function getWeather(cityId) {
    const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=ab301f47bc888b6dd8fbe9ec9461c9e2&lang=ru`);   
fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.temperature').innerHTML= 'Температура ' + Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.min-temperature').innerHTML= 'Минимальная температура ' + Math.round(data.main.temp_min - 273) + '&deg;';
            document.querySelector('.max-temperature').innerHTML= 'Максимальная температура ' + Math.round(data.main.temp_max - 273) + '&deg;';
            document.querySelector('.condition').textContent = data.weather[0].description;
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
            document.querySelector('.pressure').textContent = `Давление ${data.main.pressure} мбар`;
            document.querySelector('.wind').innerHTML = `Скорость ветра ${data.wind.speed} м/с`;
            document.querySelector('.sunset').textContent = data.sys.sunset;
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
