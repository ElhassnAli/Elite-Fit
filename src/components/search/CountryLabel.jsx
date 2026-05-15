import { useWeather } from "../../context/WeatherContext";

function CountryLabel({ props, setSuggestionsOpen, setSearchQuery }) {
  const { setAddress } = useWeather();

  return (
    <button
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
    </button>
  );
}

export default CountryLabel;
