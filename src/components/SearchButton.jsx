import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchButton() {
  const { getWeather, address, setSearchQuery } = useContext(WeatherContext);
  return (
    <button
      className="px-5 py-3 font-bold cursor-pointer rounded-2xl  bg-blue-500 ml-5 border-2 border-transparent focus-within:border-black"
      onClick={() => {
        getWeather(address);
        setSearchQuery("");
      }}
    >
      Search
    </button>
  );
}

export default SearchButton;
