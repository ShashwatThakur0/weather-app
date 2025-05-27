// API key from OpenWeatherMap - Loaded from config.js
const apiKey = config.apiKey;
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
const body = document.querySelector('body');

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

// Weather condition to background mapping
const weatherBackgrounds = {
    'Clear': {
        gradient: 'linear-gradient(135deg, #67b26f, #4ca2cd)',
        animation: ''
    },
    'Clouds': {
        gradient: 'linear-gradient(135deg, #6a85b6, #bac8e0)',
        animation: 'cloudy'
    },
    'Rain': {
        gradient: 'linear-gradient(135deg, #616161, #9bc5c3)',
        animation: 'rainy'
    },
    'Drizzle': {
        gradient: 'linear-gradient(135deg, #616161, #9bc5c3)',
        animation: 'rainy'
    },
    'Mist': {
        gradient: 'linear-gradient(135deg, #757f9a, #d7dde8)',
        animation: 'misty'
    },
    'Smoke': {
        gradient: 'linear-gradient(135deg, #757f9a, #d7dde8)',
        animation: 'misty'
    },
    'Haze': {
        gradient: 'linear-gradient(135deg, #757f9a, #d7dde8)',
        animation: 'misty'
    },
    'Dust': {
        gradient: 'linear-gradient(135deg, #c79081, #dfa579)',
        animation: 'misty'
    },
    'Fog': {
        gradient: 'linear-gradient(135deg, #757f9a, #d7dde8)',
        animation: 'misty'
    },
    'Sand': {
        gradient: 'linear-gradient(135deg, #c79081, #dfa579)',
        animation: 'misty'
    },
    'Ash': {
        gradient: 'linear-gradient(135deg, #757f9a, #d7dde8)',
        animation: 'misty'
    },
    'Squall': {
        gradient: 'linear-gradient(135deg, #536976, #292e49)',
        animation: 'windy'
    },
    'Tornado': {
        gradient: 'linear-gradient(135deg, #536976, #292e49)',
        animation: 'windy'
    },
    'Snow': {
        gradient: 'linear-gradient(135deg, #e6dada, #274046)',
        animation: 'snowy'
    },
    'Thunderstorm': {
        gradient: 'linear-gradient(135deg, #232526, #414345)',
        animation: 'stormy'
    }
};

// Function to set dynamic background based on weather condition
function setWeatherBackground(weatherCondition) {
    const background = weatherBackgrounds[weatherCondition] || weatherBackgrounds['Clear'];

    // Set the background gradient
    body.style.background = background.gradient;

    // Remove any existing weather animation elements
    const existingAnimations = document.querySelectorAll('.weather-animation');
    existingAnimations.forEach(element => element.remove());

    // Add the appropriate weather animation
    if (background.animation) {
        createWeatherAnimation(background.animation);
    }
}

// Function to create weather animation elements
function createWeatherAnimation(animationType) {
    const animationContainer = document.createElement('div');
    animationContainer.className = 'weather-animation';

    switch (animationType) {
        case 'rainy':
            createRainDrops(animationContainer);
            break;
        case 'snowy':
            createSnowflakes(animationContainer);
            break;
        case 'cloudy':
            createClouds(animationContainer);
            break;
        case 'stormy':
            createLightning(animationContainer);
            createRainDrops(animationContainer);
            break;
        case 'misty':
            createMist(animationContainer);
            break;
        case 'windy':
            createWindEffect(animationContainer);
            break;
    }

    document.body.appendChild(animationContainer);
}

// Create rain animation
function createRainDrops(container) {
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(drop);
    }
}

// Create snow animation
function createSnowflakes(container) {
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${5 + Math.random() * 10}px`;
        snowflake.innerHTML = '❄';
        container.appendChild(snowflake);
    }
}

// Create cloud animation
function createClouds(container) {
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = `${10 + Math.random() * 20}%`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.animationDuration = `${80 + Math.random() * 40}s`;
        cloud.style.opacity = 0.2 + Math.random() * 0.4;
        cloud.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
        container.appendChild(cloud);
    }
}

// Create lightning animation
function createLightning(container) {
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    container.appendChild(lightning);

    // Create random lightning flashes
    setInterval(() => {
        lightning.style.opacity = Math.random() > 0.93 ? 0.3 + Math.random() * 0.7 : 0;
    }, 200);
}

// Create mist animation
function createMist(container) {
    for (let i = 0; i < 3; i++) {
        const mist = document.createElement('div');
        mist.className = 'mist';
        mist.style.top = `${20 + i * 20}%`;
        mist.style.animationDuration = `${15 + Math.random() * 15}s`;
        mist.style.animationDelay = `${i * 2}s`;
        container.appendChild(mist);
    }
}

// Create wind effect
function createWindEffect(container) {
    for (let i = 0; i < 20; i++) {
        const wind = document.createElement('div');
        wind.className = 'wind';
        wind.style.top = `${Math.random() * 100}%`;
        wind.style.animationDuration = `${2 + Math.random() * 3}s`;
        wind.style.animationDelay = `${Math.random() * 5}s`;
        wind.style.width = `${50 + Math.random() * 100}px`;
        container.appendChild(wind);
    }
}

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

    // Set dynamic background based on weather condition
    setWeatherBackground(weatherCondition);

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