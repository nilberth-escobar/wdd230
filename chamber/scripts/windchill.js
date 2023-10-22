// windchill.js

function calculateWindChill() {
    // Get the temperature and wind speed inputs from the page
    const temperature = document.getElementById("temperature").value;
    const windSpeed = document.getElementById("windSpeed").value;
  
    // Check if the temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate the wind chill factor
      const windChill = 35.75 - (0.621371 * temperature) - (35.75 * windSpeed) + (0.4275 * temperature * windSpeed);
  
      // Display the wind chill factor in the weather section
      document.getElementById("windChill").innerHTML = `Wind Chill: ${windChill}°F`;
    } else {
      // Display "N/A" if the input values did not meet the requirements
      document.getElementById("windChill").innerHTML = "N/A";
    }
  }