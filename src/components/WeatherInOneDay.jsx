import React from "react";
import { convertWeatherCodeToIcon } from "../context/WeatherContext";

function WeatherInOneDay({ min, max, date, weatherCode }) {
  // convertWeatherCodeToIcon
  return (
    <div className="md:w-[12.5%] w-[31%] mb-3 md:mb-0 bg-[#25253f] rounded-[10px]">
      <div className=" flex flex-col p-3 justify-center items-center">
        <span className=" text-[18px]">{date}</span>
        <img src={convertWeatherCodeToIcon(weatherCode, 1)} alt="" />
      </div>
      <div className="flex justify-between items-center p-3">
        <span className="font-bold text-[18px]">{max}</span>
        <span>{min}</span>
      </div>
    </div>
  );
}

export default WeatherInOneDay;
