/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import "./App.css";


export default function App(){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // You need to replace this with your actual API key from OpenWeatherMap
  const apiKey = '915b19d92ea2344787dce2b9eb8cdec4';

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);
    setForecast([]);

    try {
      // Fetch current weather data
      const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const currentWeatherResponse = await fetch(currentWeatherURL);
      
      if (!currentWeatherResponse.ok) {
        const errorData = await currentWeatherResponse.json();
        throw new Error(errorData.message || 'City not found');
      }
      
      const currentWeatherData = await currentWeatherResponse.json();
      
      // Extract coordinates for forecast API
      const lat = currentWeatherData.coord.lat;
      const lon = currentWeatherData.coord.lon;
      
      // Fetch 5-day forecast data
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const forecastResponse = await fetch(forecastURL);
      
      if (!forecastResponse.ok) {
        throw new Error('Failed to fetch forecast data');
      }
      
      const forecastData = await forecastResponse.json();
      
      // Process current weather data
      setWeather({
        cityName: currentWeatherData.name,
        country: currentWeatherData.sys.country,
        temp: Math.round(currentWeatherData.main.temp),
        feelsLike: Math.round(currentWeatherData.main.feels_like),
        description: currentWeatherData.weather[0].description,
        icon: currentWeatherData.weather[0].icon,
        humidity: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed
      });
      
      // Process forecast data
      const dailyForecasts = {};
      
      // Group forecast data by day
      forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyForecasts[date]) {
          dailyForecasts[date] = {
            temps: [item.main.temp],
            icons: [item.weather[0].icon],
            descriptions: [item.weather[0].description]
          };
        } else {
          dailyForecasts[date].temps.push(item.main.temp);
          dailyForecasts[date].icons.push(item.weather[0].icon);
          dailyForecasts[date].descriptions.push(item.weather[0].description);
        }
      });
      
      // Calculate daily max temp and most frequent icon/description
      const dailyForecastArray = Object.keys(dailyForecasts).map(date => {
        const maxTemp = Math.round(Math.max(...dailyForecasts[date].temps));
        
        // Find most common icon
        const iconCounts = {};
        dailyForecasts[date].icons.forEach(icon => {
          iconCounts[icon] = (iconCounts[icon] || 0) + 1;
        });
        const mainIcon = Object.keys(iconCounts).reduce((a, b) => 
          iconCounts[a] > iconCounts[b] ? a : b);
        
        // Find most common description
        const descCounts = {};
        dailyForecasts[date].descriptions.forEach(desc => {
          descCounts[desc] = (descCounts[desc] || 0) + 1;
        });
        const mainDesc = Object.keys(descCounts).reduce((a, b) => 
          descCounts[a] > descCounts[b] ? a : b);
        
        return {
          date: new Date(date).toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'}),
          maxTemp,
          icon: mainIcon,
          description: mainDesc
        };
      });
      
      // Limit to 5 days
      setForecast(dailyForecastArray.slice(0, 5));
      
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError(error.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
          placeholder="Enter city name"
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
        />
        <button 
          onClick={getWeather} 
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {weather && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">
            Current Weather in {weather.cityName}, {weather.country}
          </h2>
          
          <div className="flex items-center mb-4">
            <img 
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
              alt={weather.description}
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-2xl font-bold">{weather.temp}°C</h3>
              <p>Feels like: {weather.feelsLike}°C</p>
              <p className="capitalize">{weather.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-gray-50 p-2 rounded">
              <span className="text-gray-500">Humidity</span>
              <p className="font-medium">{weather.humidity}%</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="text-gray-500">Wind Speed</span>
              <p className="font-medium">{weather.windSpeed} m/s</p>
            </div>
          </div>

          {forecast.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
              <div className="grid grid-cols-5 gap-1">
                {forecast.map((day, index) => (
                  <div key={index} className="text-center p-2">
                    <p className="text-sm font-medium">{day.date}</p>
                    <img 
                      src={`https://openweathermap.org/img/wn/${day.icon}.png`} 
                      alt={day.description}
                      className="w-10 h-10 mx-auto"
                    />
                    <p className="font-bold">{day.maxTemp}°C</p>
                    <p className="text-xs capitalize truncate">{day.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}