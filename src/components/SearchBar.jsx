import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { WeatherContext } from "../context/WeatherContext";
import SearchButton from "./SearchButton";
import Suggestions from "./Suggestions";

function SearchBar() {
  const { searchQuery, setSearchQuery, getCountry } =
    useContext(WeatherContext);

  console.log(searchQuery);

  return (
    <div className=" flex justify-center items-center text-[18px] mt-15">
      <div className="flex   items-center bg-neutral-700 px-3 py-3 rounded-2xl border-2 border-transparent focus-within:border-white relative">
        <IoSearch size={25} />
        <input
          type="text"
          placeholder="Search For A Place"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            getCountry(searchQuery);
          }}
          className="border-none pr-30 outline-none pl-5"
        />
        <Suggestions />
      </div>
      <SearchButton />
    </div>
  );
}

export default SearchBar;
