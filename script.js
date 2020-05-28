'use strict';

    let cityId = 361058;
    let cityIdArr = function() {
    const btns = document.querySelectorAll('.btn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(){
                cityId = btns[i].value;
                console.log();
                getWeather(cityId);
            });
        }
         console.log(btns);
    };
    cityId = cityIdArr;
    console.log(cityId);
    console.log(cityIdArr());

    


function getWeather(cityId) {
    const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=ab301f47bc888b6dd8fbe9ec9461c9e2`);   
fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.degrees').innerHTML= Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.condition').textContent = data.weather[0].description;
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
