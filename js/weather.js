const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY ="686a73df8afa13ecc2c99704f6470090";

weather.style.fontWeight="800";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
 const url= ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
 fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `🌏${data.name}`;
      weather.innerText = `${data.weather[0].main} (🌡${data.main.temp} ℃)`;
    });
}
function onGeoError(){
 alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);