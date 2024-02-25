let displayCountry = document.querySelector("#displaycountry");

function searchCountry(event) {
  event.preventDefault();
  let countryInput = document.querySelector("#country-input");
  displayCountry.innerHTML = `${countryInput.value}`;

  let apiKey = "0c34at1cabf819046a0fefad8d9fa0co";
  let city = countryInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("form");
let displayCity = form.addEventListener("submit", searchCountry);

function displayTemperature(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  console.log(currentTemperature);

  let todayTemperature = document.querySelector("#todaytemp");
  todayTemperature.innerHTML = `${currentTemperature}°C`;
}

//

let now = new Date();

let nowDayTime = document.querySelector("#current-day-time");

function formatDate(date) {
  let day = date.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

nowDayTime.innerHTML = formatDate(currentDate);

//
