import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function CountryLabel({ props }) {
  const { setSearchQuery, setSuggestionsOpen, setAddress } =
    useContext(WeatherContext);
  console.log(props);

  return (
    <label
      className="text-white flex gap-3 rounded-2xl p-2 mb-2 hover:bg-neutral-600"
      onClick={() => {
        setSearchQuery(props.name);
        setSuggestionsOpen(false);
        setAddress(props);
      }}
    >
      <span>{props.name}</span>
      <span>{props?.admin1}</span>
      <span>{props.country}</span>
    </label>
  );
}

export default CountryLabel;
