import SelectOptions from "./SelectOptions";
// import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

function Header() {
  const [unitSysOpen, setUnitSysOpen] = useState(false);
  return (
    <header className="flex justify-between items-center mt-5  relative text-white">
      <img src="/design/logo.svg" alt="logo" />
      <div
        className=" flex justify-between items-center w-27 bg-neutral-700 px-2 text-[18px] rounded-[7px] cursor-pointer"
        onClick={() => setUnitSysOpen((e) => !e)}
      >
        <IoSettingsOutline size={18} />
        <span>Units</span>
        <IoIosArrowDown size={18} />
      </div>
      {unitSysOpen && <SelectOptions setUnitSysOpen={setUnitSysOpen} />}
    </header>
  );
}

export default Header;
