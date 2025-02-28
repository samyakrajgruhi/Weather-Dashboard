import PropTypes from 'prop-types';

import sunnyIcon from "./assets/sunny.svg";
import cloudyIcon from "./assets/cloudy.svg";
import rainyIcon from "./assets/rainy.svg";
import thunderstormIcon from "./assets/thunderstorm.svg";
import hazeIcon from "./assets/Haze.svg";
import humidityIcon from "./assets/humidity.svg";
import windIcon from "./assets/windspeed.svg";

export default function WeatherCard({weatherData}){

   return (
      <div className="bg-gray-700/77 w-full md:w-3/5 md:h-full p-2 md:p-4 rounded-lg text-white flex flex-col justify-start md:justify-between items-center gap-4 md:gap-8 shadow-[2px_2px_10px_rgb(0,0,0,0.5)]">
      {/* Top section */}
         <section className="flex w-full justify-between items-center gap-2 md:gap-4">
            <div>
               <p className="text-3xl md:text-7xl text-center">{weatherData.temprature}C</p>
               <p className="text-md md:text-lg text-center">feels like {weatherData.feelsLike}C</p>
            </div>
            
            <div className="flex md:flex-col">
               <div className="flex items-center">
                  <svg className="w-8 md:w-12" viewBox="0 0 74 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37 24.6706C37.851 24.6706 38.5416 23.9418 38.5416 23.0438V19.7901C38.5416 18.8921 37.851 18.1633 37 18.1633C36.1482 18.1633 35.4583 18.8921 35.4583 19.7901V23.0438C35.4583 23.9418 36.1482 24.6706 37 24.6706Z" fill="white"/>
                  <path d="M21.5833 37.6851H18.5C17.6482 37.6851 16.9583 38.4139 16.9583 39.3119C16.9583 40.2099 17.6482 40.9387 18.5 40.9387H21.5833C22.4343 40.9387 23.125 40.2099 23.125 39.3119C23.125 38.4139 22.4343 37.6851 21.5833 37.6851Z" fill="white"/>
                  <path d="M55.5 37.6851H52.4167C51.5649 37.6851 50.875 38.4139 50.875 39.3119C50.875 40.2099 51.5649 40.9387 52.4167 40.9387H55.5C56.351 40.9387 57.0417 40.2099 57.0417 39.3119C57.0417 38.4139 56.351 37.6851 55.5 37.6851Z" fill="white"/>
                  <path d="M51.1717 24.3574C50.5697 23.7222 49.5938 23.7222 48.9918 24.3574L46.8119 26.6578C46.2098 27.293 46.2098 28.3228 46.8119 28.9581C47.1133 29.2761 47.5072 29.4347 47.9018 29.4347C48.2965 29.4347 48.6904 29.2761 48.9918 28.9581L51.1717 26.6578C51.7737 26.0225 51.7737 24.9927 51.1717 24.3574Z" fill="white"/>
                  <path d="M27.1881 26.6578L25.0081 24.3574C24.4061 23.7222 23.4302 23.7222 22.8282 24.3574C22.2262 24.9927 22.2262 26.0225 22.8282 26.6578L25.0081 28.9581C25.3095 29.2761 25.7034 29.4347 26.0981 29.4347C26.4928 29.4347 26.8874 29.2761 27.1881 28.9581C27.7908 28.3228 27.7908 27.2938 27.1881 26.6578Z" fill="white"/>
                  <path d="M37 27.9242C31.0491 27.9242 26.2083 33.0324 26.2083 39.3119C26.2083 41.3039 26.7109 43.274 27.6636 45.0082C27.9388 45.5101 28.4468 45.8192 28.9972 45.8192H45.0028C45.5531 45.8192 46.0611 45.5101 46.3371 45.0082C47.2891 43.274 47.7916 41.3039 47.7916 39.3119C47.7916 33.0324 42.9508 27.9242 37 27.9242ZM44.0585 42.5655H29.9415C29.5144 41.539 29.2916 40.4303 29.2916 39.3119C29.2916 34.8268 32.7496 31.1778 37 31.1778C41.2504 31.1778 44.7083 34.8268 44.7083 39.3119C44.7083 40.4303 44.4855 41.539 44.0585 42.5655Z" fill="white"/>
                  <path d="M38.0899 49.5495C37.4879 48.9142 36.512 48.9142 35.91 49.5495L31.285 54.4299C30.683 55.0652 30.683 56.0949 31.285 56.7302C31.887 57.3655 32.8629 57.3655 33.4649 56.7302L35.4583 54.6267V58.8337C35.4583 59.7317 36.1482 60.4605 37 60.4605C37.851 60.4605 38.5416 59.7317 38.5416 58.8337V54.6267L40.535 56.7302C40.8364 57.0483 41.2303 57.2069 41.625 57.2069C42.0196 57.2069 42.4135 57.0483 42.7149 56.7302C43.317 56.0949 43.317 55.0652 42.7149 54.4299L38.0899 49.5495Z" fill="white"/>
                  </svg>
                  <div>
                     <p className="text-sm md:text-md font-semibold">Sun Rise Time :</p>
                     <p className="text-xs md:text-sm">{weatherData.sunriseTime}</p>
                  </div>
               </div>
               <div className="flex items-center">
                  <svg className="w-8 md:w-12" viewBox="0 0 74 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37 25.0466C37.851 25.0466 38.5416 24.3078 38.5416 23.3975V20.0993C38.5416 19.189 37.851 18.4502 37 18.4502C36.1482 18.4502 35.4583 19.189 35.4583 20.0993V23.3975C35.4583 24.3078 36.1482 25.0466 37 25.0466Z" fill="white"/>
                  <path d="M21.5833 38.2394H18.5C17.6482 38.2394 16.9583 38.9782 16.9583 39.8885C16.9583 40.7988 17.6482 41.5376 18.5 41.5376H21.5833C22.4343 41.5376 23.125 40.7988 23.125 39.8885C23.125 38.9782 22.4343 38.2394 21.5833 38.2394Z" fill="white"/>
                  <path d="M55.5 38.2394H52.4167C51.5649 38.2394 50.875 38.9782 50.875 39.8885C50.875 40.7988 51.5649 41.5376 52.4167 41.5376H55.5C56.351 41.5376 57.0417 40.7988 57.0417 39.8885C57.0417 38.9782 56.351 38.2394 55.5 38.2394Z" fill="white"/>
                  <path d="M51.1717 24.7292C50.5697 24.0852 49.5938 24.0852 48.9918 24.7292L46.8119 27.061C46.2098 27.705 46.2098 28.7489 46.8119 29.3928C47.1133 29.7152 47.5072 29.876 47.9018 29.876C48.2965 29.876 48.6904 29.7152 48.9918 29.3928L51.1717 27.061C51.7737 26.4171 51.7737 25.3732 51.1717 24.7292Z" fill="white"/>
                  <path d="M27.1881 27.061L25.0081 24.7292C24.4061 24.0852 23.4302 24.0852 22.8282 24.7292C22.2262 25.3732 22.2262 26.4171 22.8282 27.061L25.0081 29.3928C25.3095 29.7152 25.7034 29.876 26.0981 29.876C26.4928 29.876 26.8867 29.7152 27.1881 29.3928C27.7908 28.7489 27.7908 27.7058 27.1881 27.061Z" fill="white"/>
                  <path d="M37 28.3448C31.0491 28.3448 26.2083 33.523 26.2083 39.8885C26.2083 41.9079 26.7109 43.9049 27.6636 45.6629C27.9388 46.1716 28.4468 46.4849 28.9972 46.4849H45.0028C45.5531 46.4849 46.0611 46.1716 46.3363 45.6629C47.2891 43.9049 47.7916 41.9079 47.7916 39.8885C47.7916 33.523 42.9508 28.3448 37 28.3448ZM44.0585 43.1867H29.9415C29.5144 42.1462 29.2916 41.0223 29.2916 39.8885C29.2916 35.342 32.7496 31.643 37 31.643C41.2504 31.643 44.7083 35.342 44.7083 39.8885C44.7083 41.0223 44.4855 42.1462 44.0585 43.1867Z" fill="white"/>
                  <path d="M40.535 53.5645L38.5416 55.6968V51.4322C38.5416 50.5219 37.851 49.7831 37 49.7831C36.1482 49.7831 35.4583 50.5219 35.4583 51.4322V55.6968L33.4649 53.5645C32.8629 52.9205 31.887 52.9205 31.285 53.5645C30.683 54.2084 30.683 55.2523 31.285 55.8963L35.91 60.8436C36.2114 61.166 36.6053 61.3268 37 61.3268C37.3946 61.3268 37.7885 61.166 38.0899 60.8436L42.7149 55.8963C43.317 55.2523 43.317 54.2084 42.7149 53.5645C42.1129 52.9205 41.137 52.9205 40.535 53.5645Z" fill="white"/>
                  </svg>
                  <div>
                     <p className="text-sm md:text-md font-semibold">Sun Set Time :</p>
                     <p className="text-xs md:text-sm">{weatherData.sunsetTime}</p>
                  </div>
               </div>
            </div>
         </section>
         {/* Middle Section */}
         <section className="flex flex-col gap-2 justify-center items-center">
            {(() => {
               let icon;
               switch (weatherData.weather) {
                  case 'Haze':
                     icon = hazeIcon;
                     break;
                  case 'Clouds':
                     icon = cloudyIcon;
                     break;
                  case 'Rain':
                     icon = rainyIcon;
                     break;
                  case 'Thunderstorm':
                     icon = thunderstormIcon;
                     break;
                  case 'Clear':
                     icon = sunnyIcon;
                     break;
                  case 'Smoke':
                     icon = sunnyIcon;
                     break;
                  default:
                     break;
               }
               return <img className="w-36 md:w-68" src={icon} />;
            })()}
            <p className="text-center text-4xl md:text-4xl font-semibold">{weatherData.weather}</p>
         </section>
         <section className="flex w-full justify-between items-start gap-4 md:gap-8">
            <div className="flex gap-2 md:gap-8 items-center">
               <div className="flex flex-col w-20 md:w-24 items-center">
                  <img className="w-8 md:max-w-16" src={humidityIcon} />
                  <p className="text-center text-xs md:text-md">Humidity</p>
               </div>
               <p className="text:lg md:text-3xl text-center">{weatherData.humidity}%</p>
            </div>
            <div className="flex gap-2 md:gap-8 items-center">
               <div className="flex flex-col w-20 md:w-24 items-center">
                  <img className="w-8 md:max-w-16" src={windIcon} />
                  <p className="text-center text-xs md:text-md">Wind Speed</p>
               </div>
               <p className="text:lg md:text-3xl text-center">{weatherData.windSpeed} km/h</p>
            </div>
         </section>
      </div>
   );
}

WeatherCard.propTypes = {
   weatherData: PropTypes.object.isRequired
}