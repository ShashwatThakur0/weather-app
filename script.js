// API key from OpenWeatherMap - Replace with your own API key
const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";

// DOM elements
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details-container');
const error404 = document.querySelector('.not-found');
const forecastContainer = document.querySelector('.forecast-container');
const apiInstructions = document.querySelector('.api-instructions');

// Weather condition to icon mapping
const weatherIcons = {
    'Clear': 'fa-sun',
    'Clouds': 'fa-cloud',
    'Rain': 'fa-cloud-rain',
    'Drizzle': 'fa-cloud-rain',
    'Mist': 'fa-smog',
    'Smoke': 'fa-smog',
    'Haze': 'fa-smog',
    'Dust': 'fa-smog',
    'Fog': 'fa-smog',
    'Sand': 'fa-smog',
    'Ash': 'fa-smog',
    'Squall': 'fa-wind',
    'Tornado': 'fa-tornado',
    'Snow': 'fa-snowflake',
    'Thunderstorm': 'fa-cloud-bolt'
};

// Days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Function to check if API key is valid
function isValidApiKey() {
    return apiKey && apiKey !== "YOUR_API_KEY_HERE";
}

// Function to show API key error
function showApiKeyError() {
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    error404.style.display = 'none';
    forecastContainer.style.display = 'none';
    apiInstructions.style.display = 'block';
    container.style.height = 'auto';
}

// Event listener for search button
search.addEventListener('click', () => {
    if (!isValidApiKey()) {
        showApiKeyError();
        return;
    }

    const city = document.querySelector('.search-box input').value;
    if (city === '') return;

    getWeatherData(city);
});

// Event listener for Enter key
document.querySelector('.search-box input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (!isValidApiKey()) {
            showApiKeyError();
            return;
        }

        const city = document.querySelector('.search-box input').value;
        if (city === '') return;

        getWeatherData(city);
    }
});

// Function to get weather data
async function getWeatherData(city) {
    // Check if API key is valid
    if (!isValidApiKey()) {
        showApiKeyError();
        return;
    }

    try {
        // Fetch current weather data
        const response = await fetch(`${apiUrl}q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = await response.json();

        // Handle city not found
        if (weatherData.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            forecastContainer.style.display = 'none';
            apiInstructions.style.display = 'none';
            error404.style.display = 'block';
            return;
        }

        // Handle unauthorized (invalid API key)
        if (weatherData.cod === 401 || weatherData.cod === '401') {
            showApiKeyError();
            return;
        }

        // Fetch forecast data
        const forecastResponse = await fetch(`${forecastUrl}q=${city}&units=metric&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();

        // Update UI with weather data
        updateWeatherUI(weatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Show API instructions if there's an error that might be related to API key
        if (error.message && error.message.includes('Failed to fetch')) {
            showApiKeyError();
        }
    }
}

// Function to update weather UI
function updateWeatherUI(weatherData, forecastData) {
    // Hide error message and show weather data
    error404.style.display = 'none';
    apiInstructions.style.display = 'none';
    weatherBox.style.display = 'block';
    weatherDetails.style.display = 'block';
    forecastContainer.style.display = 'block';
    container.style.height = 'auto';

    // Update current weather
    const weatherStatus = document.querySelector('.weather-status i');
    const temperature = document.querySelector('.temperature .num');
    const description = document.querySelector('.description .condition');
    const location = document.querySelector('.description .location span');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.wind-speed');
    const feelsLike = document.querySelector('.feels-like');
    const pressure = document.querySelector('.pressure');

    // Get weather condition and set appropriate icon
    const weatherCondition = weatherData.weather[0].main;
    weatherStatus.className = 'fa-solid ' + (weatherIcons[weatherCondition] || 'fa-cloud');

    // Update temperature, description, and location
    temperature.innerHTML = `${Math.round(weatherData.main.temp)}`;
    description.innerHTML = weatherData.weather[0].description;
    location.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;

    // Update weather details
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed} km/h`;
    feelsLike.innerHTML = `${Math.round(weatherData.main.feels_like)}°C`;
    pressure.innerHTML = `${weatherData.main.pressure} hPa`;

    // Update forecast
    updateForecast(forecastData);
}

// Function to update forecast
function updateForecast(forecastData) {
    const forecastCards = document.querySelector('.forecast-cards');
    forecastCards.innerHTML = '';

    // Get forecast for next 5 days (every 24 hours)
    const dailyForecasts = [];
    const today = new Date().getDay();

    // Group forecasts by day
    const forecastsByDay = {};

    forecastData.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.getDay();

        // Skip today's forecasts
        if (day !== today) {
            if (!forecastsByDay[day]) {
                forecastsByDay[day] = [];
            }
            forecastsByDay[day].push(forecast);
        }
    });

    // Get one forecast per day (at noon if possible)
    Object.keys(forecastsByDay).forEach(day => {
        const forecasts = forecastsByDay[day];

        // Try to find forecast around noon
        let selectedForecast = forecasts[0];
        for (const forecast of forecasts) {
            const date = new Date(forecast.dt * 1000);
            const hour = date.getHours();

            // Prefer forecasts around noon
            if (hour >= 11 && hour <= 14) {
                selectedForecast = forecast;
                break;
            }
        }

        dailyForecasts.push(selectedForecast);
    });

    // Limit to 5 days
    dailyForecasts.slice(0, 5).forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = days[date.getDay()];
        const temp = Math.round(forecast.main.temp);
        const weatherCondition = forecast.weather[0].main;
        const icon = weatherIcons[weatherCondition] || 'fa-cloud';

        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="day">${dayName}</div>
            <i class="fa-solid ${icon}"></i>
            <div class="temp">${temp}°C</div>
            <div class="condition">${forecast.weather[0].description}</div>
        `;

        forecastCards.appendChild(forecastCard);
    });
}

// Load weather data for default city on page load
window.addEventListener('load', () => {
    // Check if API key is valid
    if (!isValidApiKey()) {
        showApiKeyError();
        return;
    }

    // Default city
    getWeatherData('London');
});