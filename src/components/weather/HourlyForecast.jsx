import { useWeather } from "../../context/WeatherContext";
import WeatherInOneHour from "./WeatherInOneHour";
import DaySelector from "./DaySelector";
import { IoIosArrowDown } from "react-icons/io";
import { useUiContext } from "../../context/UIContext";

function HourlyForecast() {
  const { weatherData, hourlyForecastDay, isLoading } = useWeather();
  const { selectDayDropDawn, setSelectDayDropDawn } = useUiContext();

  if (!weatherData.data && !isLoading) return null;
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
        <p className="font-bold text-xl">HourlyForecast</p>
        <div className="relative flex items-center   bg-[#3e3c5f]  rounded-[10px] ">
          <div
            className="flex items-center gap-2 px-3 cursor-pointer"
            onClick={() => {
              setSelectDayDropDawn((e) => !e);
            }}
          >
            <span>{isLoading ? "—" : hourlyForecastDay.dayName}</span>
            <IoIosArrowDown size={20} />
          </div>
          {selectDayDropDawn && <DaySelector />}
        </div>
      </div>
      <div className="overflow-y-auto h-145 custom-scrollbar ">
        {isLoading
          ? Array(24)
              .fill(0)
              .map((_, index) => (
                <div
                  className="bg-[#2f2f49] mb-5 rounded-[10px] py-6  animate-pulse mr-3 "
                  key={index}
                ></div>
              ))
          : currentHours.map((data, index) => (
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
