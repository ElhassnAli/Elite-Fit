import { useContext } from "react";
import { convertDate, WeatherContext } from "../context/WeatherContext";

function WeatherHeader() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData.address === undefined) return;
  return (
    <div className="flex flex-col justify-between md:items-start items-center text-2xl gap-5">
      <h3>
        {weatherData.address.city} {weatherData.address.country}
      </h3>
      <p>{convertDate(weatherData.data.current.time)}</p>
    </div>
  );
}

export default WeatherHeader;
