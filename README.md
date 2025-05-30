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

## Setup Instructions

1. Clone this repository to your local machine
2. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
3. Create a file named `config.js` in the root directory with the following content:
   ```javascript
   const config = {
     apiKey: 'YOUR_API_KEY_HERE'
   };
   ```
4. Add `config.js` to your `.gitignore` file to prevent your API key from being exposed
5. Update your `script.js` to use the API key from the config file
6. Open `index.html` in your browser

> **IMPORTANT:** Never commit your API key to a public repository. The `config.js` approach above helps keep your API key private.

## How to Use

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View the current weather and forecast information

## Screenshots

(Add screenshots of your application here)

## Future Improvements

- Add option to switch between Celsius and Fahrenheit
- Implement geolocation to automatically detect user's location
- Add more detailed weather information
- Add dark/light theme toggle

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Prepare your project for deployment:
   - Rename `config.js.template` to `config.js` for local development
   - Make sure `config.js` is in your `.gitignore` file
5. Deploy your project:
   ```
   vercel
   ```
6. Set up environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add a new variable named `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Redeploy your project for the changes to take effect

### API Key Security

This project uses environment variables to securely handle the API key in production. The `config.js.template` file shows how the API key is accessed from environment variables when deployed.

For local development:
- Create a `config.js` file based on the template
- Add your API key directly in the file
- Never commit this file to your repository

For production:
- The API key is stored as an environment variable in Vercel
- The application reads the key from the environment
- This keeps your API key secure and not exposed in your code

## License

MIT

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install the Vercel CLI:
   ```