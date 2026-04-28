import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function DaySelector() {
  const { weatherData, setSelectedDay } = useContext(WeatherContext);

  const days = weatherData?.daily?.time || [];

  return (
    <div className=" flex flex-col gap-5 absolute z-50 bg-neutral-700  top-10 p-3 text-[18px]  right-0 border border-gray-400 rounded-2xl">
      {days.map((day) => {
        const dayName = new Date(day).toLocaleDateString("en-US", {
          weekday: "long",
        });
        return (
          <span
            onClick={() => setSelectedDay(dayName)}
            key={dayName}
            className="hover:bg-neutral-500 w-full pr-15 rounded-[5px] pl-3 cursor-pointer"
          >
            {dayName}
          </span>
        );
      })}
    </div>
  );
}

export default DaySelector;
