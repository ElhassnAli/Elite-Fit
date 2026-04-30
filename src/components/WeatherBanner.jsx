import { useContext } from "react";
import WeatherHeader from "./WeatherHeader";
import WeatherMain from "./WeatherMain";
import { WeatherContext } from "../context/WeatherContext";

function WeatherBanner() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData.data === undefined) return;
  return (
    <div className=" h-60 rounded-4xl flex md:px-10 p-5 flex-col md:flex-row justify-between items-center bg-[url(./design/bg-today-large.svg)] bg-cover bg-center">
      <WeatherHeader />
      <WeatherMain />
    </div>
  );
}

export default WeatherBanner;
