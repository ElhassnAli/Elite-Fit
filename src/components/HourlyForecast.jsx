import { useContext} from "react";
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
  const dataInHours = weatherData?.data?.hourly?.time;
  const temInHours = weatherData?.data?.hourly?.temperature_2m || [];
  const weatherCode = weatherData?.data?.hourly?.weather_code || [];
  return (
    <div className="relative bg-neutral-700 rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <p className="font-bold text-[20px]">HourlyForecast</p>
        <div className="relative flex items-center   bg-neutral-500  rounded-[10px]">
          <div
            className="flex items-center gap-2 px-3 cursor-pointer"
            onClick={() => {
              setSelectDayDropDawn((e) => !e);
            }}
          >
            <span>{hourlyForecastDay.dayName}</span>
            <IoIosArrowDown size={20} />
          </div>
          {selectDayDropDawn && (
            <DaySelector />
          )}
        </div>
      </div>
      {dataInHours?.slice(0, 24).map((data, index) => (
        <WeatherInOneHour
          data={data}
          key={data}
          temp={temInHours[index]}
          weatherCode={weatherCode[index]}
        />
      ))}
    </div>
  );
}

export default HourlyForecast;
