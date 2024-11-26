// weathr component to bring down weather api to populaate webpage with different city weather


import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCity, setSelectedCity] = useState("San Francisco");
  
    const API_KEY = "3d219120e1d7553eb4217544605d9883";
  const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
  
    //city lat and long for location
    const cities = {
      "San Francisco": { lat: 36.9485206559678, lon: -122.4194 },
      Georgia: { lat: 33.95084226053549, lon: -84.40141612130043 },
      Texas: { lat: 0.382486008837517, lon: -95.43833777188205 },
      Norfolk: { lat: 36.953741101111156, lon:-76.29765630177569 },
      
    };
  
    // Fetch weather data from api
    const fetchWeatherData = async (lat, lon) => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: lat,
              lon: lon,
              appid: API_KEY,
              units: "metric", // Metric system for Celsius
            },
          }
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError("Unable to fetch weather data.");
        setWeatherData(null);
      } finally { 
        setLoading(false);
      }
    };
  
    // Handle city selection
    const handleCityChange = (event) => {
      const city = event.target.value;
      setSelectedCity(city);
      const { lat, lon } = cities[city];
      fetchWeatherData(lat, lon);
    };
  
    // Fetch default city's weather data on mount
    useEffect(() => {
      const { lat, lon } = cities[selectedCity];
      fetchWeatherData(lat, lon);
    }, [selectedCity]);
  
    return (
      <div>
        <h2>World Weather</h2>
        <div>
          <label htmlFor="city-select">Select a city: </label>
          <select id="city-select" value={selectedCity} onChange={handleCityChange}>
            {Object.keys(cities).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
  
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weatherData && (
          <div>
            <h3>{weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    );
  };
export default WeatherComponent;