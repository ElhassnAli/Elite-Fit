import { useWeather } from "../../context/WeatherContext";
import CurrentWeatherCard from "./CurrentWeatherCard";

function CurrentWeather() {
  const { weatherData, isMetric, isLoading } = useWeather();
  if (!weatherData.data && !isLoading) return null;
  const currentWeather = weatherData?.data?.current;
  return (
    <div className="flex w-full justify-between mt-10 flex-wrap md:flex-nowrap">
      <CurrentWeatherCard
        name="Feels Like"
        value={
          isLoading
            ? "—"
            : isMetric
              ? currentWeather?.apparent_temperature
              : Math.round(currentWeather?.apparent_temperature * 1.8 + 32)
        }
        unit={isLoading ? "" : "°"}
      />
      <CurrentWeatherCard
        name="Humidity"
        value={isLoading ? "—" : currentWeather?.relative_humidity_2m}
        unit={isLoading ? "" : "%"}
      />
      <CurrentWeatherCard
        name="Wind"
        value={
          isLoading
            ? "—"
            : isMetric
              ? currentWeather?.wind_speed_10m
              : (currentWeather?.wind_speed_10m * 0.621371).toFixed(1)
        }
        unit={isLoading ? "" : isMetric ? " Km/h" : " Mph"}
      />
      <CurrentWeatherCard
        name="Precipitation"
        value={
          isLoading
            ? "—"
            : isMetric
              ? currentWeather?.precipitation
              : (currentWeather?.precipitation * 0.0393701).toFixed(2)
        }
        unit={isLoading ? "" : isMetric ? " Mm" : " In"}
      />
    </div>
  );
}

export default CurrentWeather;
