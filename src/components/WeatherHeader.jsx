import { useContext } from "react";
import { convertDate, WeatherContext } from "../context/WeatherContext";

function WeatherHeader() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData.address === undefined) return;
  return (
    <div className="flex flex-col justify-between items-start">
      <h3>
        {weatherData.address.city} {weatherData.address.country}
      </h3>
      <p>{convertDate(weatherData.data.current.time)}</p>
    </div>
  );
}

export default WeatherHeader;
