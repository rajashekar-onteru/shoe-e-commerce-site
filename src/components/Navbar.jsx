import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

function Navbar() {
  return (
    <header className="flex justify-between z-50 w-full h-[70px] fixed bg-white top-0 pt-6 shadow-lg ">
      <a href="/" className="px-16 max-md:px-6">
        <img src={headerLogo} alt="Logo" width={120} height={29} />
      </a>
      <div className="w-[60vw]">
        <ul className="flex-1 flex justify-evenly items-center max-lg:hidden">
          <li>
            <a href="" className="text-lg text-slate-gray">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray">About Us </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray">Products </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray">Contact Us </a>
          </li>
          <li className="text-lg text-slate-gray">
            <a>Sign in </a>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={hamburger}
          className="h-6 hidden max-lg:block cursor-pointer mr-6"
          alt="Logo"
        />{" "}
      </div>
    </header>
  );
}

export default Navbar;
