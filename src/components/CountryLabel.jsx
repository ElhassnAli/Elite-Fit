import React from "react";

function CountryLabel({ props }) {
  return (
    <label className="text-white flex gap-3 rounded-2xl p-2 mb-2 hover:bg-neutral-600">
      <span>{props.name}</span>
      <span>{props.admin1}</span>
      <span>{props.country}</span>
    </label>
  );
}

export default CountryLabel;
