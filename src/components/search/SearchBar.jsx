import { IoSearch } from "react-icons/io5";
import { useWeather } from "../../context/WeatherContext";
import SearchButton from "./SearchButton";
import Suggestions from "./Suggestions";
import { useUiContext } from "../../context/UIContext";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useWeather();
  const { setSuggestionsOpen, suggestionsOpen } = useUiContext();
  return (
    <div className=" flex justify-center flex-col md:flex-row items-center text-[18px] mt-5">
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
        {suggestionsOpen && <Suggestions />}
      </div>
      <SearchButton />
    </div>
  );
}

export default SearchBar;
