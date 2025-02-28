import PropTypes from 'prop-types';

export default function LocationCard({city, weatherData}){
   return (
      <div className="flex justify-between bg-gray-700/77 w-2/5 md:w-84 flex-col gap-2 text-white text-center p-2 md:p-4 rounded-lg shadow-[2px_2px_10px_rgb(0,0,0,0.5)]">
         <p className="text-md md:text-lg">{city}</p>
         <p className="text-3xl lg:text-7xl">{weatherData.currentTime}</p>
         <p className="text-sm md:text-xl">{weatherData.currentDate}</p>
      </div>
   );
}

LocationCard.propTypes = {
   city: PropTypes.string.isRequired,
   weatherData: PropTypes.object.isRequired
}