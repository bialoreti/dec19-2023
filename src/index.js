function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  axios
    .get(`${apiCall}?query=${cityInput.value}&key=${apiKey}`)
    .then(showTemperature);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let apiKey = "932b0cf59t619af0fb48c1o3bb3c2680";
let apiCall = "https://api.shecodes.io/weather/v1/current";

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("#temp");
  h1.innerHTML = `${temperature}`;
  
  
}
let cityInput = document.querySelector("#city-input");

axios.get(`${apiCall}?query=${cityInput.value}&key=${apiKey}`).then(showTemperature);
