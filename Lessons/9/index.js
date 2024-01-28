const weather = new WeatherService(axios);
const cityName = process.argv[2];
weather.lookUp(cityName).then((data) => {
  const message = Temperature in `${data.name}: ${data.temperature}C`;
  console.log(message);
});

class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async lookUp(cityName) {
    const url = new URL(`cities/${cityName}`, apiUrl);
    const response = await this.httpClient.get(url.toString());
    return JSON.parse(response.data);
  }
}