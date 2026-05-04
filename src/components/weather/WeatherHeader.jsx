import { useWeather } from "../../context/WeatherContext";
import { formatDate } from "../../utils/dateFormatter";

function WeatherHeader() {
  const { weatherData } = useWeather();
  if (weatherData.address === undefined) return;
  return (
    <div className="flex flex-col justify-between md:items-start items-center text-2xl gap-5">
      <h3>
        {weatherData.address.city} {weatherData.address.country}
      </h3>
      <p>{formatDate(weatherData.data.current.time)}</p>
    </div>
  );
}

export default WeatherHeader;
