import dayjs from "dayjs";
import PropTypes from 'prop-types';

const apiKey = '915b19d92ea2344787dce2b9eb8cdec4' ;
const baseURL = 'https://api.openweathermap.org/data/2.5/weather'

function convertTodegree(temp){
   const integerPart = Math.floor(temp);
   const decimalPart = Math.round((temp - integerPart) * 10);
   
   if (decimalPart === 10) {
      return `${integerPart + 1}°0`;
   }
   return `${integerPart}°${decimalPart === 0 ? '' : decimalPart}`;
}

export async function getWeather(city){
   const currentWeatherURL = `${baseURL}?q=${city}&units=metric&appid=${apiKey}`;
   const currentWeatherResponse = await fetch(currentWeatherURL);

   const currentWeatherData = await currentWeatherResponse.json();

   const dateTime = dayjs();

   const weatherData = {
    temprature: convertTodegree(currentWeatherData.main.temp),
    feelsLike: convertTodegree(currentWeatherData.main.feels_like),

    sunriseTime: dayjs.unix(currentWeatherData.sys.sunrise).format('h:mm A'),
    sunsetTime: dayjs.unix(currentWeatherData.sys.sunset).format('h:mm A'),

    weather: currentWeatherData.weather[0].main,

    humidity :currentWeatherData.main.humidity,

    windSpeed: currentWeatherData.wind.speed,

    currentDate: dateTime.format('dddd, MMMM D'),
    currentTime: dateTime.format('h:mm A')

   }

   return weatherData;
}

getWeather.propTypes = {
   cityOrLatitude: PropTypes.string.isRequired
}