import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchButton() {
  const { getWeather, address, setSearchQuery } = useContext(WeatherContext);
  return (
    <>
      <button
        className="px-5 py-3 font-bold cursor-pointer rounded-2xl  bg-blue-500 md:ml-5 border-2 border-transparent focus-within:border-black"
        onClick={(e) => {
          getWeather(address);
          setSearchQuery("");
          console.log(e);
        }}
      >
        Search
      </button>
    </>
  );
}

export default SearchButton;
