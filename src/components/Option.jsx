import React, { useContext } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { WeatherContext } from "../context/WeatherContext";
function Option({ props }) {
  const { isMetric } = useContext(WeatherContext);
  return (
    <div className="">
      <label className="text-gray-500 ">{props.label}</label>
      <li
        className={`text-white flex items-center justify-between ${isMetric ? "bg-neutral-600" : ""}  p-2 mb-2   rounded-xl`}
      >
        {props.options[0]}
        {isMetric && <IoMdCheckmark />}
      </li>
      <li
        className={`text-white flex items-center justify-between ${!isMetric ? "bg-neutral-600" : ""}  p-2 rounded-xl`}
      >
        {props.options[1]}
        {!isMetric && <IoMdCheckmark />}
      </li>
      {props.id <= 2 && <hr className="text-gray-500 mt-3" />}
    </div>
  );
}

export default Option;
