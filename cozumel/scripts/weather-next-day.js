document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '07a6891b654157fa8c4b6425fed82e74';
    const latitude = '20.45';
    const longitude = '-86.91';
    
    async function getWeather() {
      const currentDate = new Date();
      const tomorrowDate = new Date();
      tomorrowDate.setDate(currentDate.getDate() + 1);
      tomorrowDate.setHours(15, 0, 0, 0); // Set to 3:00 PM

      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
      const data = await response.json();

      const weatherForNextDay = data.list.find(item => {
        const itemDate = new Date(item.dt_txt);
        return itemDate.getTime() === tomorrowDate.getTime();
      });

      if (weatherForNextDay) {
        const weatherInfo = document.getElementById('weather-info');
        const temperature = weatherForNextDay.main.temp;
        const description = weatherForNextDay.weather[0].description;

        weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                 <p>Description: ${description}</p>`;
      } else {
        console.error('Weather data not found for the next day at 3pm.');
      }
    }

    getWeather();
  });