import { convertWeatherCodeToIcon } from "../context/WeatherContext";
function WeatherInOneHour({ data, temp, weatherCode }) {
  return (
    <div className="flex justify-between items-center bg-neutral-500 mb-5 rounded-[10px] p-3">
      <span className="flex gap-2">
        {convertWeatherCodeToIcon(weatherCode)}
        <span>
          {new Date(data).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          })}
        </span>
      </span>
      <span>{temp}&deg;</span>
    </div>
  );
}

export default WeatherInOneHour;
