import SelectOptions from "./SelectOptions";
// import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  // const [selectOptionsOpen, setSelectOptionsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mt-5">
      <img src="/design/logo.svg" alt="logo" />
      <div className="text-white flex justify-between items-center relative w-27 bg-neutral-600 px-2 text-[18px] rounded-[7px] cursor-pointer">
        <IoSettingsOutline size={18} />
        <span>Units</span>
        <IoIosArrowDown size={18} />
      </div>
    </div>
  );
}

export default Header;
