import { useContext } from "react";
import {
  convertWeatherCodeToIcon,
  WeatherContext,
} from "../context/WeatherContext";

function WeatherMain() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData.data === undefined) return;
  return (
    <span>
      {convertWeatherCodeToIcon(weatherData.data.current.weather_code)}
      {weatherData.data.current.temperature_2m}
      {weatherData.data && "°"}
    </span>
  );
}

export default WeatherMain;
