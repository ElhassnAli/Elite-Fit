import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function WeatherHeader() {
  const { address } = useContext(WeatherContext);
  return (
    <div className="flex flex-col justify-between items-start">
      <h3>
        {address.city} , {address.country}
      </h3>
      <p>Saturday , Aug 5, 2026</p>
    </div>
  );
}

export default WeatherHeader;
