const fs = require('fs');

// Get API key from environment variable or use placeholder
const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '2ed2de557d4040e03cea9bf6e2b0e98d';

// Create config.js content
const configContent = `// Configuration file for the Weather App
// Contains API key for OpenWeatherMap

const config = {
    apiKey: "${apiKey}"
};
`;

// Write to config.js
fs.writeFileSync('config.js', configContent);

console.log('Config file generated successfully!');