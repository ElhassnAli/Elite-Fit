import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Day from "./Day";

function DaySelector() {
  const { weatherData } = useContext(WeatherContext);

  const days = weatherData?.daily?.time || [];

  return (
    <div className=" flex flex-col gap-5 absolute z-50 bg-neutral-700  top-10 p-3 text-[18px]  right-0 border border-gray-400 rounded-2xl">
      {days.map((day) => {
        const dayName = new Date(day).toLocaleDateString("en-US", {
          weekday: "long",
        });
        return <Day dayName={dayName} key={dayName} />;
      })}
    </div>
  );
}

export default DaySelector;
