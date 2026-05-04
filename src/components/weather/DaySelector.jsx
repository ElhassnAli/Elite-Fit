import { useWeather } from "../../context/WeatherContext";

function DaySelector() {
  const { weatherData, setSelectDayDropDawn, setHourlyForecastDay } =
    useWeather();

  const days = weatherData?.data?.daily?.time || [];

  return (
    <div className=" flex flex-col gap-5 absolute z-auto bg-[#25253f]  top-10 p-3 text-[18px]  right-0 border border-gray-400 rounded-2xl">
      {days.map((day, index) => {
        const dayName = new Date(day).toLocaleDateString("en-US", {
          weekday: "long",
        });
        return (
          <span
            onClick={() => {
              setSelectDayDropDawn(false);
              setHourlyForecastDay({ dayName: dayName, dayNum: index });
            }}
            key={dayName}
            className="hover:bg-[#2f2f49] w-full pr-15 rounded-[5px] pl-3 cursor-pointer"
          >
            {dayName}
          </span>
        );
      })}
    </div>
  );
}

export default DaySelector;
