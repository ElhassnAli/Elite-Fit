import { useWeather } from "../../context/WeatherContext";

function SearchButton() {
  const { handleSearchAndFetch, setSearchQuery, searchQuery } = useWeather();
  return (
    <>
      <button
        className="px-5 py-3 font-bold cursor-pointer rounded-2xl  bg-blue-500 md:ml-5 border-2 border-transparent focus-within:border-black"
        onClick={() => {
          handleSearchAndFetch();
          setSearchQuery("");
        }}
        disabled={searchQuery === ""}
      >
        Search
      </button>
    </>
  );
}

export default SearchButton;
