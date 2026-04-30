import { useContext } from "react";
import {
  convertWeatherCodeToIcon,
  WeatherContext,
} from "../context/WeatherContext";
function WeatherInOneHour({ data, temp, weatherCode, dayOrNight }) {
  const { isMetric } = useContext(WeatherContext);
  return (
    <div className="flex justify-between items-center bg-[#2f2f49] mb-5 rounded-[10px] p-2">
      <span className="flex items-center">
        <img
          className=""
          src={convertWeatherCodeToIcon(weatherCode, dayOrNight)}
          alt=""
          width={40}
        />
        <p className="">
          {new Date(data).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          })}
        </p>
      </span>
      <span>
        {isMetric ? temp : Math.round(temp * 1.8 + 32)}
        <span>&deg;</span>
      </span>
    </div>
  );
}

export default WeatherInOneHour;
