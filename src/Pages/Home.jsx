import React from "react";
import { FaShopify } from "react-icons/fa";
import Laylak from "../img/main_stork_img.webp";

export default function Home() {
  return (
    <div>
      <div className="container m-auto flex items-center justify-between py-28">
        <div className="flex flex-col items-start gap-y-[3.125rem] ">
          <h1 className="founders_h1 uppercase text-5xl text-[#A1EEBD] font-bold font-mono cursor-text">
            stork industries
          </h1>
          <p className="text-[#A1EEBD] font-medium text-xl cursor-text">
            Our team can deliver the products to you as fast as a stork.
          </p>
          <button className="shopping_btn flex items-center gap-x-3 font-mono text-[#A1EEBD] font-medium text-xl capitalize rounded-2xl p-5 border-4 border-[#A1EEBD] ">
            shopping now
            <FaShopify />
          </button>
        </div>
        {/*  */}
        <img
          src={Laylak}
          alt=""
          className="laylakRasmi border-4 border-[#a1eebd] rounded-[3.125rem] w-[37.5rem] h-[37.5rem]"
        />
      </div>
    </div>
  );
}
