const axios = require('axios');

class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getWeather(city) {
    try {
      const response = await this.httpClient.get(`http://localhost:8080/api/v2/cities/${city}`);
      const { name, temperature } = response.data;
      return { name, temperature };
    } catch (error) {
      console.error(`Error fetching weather data: ${error.message}`);
      throw error;
    }
  }
}

const axios = require('axios');
const WeatherService = require('../WeatherService.js');

const city = process.argv[2];

if (!city) {
  console.error('Usage: node ./bin/weather.js <city>');
  process.exit(1);
}

const weatherService = new WeatherService(axios);

weatherService.getWeather(city)
  .then(({ name, temperature }) => {
    console.log(`Temperature in ${name}: ${temperature}C`);
  })
  .catch(() => {
    console.log(`Unable to fetch weather data for ${city}`);
  });
