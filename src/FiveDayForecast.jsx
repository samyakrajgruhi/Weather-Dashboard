/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import sunnyIcon from "./assets/sunny.svg";
import cloudyIcon from "./assets/cloudy.svg";
import rainyIcon from "./assets/rainy.svg";
import thunderstormIcon from "./assets/thunderstorm.svg";
import hazeIcon from "./assets/Haze.svg";
import smogIcon from "./assets/smog.svg";
import mistIcon from "./assets/mist.svg";

export default function FiveDayForecast({forecastData}) {
   let forecastIcons = [];
   console.log("forecast data:", typeof forecastData);
   if (forecastData.length > 0){
      console.log("data",forecastData[0].description);
   }

   // forecast data is an array
   // every element in the array is an object

   for (var i=0; i<forecastData.length; i++){
      switch (forecastData[i].description) {
         case 'Haze':
            forecastIcons.push(hazeIcon);
            break;
         case 'Clouds':
            forecastIcons.push(cloudyIcon);
            break;
         case 'Rain':
            forecastIcons.push(rainyIcon);
            break;
         case 'Thunderstorm':
            forecastIcons.push(thunderstormIcon);
            break;
         case 'Clear':
            forecastIcons.push(sunnyIcon);
            break;
         case 'Smoke':
            forecastIcons.push(smogIcon);
            break;
         case 'Mist':
            forecastIcons.push(mistIcon);
            break;
         default:
            break;
      }
   }

   return (
      <div className="bg-gray-700/75 hover:bg-gray-700/85 flex flex-col gap-2 md:gap-4 flex-grow rounded-lg p-2 md:p-4 text-white transition-shadow shadow-[2px_2px_10px_rgb(0,0,0,0.5)] hover:shadow-[2px_2px_5px_rgb(0,0,0,0.8)]" >
         <p className="text-lg md:text-3xl text-center font-semibold">5 Day Forecast :</p>
         <div className="flex flex-col justify-between w-full gap-1 md:gap-4 pr-2 md:pr-4">
            {forecastData.map((item, index) => (
               <div key={index} className="flex items-center justify-between md:m-2">
                  <img className="w-6 md:w-8" src={forecastIcons[index]} alt={item.description} />
                  <p className="text-sm md:text-2xl">{item.maxTemp}°C</p>
                  <p className="text-xs md:text-lg">{item.date}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

FiveDayForecast.propTypes = {
   forecastData: PropTypes.array.isRequired
}
