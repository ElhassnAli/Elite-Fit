import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchButton() {
  const { getCountry, searchQuery } = useContext(WeatherContext);
  return (
    <button
      className="px-5 py-3 font-bold cursor-pointer rounded-2xl  bg-blue-500 ml-5 border-2 border-transparent focus-within:border-black"
      onClick={() => getCountry(searchQuery)}
    >
      Search
    </button>
  );
}

export default SearchButton;
