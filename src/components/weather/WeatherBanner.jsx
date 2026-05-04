import WeatherHeader from "./WeatherHeader";
import WeatherMain from "./WeatherMain";
import { useWeather } from "../../context/WeatherContext";
import Loader from "../common/Loader";

function WeatherBanner() {
  const { weatherData, isLoading } = useWeather();
  if (!weatherData.data && !isLoading) return null;
  return (
    <div
      className={` h-60 rounded-4xl flex ${!isLoading && "md:px-10 p-5"} flex-col md:flex-row justify-between items-center md:bg-[url(/design/bg-today-large.svg)] bg-cover bg-center bg-[url(/design/bg-today-small.svg)]`}
    >
      {isLoading ? (
        <div className="w-full h-full rounded-4xl flex justify-center flex-col gap-3 items-center bg-[#25253f]">
          <Loader />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <WeatherHeader />
          <WeatherMain />
        </>
      )}
    </div>
  );
}

export default WeatherBanner;
