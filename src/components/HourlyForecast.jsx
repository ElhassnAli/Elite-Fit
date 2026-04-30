import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherInOneHour from "./WeatherInOneHour";
import DaySelector from "./DaySelector";
import { IoIosArrowDown } from "react-icons/io";

function HourlyForecast() {
  const {
    weatherData,
    selectDayDropDawn,
    setSelectDayDropDawn,
    hourlyForecastDay,
  } = useContext(WeatherContext);

  if (weatherData.data === undefined) return;
  const start = hourlyForecastDay.dayNum * 24;
  const end = start + 24;
  const hoursOfWeek = weatherData?.data?.hourly?.time;
  const tempOfWeek = weatherData?.data?.hourly?.temperature_2m || [];
  const weatherCodeOfWeek = weatherData?.data?.hourly?.weather_code || [];
  const isDay = weatherData?.data?.hourly?.is_day || [];
  const currentHours = hoursOfWeek?.slice(start, end) || [];
  const currentTemps = tempOfWeek?.slice(start, end) || [];
  const currentCodes = weatherCodeOfWeek?.slice(start, end) || [];
  const dayOrNight = isDay?.slice(start, end) || [];

  return (
    <div className="relative bg-[#25253f] rounded-2xl p-5 ">
      <div className="flex justify-between items-center mb-7">
        <p className="font-bold text-[20px]">HourlyForecast</p>
        <div className="relative flex items-center   bg-[#3e3c5f]  rounded-[10px] ">
          <div
            className="flex items-center gap-2 px-3 cursor-pointer"
            onClick={() => {
              setSelectDayDropDawn((e) => !e);
            }}
          >
            <span>{hourlyForecastDay.dayName}</span>
            <IoIosArrowDown size={20} />
          </div>
          {selectDayDropDawn && <DaySelector />}
        </div>
      </div>
      <div className="overflow-y-auto h-133 custom-scrollbar ">
        {currentHours.map((data, index) => (
          <WeatherInOneHour
            data={data}
            key={data}
            temp={currentTemps[index]}
            weatherCode={currentCodes[index]}
            dayOrNight={dayOrNight[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
