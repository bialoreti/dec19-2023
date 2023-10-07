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
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let city = prompt("Enter a city?");
city = city.toLowerCase(); 

let weather = [
  { 
    city: "paris",
    temp: 19.7,
    humidity: 80,
  },
{
    city: "tokyo",
    temp: 17.3,
    humidity: 50,
  },
   {
    city: "lisbon",
    temp: 30.2,
    humidity: 20,
  },
  {
    city: "san francisco",
    temp: 20.9,
    humidity: 100,
  },
   {
    city: "moscow",
    temp: -5,
    humidity: 20,
  },
];
if (weather[city] === undefined) {
  alert(
    `It is currently ${weather[0].temp} °C in ${weather.city} with a humidity of ${weather[0].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}


