import { useState } from "react";

import Header from "./components/Header";
import { WeatherContext } from "./context/WeatherContext";
import AppTitle from "./components/AppTitle";
import SearchBar from "./components/SearchBar";
import WeatherBanner from "./components/WeatherBanner";
import HourlyForecast from "./components/HourlyForecast";

WeatherContext;
function App() {
  const [isMetric, setIsMetric] = useState(true);
  const [unitSysOpen, setUnitSysOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesWeGet, setCountriesWeGet] = useState([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [address, setAddress] = useState({
    lat: "",
    lon: "",
    city: "",
    country: "",
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

    console.log(data.results);
  }

  async function getWeather(address) {
    if (address.lat === "" || address.lon === "") return;
    let URL = `
https://api.open-meteo.com/v1/forecast?latitude=${address.lat}&longitude=${address.lon}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=precipitation,temperature_2m,wind_speed_10m&past_days=0&forecast_days=7`;

    const res = await fetch(URL);
    const data = await res.json();
    if (data.hourly.time && data.hourly.time.length > 0) {
      setWeatherData(data);
    } else {
      setWeatherData([]);
    }
    console.log(weatherData);
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
      }}
    >
      <div className="bg-[#02012b] w-[75%] m-auto text-white">
        <div>
          <Header />
          <AppTitle />
          <SearchBar />
        </div>
        <main className=" flex justify-between ">
          <div className="w-[70%]">
            <WeatherBanner />
          </div>
          <aside className="w-[25%]">
            <HourlyForecast />
          </aside>
        </main>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=precipitation,temperature_2m,wind_speed_10m&past_days=0&forecast_days=7
