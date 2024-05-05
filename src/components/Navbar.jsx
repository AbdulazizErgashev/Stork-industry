import React from "react";
import Logo from "../img/stork_logo.jpg";
import { NavLink, Link } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";

export default function Navbar() {
  const logoClick = (event) => {
    window.location.href = "/"; // Redirect to the home page
    // event.preventDefault(); // to stop refreshing
    // console.log("Link clicked but page not refreshed!");
  };

  return (
    <div className="navbar bg-[#344955]">
      <div className="container m-auto py-5 flex justify-between items-center">
        <div className="flex items-center gap-x-8">
          {/* Link to home page */}
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="w-[4.5rem] rounded-full"
              onClick={logoClick}
            />
          </Link>
          <h1 className="capitalize text-[#A1EEBD] font-bold font-mono text-2xl cursor-text">
            stork industry
          </h1>
        </div>
        <ul className="flex gap-x-20 items-center text-[#A1EEBD] font-mono text-lg ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Founders">Founders</NavLink>
          </li>
          <li>
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact us</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-x-10 text-[#A1EEBD] font-mono">
          <button className="flex items-center gap-x-2 border-2 border-[#A1EEBD] rounded-2xl px-3 py-1 font-semibold">
            <IoLanguage /> English
          </button>
          <button className="flex items-center gap-x-2 border-2 border-[#A1EEBD] rounded-2xl px-3 py-1 font-semibold">
            <IoLanguage /> Russian
          </button>
          <button className="flex items-center gap-x-2 border-2 border-[#A1EEBD] rounded-2xl px-3 py-1 font-semibold">
            <IoLanguage /> Uzbek
          </button>
        </div>
      </div>
    </div>
  );
}
