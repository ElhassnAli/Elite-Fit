import { useContext } from "react";
import {
  convertWeatherCodeToIcon,
  WeatherContext,
} from "../context/WeatherContext";

function WeatherMain() {
  const { weatherData, isMetric } = useContext(WeatherContext);
  if (weatherData.data === undefined) return;
  return (
    <span className="flex items-center text-7xl gap-20 md:gap-0">
      <img
        src={convertWeatherCodeToIcon(
          weatherData.data.current.weather_code,
          weatherData.data.current.is_day,
        )}
        alt=""
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
