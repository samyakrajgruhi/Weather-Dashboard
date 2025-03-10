import {useRef} from 'react';
import PropTypes from "prop-types";
import { getWeather } from './GetWeather';
import { getForecast } from './GetForecast';

export default function CityInput({setCity, setWeatherData,setForecastData,setIsLoading,isLoading,apiKey,baseURL}) {

   const inputRef = useRef(null);

   async function getValue(currentValue){
      console.log("user",currentValue)
      setIsLoading(true);

      try{
         if (currentValue.trim()) {
            const weatherData = await getWeather(currentValue,apiKey,baseURL)
            const forecastData = await getForecast(currentValue,apiKey,baseURL);
            setForecastData(forecastData);
            setWeatherData(weatherData);

            setCity(currentValue);
         }
      }catch (error){
         console.error(error);
         alert("Error Fetching weather data!!");
      } finally{
         setIsLoading(false);
         inputRef.current.value = '';
      }
   }

   function onEnter(event){
      if(event.key === 'Enter'){
         const currentValue = inputRef.current.value;
         getValue(currentValue);
      }
   }

   
   
   
   return (
      <>
         <input
            type="text"
            className={`flex-grow w-full bg-gray-700/77 bg-opacity-80 text-white placeholder-gray-300 p-2 pl-12 h-full rounded-lg focus:outline-none ${isLoading ? 'opacity-75' : ''}`}
            placeholder={isLoading ? "Loading..." : "Search for a city"}
            ref={inputRef}
            onKeyDown={onEnter}
            disabled={isLoading}
         />
      </>
   );
}

CityInput.propTypes = {
   city: PropTypes.string.isRequired,
   setCity: PropTypes.func.isRequired,
   setWeatherData: PropTypes.func.isRequired,
   setForecastData: PropTypes.func.isRequired,
   setIsLoading:PropTypes.func.isRequired,
   isLoading:PropTypes.func.isRequired,
   apiKey:PropTypes.string.isRequired,
   baseURL:PropTypes.string.isRequired

}