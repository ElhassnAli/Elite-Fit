import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src="/design/logo.svg" alt="logo" />
      <div className=" flex text-white items-center justify-between relative">
        <button className=" flex justify-between items-center  bg-[#25253f] p-2 rounded-xl">
          <IoSettingsOutline color="white" />
          <span className="px-1">Units</span>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Header;
