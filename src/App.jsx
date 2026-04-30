import { useState } from "react";
import Header from "./components/Header";
import { WeatherContext } from "./context/WeatherContext";
import AppTitle from "./components/AppTitle";
import SearchBar from "./components/SearchBar";
import WeatherBanner from "./components/WeatherBanner";
import HourlyForecast from "./components/HourlyForecast";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";

WeatherContext;
function App() {
  const [isMetric, setIsMetric] = useState(true);
  const [unitSysOpen, setUnitSysOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesWeGet, setCountriesWeGet] = useState([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [address, setAddress] = useState({});
  const [hourlyForecastDay, setHourlyForecastDay] = useState({
    dayName: "",
    dayNum: 0,
  });
  const [selectDayDropDawn, setSelectDayDropDawn] = useState(false);

  async function getCountry(city) {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=4&language=en&format=json`,
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      setCountriesWeGet(data.results);
    } else {
      setCountriesWeGet([]);
    }
  }

  async function getWeather(address) {
    if (
      address.latitude === "" ||
      address.longitude === "" ||
      searchQuery === ""
    )
      return;
    let URL = `
https://api.open-meteo.com/v1/forecast?latitude=${address.latitude}&longitude=${address.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code,is_day&current=precipitation,temperature_2m,wind_speed_10m,weather_code,is_day,relative_humidity_2m,apparent_temperature&timezone=auto&past_days=0&forecast_days=7`;
    const res = await fetch(URL);
    const data = await res.json();
    if (data?.hourly?.time && data?.hourly?.time.length > 0) {
      setWeatherData({
        data: data,
        address: {
          city: address.name,
          country: address.country,
        },
      });
      setHourlyForecastDay({
        dayName: new Date(data.current.time).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        dayNum: 0,
      });
    } else {
      setWeatherData([]);
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        isMetric,
        setIsMetric,
        unitSysOpen,
        setUnitSysOpen,
        searchQuery,
        setSearchQuery,
        getCountry,
        countriesWeGet,
        suggestionsOpen,
        setSuggestionsOpen,
        getWeather,
        setAddress,
        address,
        weatherData,
        selectDayDropDawn,
        setSelectDayDropDawn,
        hourlyForecastDay,
        setHourlyForecastDay,
      }}
    >
      <div className="bg-[#02012b] md:w-[75%] w-[95%] m-auto text-white">
        <div className="">
          <Header />
          <AppTitle />
          <SearchBar />
        </div>
        <main className=" flex justify-between mt-10 flex-col md:flex-row">
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
    </WeatherContext.Provider>
  );
}

export default App;
//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=precipitation,temperature_2m,wind_speed_10m&&timezone=auto&past_days=0&forecast_days=7
