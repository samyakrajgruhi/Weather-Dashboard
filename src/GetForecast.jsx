import PropTypes from 'prop-types';

export async function getForecast(city, apiKey, baseURL) {
    try {
        // Construct the forecast URL
        const forecastURL = `${baseURL}/forecast?q=${city}&units=metric&appid=${apiKey}`;

        // Fetch the forecast data
        const forecastResponse = await fetch(forecastURL);

        if (!forecastResponse.ok) {
            const errorData = await forecastResponse.json();
            throw new Error(errorData.message || 'Failed to fetch forecast data');
        }

        const forecastData = await forecastResponse.json();
        console.log(forecastData);

        // Process the forecast data
        const dailyForecasts = {};

        // Group forecast data by day
        forecastData.list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = {
                    temps: [item.main.temp],
                    mainWeather: [item.weather[0].main] // Use main weather category instead of description
                };
            } else {
                dailyForecasts[date].temps.push(item.main.temp);
                dailyForecasts[date].mainWeather.push(item.weather[0].main);
            }
        });

        // Calculate daily max temp and most frequent weather type
        const dailyForecastArray = Object.keys(dailyForecasts).map(date => {
            const maxTemp = Math.round(Math.max(...dailyForecasts[date].temps));

            // Find most common main weather type
            const weatherCounts = {};
            dailyForecasts[date].mainWeather.forEach(weather => {
                weatherCounts[weather] = (weatherCounts[weather] || 0) + 1;
            });
            const mainWeather = Object.keys(weatherCounts).reduce((a, b) =>
                weatherCounts[a] > weatherCounts[b] ? a : b);

            return {
                date: new Date(date).toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'}),
                maxTemp,
                description: mainWeather // Use the main weather category as the description
            };
        });

        // Limit to 5
        console.log(dailyForecastArray.slice(1,6));
        return dailyForecastArray.slice(1, 6);

    } catch (error) {
        console.error("Error fetching forecast data:", error);
        throw error;
    }
}

getForecast.propTypes = {
    city: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    baseURL: PropTypes.string.isRequired
};