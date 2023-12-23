const apiKey = "e242a2a0a67c451dba2140920231912";
const city = "Marratxí"

async function getWeather(apiKey, city) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      updateWeatherUI(data);
    } catch (error) {
      console.error('Error al obtener datos meteorológicos:', error);
    }
  }
  
  function updateWeatherUI(data) {
    const cityNameElement = document.querySelector('#currentWeather h2');
    const currentWeatherIconElement = document.querySelector('#currentWeather .weather-icon');

    const temperatureValueElement = document.querySelector('#currentWeather .current-grades div');
    const weatherStateElement = document.querySelector('#currentWeather p');
    const weatherIconElement = document.querySelector('.weather-icon');
    const temperatureElement = document.querySelector('.current-grades img');
    const precipitationElement = document.querySelector('#currentWeather ul li:nth-child(1)');
    const humidityElement = document.querySelector('#currentWeather ul li:nth-child(2)');
    const windElement = document.querySelector('#currentWeather ul li:nth-child(3)');
  
    cityNameElement.textContent = data.location.name + ', ' + data.location.country;
    weatherStateElement.textContent = data.current.condition.text;
    weatherIconElement.src = data.current.condition.icon;
    currentWeatherIconElement.src = data.current.condition.icon;
    temperatureElement.src = data.current.condition.icon
    temperatureValueElement.textContent = `${data.current.temp_c}`;
    precipitationElement.textContent = 'Precipitaciones: ' + data.current.precip_mm + 'mm';
    humidityElement.textContent = 'Humedad: ' + data.current.humidity + '%';
    windElement.textContent = 'Viento: ' + data.current.wind_kph + ' km/h';
  
    const forecastListElement = document.getElementById('forecastWeather');
    forecastListElement.innerHTML = ''; 

    data.forecast.forecastday[0].hour.forEach(hour => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>
          <img class="weather-icon" src="${hour.condition.icon}" alt="${hour.temp_c}°C">
        </span>
        <span>${hour.temp_c}°C</span>
      `;
      forecastListElement.appendChild(listItem);
    });

    

  }
  getWeather(apiKey, city);
  
