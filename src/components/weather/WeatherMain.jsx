import { useWeather } from "../../context/WeatherContext";
import { WEATHER_ICONS } from "../../utils/convertWeatherCodeToIcon";

function WeatherMain() {
  const { weatherData, isMetric } = useWeather();
  if (weatherData.data === undefined) return;
  return (
    <span className="flex items-center text-7xl gap-20 md:gap-0">
      <img
        src={
          WEATHER_ICONS[weatherData.data.current.is_day][
            weatherData.data.current.weather_code
          ]
        }
        alt="Weather Icon"
        width={100}
      />
      <span>
        {isMetric
          ? weatherData.data.current.temperature_2m
          : Math.round(weatherData.data.current.temperature_2m * 1.8 + 32)}
        {weatherData?.data && "°"}
      </span>
    </span>
  );
}

export default WeatherMain;
