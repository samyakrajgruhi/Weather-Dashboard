/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { Search, Sunrise, Sunset, Wind } from 'lucide-react';
import "./App.css";


export default function App(){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Default data for demonstration
  const defaultData = {
    cityName: "Vadodara, Gujarat",
    temp: 26,
    description: "Sunny",
    humidity: 44,
    windSpeed: 2,
    time: "12:44AM",
    date: "26 Feb 2025",
    sunrise: "07:00 AM",
    sunset: "06:00 PM",
    forecast: [
      { day: "Friday, 27 Feb", temp: 26, icon: "sunny" },
      { day: "Friday, 27 Feb", temp: 26, icon: "rainy" },
      { day: "Friday, 27 Feb", temp: 26, icon: "cloudy" },
      { day: "Friday, 27 Feb", temp: 26, icon: "windy" },
      { day: "Friday, 27 Feb", temp: 26, icon: "snow" }
    ],
    hourly: [
      { time: "12:00", temp: 22, icon: "sunny", wind: 2 },
      { time: "12:00", temp: 22, icon: "sunny", wind: 2 },
      { time: "12:00", temp: 22, icon: "sunny", wind: 2 },
      { time: "12:00", temp: 22, icon: "sunny", wind: 2 },
      { time: "12:00", temp: 22, icon: "sunny", wind: 2 }
    ]
  };

  // Function to fetch weather data
  const getWeather = async () => {
    // This would normally fetch real data
    // For demo purposes, we're using the default data
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWeather(defaultData);
      setForecast(defaultData.forecast);
      setError('');
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  // Weather icon components
  const WeatherIcon = ({ type }) => {
    switch(type) {
      case 'sunny':
        return (
          <div className="text-white text-6xl flex items-center justify-center">
            <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center">
              <div className="rounded-full bg-yellow-400 w-12 h-12"></div>
            </div>
          </div>
        );
      case 'rainy':
        return (
          <div className="text-white text-4xl">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
              <path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
              <path d="M8 16.2v4"></path>
              <path d="M12 16.2v4"></path>
              <path d="M16 16.2v4"></path>
            </svg>
          </div>
        );
      case 'cloudy':
        return (
          <div className="text-white text-4xl">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
              <path d="M18 10h-1.26a8 8 0 1 0-11.62 9"></path>
              <path d="M13 18H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6z"></path>
            </svg>
          </div>
        );
      case 'windy':
        return (
          <div className="text-white text-4xl">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
            </svg>
          </div>
        );
      case 'snow':
        return (
          <div className="text-white text-4xl">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
              <line x1="8" y1="16" x2="8.01" y2="16"></line>
              <line x1="8" y1="20" x2="8.01" y2="20"></line>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
              <line x1="12" y1="22" x2="12.01" y2="22"></line>
              <line x1="16" y1="16" x2="16.01" y2="16"></line>
              <line x1="16" y1="20" x2="16.01" y2="20"></line>
            </svg>
          </div>
        );
      default:
        return <div className="text-white text-6xl">☀️</div>;
    }
  };

  return (
    <div className="w-full h-full bg-blue-400 p-4 font-sans" style={{ 
      backgroundImage: 'url("/api/placeholder/940/400")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-300" />
          </div>
          <input
            type="text"
            className="bg-gray-700 bg-opacity-80 text-white placeholder-gray-300 w-full p-2 pl-10 rounded-lg focus:outline-none"
            placeholder="Search for a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && getWeather()}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Time and Location */}
        <div className="bg-gray-800 bg-opacity-70 text-white p-4 rounded-lg">
          <p className="text-lg">{defaultData.cityName}</p>
          <h1 className="text-5xl font-bold">{defaultData.time}</h1>
          <p className="text-lg">{defaultData.date}</p>
        </div>

        {/* Current Weather */}
        <div className="bg-gray-800 bg-opacity-70 text-white p-4 rounded-lg flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-bold">{defaultData.temp}°C</h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-6xl">
                <div className="flex justify-center">
                  <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <span className="font-bold">{defaultData.humidity}%</span>
                <span className="text-sm ml-1">Humidity</span>
              </div>
              <div className="flex items-center">
                <Wind className="mr-2 h-6 w-6" />
                <span className="font-bold">{defaultData.windSpeed}km/h</span>
                <span className="text-sm ml-1">Wind Speed</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col mt-4">
            <div className="flex items-center">
              <Sunrise className="mr-2 h-5 w-5" />
              <span className="text-sm">Sun Rise Time :</span>
              <span className="ml-1 text-sm">{defaultData.sunrise}</span>
            </div>
            <div className="flex items-center">
              <Sunset className="mr-2 h-5 w-5" />
              <span className="text-sm">Sun Set Time :</span>
              <span className="ml-1 text-sm">{defaultData.sunset}</span>
            </div>
          </div>
          
          <div className="flex justify-center mt-2">
            <h2 className="text-2xl">{defaultData.description}</h2>
          </div>
        </div>
      </div>

      {/* 5 Day Forecast */}
      <div className="mt-4 bg-gray-800 bg-opacity-70 text-white p-4 rounded-lg">
        <h3 className="text-lg mb-2">5 Day Forecast :</h3>
        <div className="space-y-2">
          {defaultData.forecast.map((day, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8">
                {index === 0 && <WeatherIcon type="sunny" />}
                {index === 1 && <WeatherIcon type="rainy" />}
                {index === 2 && <WeatherIcon type="cloudy" />}
                {index === 3 && <WeatherIcon type="windy" />}
                {index === 4 && <WeatherIcon type="snow" />}
              </div>
              <div className="ml-4 w-16">
                <span className="text-lg font-bold">{day.temp}°C</span>
              </div>
              <div className="ml-4">
                <span>{day.day}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {defaultData.hourly.map((hour, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-lg flex flex-col items-center">
            <p className="text-sm">{hour.time}</p>
            <div className="my-2">
              <WeatherIcon type="sunny" />
            </div>
            <p className="text-lg font-bold">{hour.temp}°C</p>
            <div className="flex items-center mt-1">
              <Wind className="h-4 w-4 mr-1" />
              <span className="text-xs">{hour.wind} km/h</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}