import { useEffect, useState } from "react";

import Header from "./components/Header";
import { WeatherContext } from "./context/WeatherContext";
import AppTitle from "./components/AppTitle";
import SearchBar from "./components/SearchBar";

WeatherContext;
function App() {
  const [isMetric, setIsMetric] = useState(true);
  const [unitSysOpen, setUnitSysOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesWeGet, setCountriesWeGet] = useState([]);

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
      }}
    >
      <div className="bg-[#02012b] w-[80%] m-auto text-white">
        <Header />
        <AppTitle />
        <SearchBar />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,wind_speed_10m&current=precipitation,temperature_2m,wind_speed_10m&past_days=0&forecast_days=7
