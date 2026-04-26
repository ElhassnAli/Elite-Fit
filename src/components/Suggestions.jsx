import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CountryLabel from "./CountryLabel";

function Suggestions() {
  const { countriesWeGet } = useContext(WeatherContext);
  console.log(countriesWeGet);
if(countriesWeGet.length ===0 ) return
  return (
    <div className="text-white absolute top-17  p-3 left-0 bg-neutral-700 w-full  rounded-2xl">
      {countriesWeGet.map((country) => (
        <CountryLabel key={country.id} props={country} />
      ))}
    </div>
  );
}

export default Suggestions;
