// Function to fetch weather data based on user input
function getWeather() {
    // Get user input for location
    const location = document.getElementById('locationInput').value;

    // Check if location input is empty
    if (!location) {
        alert('Please enter a location');
        return;
    }

    // Mock weather data
    const weatherData = {
        name: location,
        country: '',
        temp: Math.floor(Math.random() * 30) + 10, // Random temperature between 10°C and 40°C
        humidity: Math.floor(Math.random() * 100), // Random humidity percentage
        description: generateWeatherDescription(), // Generate a random weather description
    };

    // Display weather information
    displayWeather(weatherData);
}

// Function to display weather information on the webpage
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.country}</h2>
        <p>Temperature: ${data.temp}°C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Weather: ${data.description}</p>
    `;
}

// Function to generate a random weather description
function generateWeatherDescription() {
    const descriptions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy', 'Snowy', 'Windy', 'Foggy'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}
