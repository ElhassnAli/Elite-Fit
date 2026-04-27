import React from "react";

function Day({ dayName }) {
  return (
    <span className="hover:bg-neutral-500 w-full pr-15 rounded-[5px] pl-3 cursor-pointer">{dayName}</span>
  );
}

export default Day;
