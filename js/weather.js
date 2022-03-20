const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "880f1ef47be871ae5871f72dd7d82145";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = `${data.name}, ${data.sys.country}`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });
    // console.log(`${lat} ${lon}`);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);