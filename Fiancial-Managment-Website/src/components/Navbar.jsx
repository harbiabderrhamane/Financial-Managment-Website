import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href=""> Home</a>
        </li>
        <li className="p-4">
          <a href="">Company</a>
        </li>
        <li className="p-4">
          <a href="">Resources</a>
        </li>
        <li className="p-4">
          <a href="">About</a>
        </li>
        <li className="p-4">
          <a href="">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        onClick={handleNav}
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-l border-l-gray-900 h-full ease-in-out duration-500 bg-black"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="pt-8 w-full text-3xl font-bold text-[#00df9a] pl-4">
          REACT.
        </h1>
        <ul className="pt-10 pl-4 ">
          <li className="p-4 border-b border-gray-600">
            <a href=""> Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="">Company</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="">Resources</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="">About</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
