import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
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

  const getCountry = useCallback(async (city) => {
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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length < 2) {
        setCountriesWeGet([]);
      } else {
        getCountry(searchQuery);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, getCountry]);

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

  async function handleSearchAndFetch() {
    const isNewSearch =
      searchQuery.length > 0 &&
      address.name &&
      address.name.toLowerCase() !== searchQuery.toLowerCase();

    if (!address?.latitude || !address?.longitude || isNewSearch) {
      if (searchQuery.length < 2) return;

      try {
        setIsLoading(true);
        const locationData = await fetchCountryLocation(searchQuery);

        if (locationData.results && locationData.results.length > 0) {
          const selectedLocation = locationData.results[0];
          setAddress(selectedLocation);
          setSuggestionsOpen(false);

          const weatherData = await fetchWeatherData(
            selectedLocation.latitude,
            selectedLocation.longitude,
          );

          if (
            weatherData?.hourly?.time &&
            weatherData?.hourly?.time.length > 0
          ) {
            setWeatherData({
              data: weatherData,
              address: {
                city: selectedLocation.name,
                country: selectedLocation.country,
              },
            });
            setHourlyForecastDay({
              dayName: new Date(weatherData.current.time).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                },
              ),
              dayNum: 0,
            });
          } else {
            setWeatherData([]);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching location or weather:", error);
        setIsLoading(false);
      }
    } else {
      getWeather();
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
        handleSearchAndFetch,
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
