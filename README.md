# Weather App

A beautiful and functional weather application that provides current weather conditions and a 5-day forecast.

## Features

- Current weather display with temperature, condition, and location
- "Feels like" temperature, humidity, wind speed, and pressure information
- 5-day weather forecast
- Responsive design that works on desktop and mobile devices
- Beautiful UI with smooth animations and transitions

## Technologies Used

- HTML5
- CSS3 (with Flexbox for layout)
- JavaScript (ES6+)
- OpenWeatherMap API for weather data
- Font Awesome for icons
- Google Fonts (Poppins)

## Local Development Setup

1. Clone this repository to your local machine
2. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
3. Create a file named `config.js` in the root directory with the following content:
   ```javascript
   const config = {
     apiKey: 'YOUR_API_KEY_HERE'
   };
   ```
4. Add `config.js` to your `.gitignore` file to prevent your API key from being exposed
5. Open `index.html` in your browser

> **IMPORTANT:** Never commit your API key to a public repository. The `config.js` approach above helps keep your API key private.

## Deployment to Vercel

1. Push your code to a GitHub repository (make sure `config.js` is in your `.gitignore`)
2. Sign up for a Vercel account at [vercel.com](https://vercel.com)
3. Create a new project in Vercel and connect it to your GitHub repository
4. Add your OpenWeatherMap API key as an environment variable:
   - In your Vercel project settings, go to "Environment Variables"
   - Add a new variable with the name `NEXT_PUBLIC_OPENWEATHER_API_KEY` and your API key as the value
5. Vercel will use the build script in `package.json` to generate the `config.js` file during deployment
6. Deploy your application

## How to Use

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View the current weather and forecast information

## Screenshots

(Add screenshots of your application here)

## Future Improvements

- Add option to switch between Celsius and Fahrenheit