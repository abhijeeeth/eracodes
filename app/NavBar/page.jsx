import React from "react";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <nav className="bg-white h-16 p-4 flex justify-between items-center   w-full border-b-2 border-b-slate-100">
        <div className="flex items-center mr-24 ml-8">
          <div className="max-h-14 max-w-14 grayscale contrast-75">
            <Image src={logo}></Image>
          </div>
          <h1 className="text-blue-950 font-semibold ml-2">ERA</h1>
          <div className="flex items-center">
            <div className="bg-teal-900 rounded-xl px-2 text-white ml-2 drop-shadow-lg">
              <h1>Codes</h1>
            </div>
          </div>
          <div className=" bg-gray-200 m-4 p-2  rounded-2xl flex items-center drop-shadow-md">
            <AiOutlineSearch className="text-gray-800" />
            <input
              type="search"
              placeholder="Search"
              className="focus:outline-none focus:ring focus:ring-gray-200 bg-gray-200 ml-2"
            ></input>
          </div>
        </div>
        <div className="flex items-center p-4">
          <button className="drop-shadow-lg bg-cyan-950  hover:bg-cyan-700 text-white  py-2 px-4 rounded m-2  h-8 flex items-center">
            Log In
          </button>
          <button className="drop-shadow-lg bg-gray-300 hover:bg-gray-400  py-2 px-4 rounded m-2 text-black h-8 flex items-center">
            sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
