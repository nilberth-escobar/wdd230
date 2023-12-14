
// Replacing my API_KEY with my actual OpenWeatherMap API key
const apiKey = '07a6891b654157fa8c4b6425fed82e74';

// Replacing the latitude and longitude with Cozumel's
//20.45355995762803, -86.91409585229864
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.45&lon=-86.91&appid=${apiKey}&units=metric`;

// Fetch the weather forecast data
async function getWeatherForecast() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the request was successful
        if (response.ok) {
            displayForecast(data.list);
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display the weather forecast
function displayForecast(forecastList) {
  const forecastContainer = document.getElementById('forecast');
  const currentDate = new Date();

  const uniqueForecasts = {};

  forecastList.forEach(forecast => {
    const date = new Date(forecast.dt * 1000);

    if (date.toDateString() === currentDate.toDateString()) {
      return;
    }

    if (uniqueForecasts.hasOwnProperty(date.toDateString())) {
      return;
    }

    uniqueForecasts[date.toDateString()] = forecast;
  });

  for (const date in uniqueForecasts) {
    const forecast = uniqueForecasts[date];
    const dateString = new Date(forecast.dt * 1000).toDateString();
    const temperature = forecast.main.temp;
    const description = forecast.weather[0].description;
    const icon = forecast.weather[0].icon; // Added line for the icon

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');

    const dateElement = document.createElement('h3');
    dateElement.textContent = dateString;
    forecastItem.appendChild(dateElement);

    const iconElement = document.createElement('img'); // Added line for the icon element
    iconElement.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`); // Added line to set the icon source
    iconElement.setAttribute('alt', description);
    forecastItem.appendChild(iconElement); // Added line to append the icon element


    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    forecastItem.appendChild(descriptionElement);

    const temperatureElement = document.createElement('span');
    temperatureElement.textContent = temperature + ' °C';
    forecastItem.appendChild(temperatureElement);

    
    forecastContainer.appendChild(forecastItem);
  }
}

getWeatherForecast();

//NEW CODE

// Fetch current weather data
async function getCurrentWeather() {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.45&lon=-86.91&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(currentUrl);
        const data = await response.json();

        if (response.ok) {
            displayCurrentWeather(data);
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching current weather data:', error);
    }
}

// Display current weather data
function displayCurrentWeather(data) {
    const currentTempElement = document.getElementById('current-temp');
    const currentHumidityElement = document.getElementById('current-humidity');
    const weatherIconElement = document.getElementById('weather-icon');
    const weatherDescriptionElement = document.getElementById('weather-description');
    const highTempMessageElement = document.getElementById('high-temp-message');
    const closeMessageElement = document.getElementById('close-message');

    // Display current temperature
    currentTempElement.textContent = `${data.main.temp} °C`;

    // Display current humidity
    currentHumidityElement.textContent = `${data.main.humidity}% Humidity`;

    // Display weather icon and description
    const icon = data.weather[0].icon;
    weatherIconElement.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
    weatherIconElement.setAttribute('alt', data.weather[0].description);
    weatherDescriptionElement.textContent = data.weather[0].main;

    // Display the high temperature message
const tempMax = data.main.temp_max;
highTempMessageElement.textContent = `High temperature today: ${tempMax} °C`;

// Add close functionality to the message
closeMessageElement.addEventListener('click', () => {
    document.querySelector('.message').style.display = 'none';
});
}

// Fetch the next day's forecast at 15:00
async function getNextDayForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.45&lon=-86.91&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        if (response.ok) {
            displayNextDayForecast(data.list);
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Display the next day's forecast at 15:00
function displayNextDayForecast(forecastList) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

  const nextDayForecast = forecastList.find(forecast => {
    const date = new Date(forecast.dt * 1000);
    return date.getHours() === 15 && date > currentDate;
  });

  

    if (nextDayForecast) {
        const forecastContainer = document.getElementById('forecast');
        const temperature = nextDayForecast.main.temp;
        const description = nextDayForecast.weather[0].description;
        const icon = nextDayForecast.weather[0].icon;

        const forecastItem = documentElement('div');
        forecastItem.classList.add('forecast-item');

        const dateElement = document.createElement('h3');
        dateElement.innerHTML = 'Next Day Forecast';
        forecastItem.appendChild(dateElement);
    
        const iconElement = document.createElement('img');
        iconElement.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
        iconElement.setAttribute('alt', description);
        forecastItem.appendChild(iconElement);
    
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        forecastItem.appendChild(descriptionElement);
    
        const temperatureElement = document.createElement('span');
        temperatureElement.textContent = temperature + ' °C';
        forecastItem.appendChild(temperatureElement);
    
        forecastContainer.appendChild(forecastItem);
    }
}

// Fetch and display current weather, next day's forecast, and high temperature message
async function getWeatherData() {
await getCurrentWeather();
await getNextDayForecast();
displayNextDayForecast();
}

// Call the function to get weather data
getWeatherData();
