import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="px-14 h-14 flex justify-between items-center bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-1 items-center justify-center">
          <IoLogoYoutube className="text-3xl text-red-600" />
          <span className="text-2xl ">YouTube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-900 rounded-r-3xl">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="flex gap-2 items-center text-xl">
          <RiVideoAddLine />
        </div>
        <div className="relative">
          <FaRegBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <div>
          <FaRegCircleUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
