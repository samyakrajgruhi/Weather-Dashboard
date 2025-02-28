import {useRef} from 'react';
import PropTypes from "prop-types";
import { getWeather } from './GetWeather';

export default function CityInput({setCity, setWeatherData,setIsLoading,isLoading }){
   
   const inputRef = useRef(null);

   async function getValue(currentValue){

      setIsLoading(true);

      try{
         if (currentValue.trim()) {
            const weatherData = await getWeather(currentValue);
            setWeatherData(weatherData);
            setCity(currentValue);
         }
      // eslint-disable-next-line no-unused-vars
      }catch (error){
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
   setIsLoading:PropTypes.func.isRequired,
   isLoading:PropTypes.func.isRequired

}