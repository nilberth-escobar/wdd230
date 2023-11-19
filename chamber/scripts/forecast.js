
// Replacing my API_KEY with my actual OpenWeatherMap API key
const apiKey = '07a6891b654157fa8c4b6425fed82e74';

// Replace '14.94' and '-91.83' with the latitude and longitude of my location
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=14.94&lon=-91.83&appid=${apiKey}&units=metric`;

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