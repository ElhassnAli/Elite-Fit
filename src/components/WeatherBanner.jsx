import WeatherHeader from "./WeatherHeader";
import WeatherMain from "./WeatherMain";

function WeatherBanner() {
  return (
    <div className=" flex justify-between items-center bg-[url(./design/bg-today-large.svg)] bg-cover bg-center">
      <WeatherHeader />
      <WeatherMain />
    </div>
  );
}

export default WeatherBanner;
