/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';


import sunnyIcon from "./assets/sunny.svg";
import cloudyIcon from "./assets/cloudy.svg";
import coldIcon from "./assets/cold.svg";
import rainyIcon from "./assets/rainy.svg";
import thunderstormIcon from "./assets/thunderstorm.svg";
import windyIcon from "./assets/windy.svg";
import hazeIcon from "./assets/Haze.svg";
import humidityIcon from "./assets/humidity.svg";
import windIcon from "./assets/windspeed.svg";

import CityInput from './CityInput.jsx';
import LocationCard from './LocationCard.jsx';

export default function FiveDayForecast(){
   return (
      <div className="bg-gray-700/75 hover:bg-gray-700/85 flex flex-col gap-2 md:gap-4 flex-grow rounded-lg p-2 md:p-4 text-white transition-shadow shadow-[2px_2px_10px_rgb(0,0,0,0.5)] hover:shadow-[2px_2px_5px_rgb(0,0,0,0.8)]" >
         <p className="text-lg md:text-3xl text-center font-semibold">5 Day Forecast :</p>
         <div className="flex flex-col justify-between w-full gap-1 md:gap-4 pr-2 md:pr-4">
            <div className="flex items-center justify-between md:m-2">
               <img className="w-6 md:w-8" src={cloudyIcon} />
               <p className="text-sm md:text-2xl"> 27°C</p>
               <p className="text-xs md:text-lg">Firday, 27 Feb</p>
            </div>
            <div className="flex items-center justify-between md:m-2">
               <img className="w-6 md:w-8" src={coldIcon} />
               <p className="text-sm md:text-2xl"> 26°C</p>
               <p className="text-xs md:text-lg">Firday, 27 Feb</p>
            </div>
            <div className="flex items-center justify-between md:m-2">
               <img className="w-6 md:w-8" src={rainyIcon} />
               <p className="text-sm md:text-2xl"> 22.3°C</p>
               <p className="text-xs md:text-lg">Firday, 27 Feb</p>
            </div>
            <div className="flex items-center justify-between md:m-2">
               <img className="w-6 md:w-8" src={thunderstormIcon} />
               <p className="text-sm md:text-2xl"> 26°C</p>
               <p className="text-xs md:text-lg">Firday, 27 Feb</p>
            </div>
            <div className="flex items-center justify-between md:m-2">
               <img className="w-6 md:w-8" src={windyIcon} />
               <p className="text-sm md:text-2xl"> 29°C</p>
               <p className="text-xs md:text-lg">Firday, 27 Feb</p>
            </div>
         </div>
      </div>
   );
}
