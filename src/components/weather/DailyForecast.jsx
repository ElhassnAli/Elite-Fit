import { useWeather } from "../../context/WeatherContext";
import WeatherInOneDay from "./WeatherInOneDay";

function DailyForecast() {
  const { weatherData, isMetric, isLoading } = useWeather();
  if (!weatherData.data && !isLoading) return null;
  const dateOfNextSevenDays =
    weatherData?.data?.daily?.time || Array(7).fill(null);
  const maxTempOfNextSevenDays =
    weatherData?.data?.daily?.temperature_2m_max || Array(7).fill(null);
  const minTempOfNextSevenDays =
    weatherData?.data?.daily?.temperature_2m_min || Array(7).fill(null);
  const WeatherCodeOfNextSevenDays =
    weatherData?.data?.daily?.weather_code || Array(7).fill(null);

  return (
    <div className="mt-10">
      <span className="text-xl font-bold">Daily Forecast</span>
      <div className=" flex justify-between mt-5 flex-wrap md:flex-nowrap">
        {isLoading
          ? Array(7)
              .fill(0)
              .map((_, index) => (
                <div
                  className="md:w-[12.5%] w-[31%] mb-3 md:mb-0 bg-[#25253f] rounded-[10px] animate-pulse h-40"
                  key={index}
                ></div>
              ))
          : dateOfNextSevenDays.map((date, index) => (
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
    </div>
  );
}

export default DailyForecast;
