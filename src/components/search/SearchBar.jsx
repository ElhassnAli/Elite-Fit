import { IoSearch } from "react-icons/io5";
import { useWeather } from "../../context/WeatherContext";
import SearchButton from "./SearchButton";
import Suggestions from "./Suggestions";

import { useEffect, useState } from "react";

function SearchBar() {
  const { getCountry } = useWeather();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 2) {
      const timer = setTimeout(() => {
        getCountry(searchQuery);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, getCountry]);

  return (
    <form className=" flex justify-center flex-col md:flex-row items-center text-[18px] mt-5">
      <div className="flex  items-center md:mb-0 mb-5 bg-neutral-700 px-3 py-3 rounded-2xl border-2 border-transparent focus-within:border-white relative ">
        <IoSearch size={25} />
        <input
          type="text"
          placeholder="Search For A Place"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSuggestionsOpen(true);
          }}
          className="border-none md:pr-30  pr-10 outline-none pl-5"
        />
        {suggestionsOpen && (
          <Suggestions
            setSuggestionsOpen={setSuggestionsOpen}
            setSearchQuery={setSearchQuery}
          />
        )}
      </div>
      <SearchButton
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSuggestionsOpen={setSuggestionsOpen}
      />
    </form>
  );
}

export default SearchBar;
