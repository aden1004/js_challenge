const API_KEY = "b0395e9d33353f0e7e9cf1d90610db36";
//const lat = "35.8156956632149";
//const lon = "128.64386249994";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => { 
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
};

function onGeoError(error) {
    console.error("Error getting location:", error.message);
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);