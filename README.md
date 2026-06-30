# Weather App

A clean, glassmorphic weather app built with vanilla HTML, CSS, and JavaScript. It fetches real-time weather data and a 5-day forecast using the WeatherAPI service.

## Features

- **Live Weather Search** – Search any city to get current weather conditions.
- **5-Day Forecast** – Horizontal scrollable forecast cards showing daily max temperature and conditions.
- **Current Conditions** – Displays temperature, weather condition, humidity, and wind speed.
- **Default City** – Loads weather for a default city automatically when the page opens.
- **Modern UI** – Glassmorphism-style design with a frosted glass card, gradient background, and smooth blur effects.
- **Responsive Layout** – Looks good on both desktop and mobile screens.

## Tech Stack

- **HTML5** – Page structure
- **CSS3** – Styling, glassmorphism effects, responsive layout
- **JavaScript (Vanilla)** – Fetch API calls, DOM manipulation
- **WeatherAPI** – Weather data and forecast source

## Project Structure

- index.html — Main HTML file
- style.css — Styling for the app
- script.js — Fetches and displays weather data

## Getting Started

1. Clone or download this repository.
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git](https://github.com/KishanSaha2000/Weather-Forcasting-App.git
   ```
2. Open `index.html` directly in your browser.
3. Type a city name in the search box and click the search icon to view its weather.

## API Key Note

This project uses a free API key from [WeatherAPI](https://www.weatherapi.com/) directly in `script.js`. Since this is a client-side only project, the key is visible to anyone viewing the source code. For a personal or learning project this is usually fine, but if you plan to scale this up, consider:

- Using a backend/server to keep the key hidden.
- Restricting the key's usage/domain from your WeatherAPI dashboard.
- Generating your own key rather than reusing one from a public repo.

## Usage

- On page load, the app automatically shows weather for a default city (set in `script.js`).
- Type any city name into the search bar and click the search button (🔍) to fetch its current weather and forecast.
- If a city isn't found, the app displays a "City not found" message.

## Future Improvements

- Add geolocation to auto-detect the user's current city.
- Add unit toggle (Celsius/Fahrenheit).
- Add error handling for empty/invalid input.
- Add hourly forecast view.

## License

This project is open source and available under the [MIT License](LICENSE).
