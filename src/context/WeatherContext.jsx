import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeatherData } from "../servicrs/weathreAPI";
import { fetchCountryLocation } from "../servicrs/geocodingAPI";
const WeatherContext = createContext();

export function WeatherProvider({ children }) {
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length < 2) {
        setCountriesWeGet([]);
      } else {
        getCountry(searchQuery);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function getCountry(city) {
    try {
      const data = await fetchCountryLocation(city);
      if (data.results && data.results.length > 0) {
        setCountriesWeGet(data.results);
      } else {
        setCountriesWeGet([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getWeather() {
    if (!address?.latitude || !address?.longitude) return;
    try {
      setIsLoading(true);
      const data = await fetchWeatherData(address.latitude, address.longitude);
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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const data = useContext(WeatherContext);
  return data;
}
