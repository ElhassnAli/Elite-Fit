import Header from "./components/layout/Header";
import { WeatherProvider } from "./context/WeatherContext";
import AppTitle from "./components/layout/AppTitle";
import SearchBar from "./components/search/SearchBar";
import WeatherBanner from "./components/weather/WeatherBanner";
import HourlyForecast from "./components/weather/HourlyForecast";
import CurrentWeather from "./components/weather/CurrentWeather";
import DailyForecast from "./components/weather/DailyForecast";
import Loader from "./components/common/Loader";
import { UiProvider } from "./context/UIContext";

function App() {
  return (
    <UiProvider>
      <WeatherProvider>
        <div className="bg-[#02012b] md:w-[75%] w-[95%] m-auto text-white">
          <div>
            <Header />
            <AppTitle />
            <SearchBar />
          </div>
          <main className=" flex justify-between mt-10 flex-col md:flex-row mb-10">
            <div className="md:w-[70%] ">
              <WeatherBanner />
              <CurrentWeather />
              <DailyForecast />
            </div>
            <aside className="md:w-[25%] mb-5 md:mb-0">
              <HourlyForecast />
            </aside>
          </main>
        </div>
      </WeatherProvider>
    </UiProvider>
  );
}

export default App;
