import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CurrentWeatherCard from "./CurrentWeatherCard";

function CurrentWeather() {
  const { weatherData, isMetric } = useContext(WeatherContext);
  if (weatherData.data === undefined) return;
  const currentWeather = weatherData?.data?.current;
  return (
    <div className="flex w-full justify-between mt-10 flex-wrap md:flex-nowrap">
      <CurrentWeatherCard
        name="Feels Like"
        value={
          isMetric
            ? currentWeather?.apparent_temperature
            : Math.round(currentWeather?.apparent_temperature * 1.8 + 32)
        }
        unit="&deg;"
      />
      <CurrentWeatherCard
        name="Humidity"
        value={currentWeather?.relative_humidity_2m}
        unit="%"
      />
      <CurrentWeatherCard
        name="Wind"
        value={
          isMetric
            ? currentWeather?.wind_speed_10m
            : (currentWeather?.wind_speed_10m * 0.621371).toFixed(1)
        }
        unit={isMetric ? " Km/h" : " Mph"}
      />
      <CurrentWeatherCard
        name="Precipitation"
        value={
          isMetric
            ? currentWeather?.precipitation
            : (currentWeather?.precipitation * 0.0393701).toFixed(2)
        }
        unit={isMetric ? " Mm" : " In"}
      />
    </div>
  );
}

export default CurrentWeather;
