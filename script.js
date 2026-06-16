const apiKey = '6e31faadc05924d992972e423032344f';

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
  const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      const weatherInfo = document.getElementById("weatherInfo");
      const { location, current, forecast } = data;

      const forecastHTML = forecast.forecastday.map(day => {
            const date = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });
            return `
            <div class="forecast-card">
                <div>${date}</div>
                <img src="${day.day.condition.icon}" alt="icon">
                <div>${day.day.maxtemp_c}°</div>
            </div>
            `;
        }).join('');

        weatherInfo.innerHTML = `
            <h2>${location.name}, ${location.country}</h2>
            <div>${new Date(location.localtime).toDateString()}</div>
            <img src="${current.condition.icon}" alt="weather">
            <div class="temperature">${current.temp_c}°C</div>
            <div class="condition">${current.condition.text}</div>

            <div class="details">
                <div>
                    <div>💧</div>
                    <div>${current.humidity}%</div>
                </div>
                <div>
                    <div>🌬️</div>
                    <div>${current.wind_kph} km/h</div>
                </div>
            </div>

            <div class="forecast">${forecastHTML}</div>
        `;

    })
    .catch(() => {
        document.getElementById("weatherInfo").innerHTML = "<p>City not found.</p>";
    })
}

// Load default city on page load
window.addEventListener("DOMContentLoaded", () => {
  fetchWeather("Kolkata"); // Set your default city here
});

