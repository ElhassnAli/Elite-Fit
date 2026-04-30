import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherInOneDay from "./WeatherInOneDay";

function DailyForecast() {
  const { weatherData, isMetric } = useContext(WeatherContext);
  if (weatherData.data === undefined) return;
  const dateOfNextSevenDays = weatherData.data.daily.time;
  const maxTempOfNextSevenDays = weatherData.data.daily.temperature_2m_max;
  const minTempOfNextSevenDays = weatherData.data.daily.temperature_2m_min;
  const WeatherCodeOfNextSevenDays = weatherData.data.daily.weather_code;
  return (
    <div className=" flex justify-between mt-10 flex-wrap md:flex-nowrap">
      {dateOfNextSevenDays.map((date, index) => (
        <WeatherInOneDay
          key={index}
          date={new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          })}
          min={
            isMetric
              ? Math.round(minTempOfNextSevenDays[index])
              : Math.round(minTempOfNextSevenDays[index] * 1.8 + 32)
          }
          max={
            isMetric
              ? Math.round(maxTempOfNextSevenDays[index])
              : Math.round(maxTempOfNextSevenDays[index] * 1.8 + 32)
          }
          weatherCode={WeatherCodeOfNextSevenDays[index]}
        />
      ))}
    </div>
  );
}

export default DailyForecast;
