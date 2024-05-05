import React from "react";
// import ContactUs from "../img/contact/ContactUs_1.jpg";
import ContactUs from "../img/contact/contact-us-girl.webp";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { PiNotePencilDuotone } from "react-icons/pi";
import { BsMicMute } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { IoIosRecording } from "react-icons/io";
import { FiVolume2 } from "react-icons/fi";
import { LiaPhoneSlashSolid } from "react-icons/lia";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";

export default function Contact() {
  const [title, setTitle] = useState(
    "Click 'view more' or 'call' button for calling us!"
  );

  const [showCallingView, setShowCallingView] = useState(false);

  const handleCall = () => {
    setShowCallingView(true);
  };

  return (
    <div className="mt-3">
      <img src={ContactUs} alt="" className="w-[100%] h-[49.85rem] blur-sm" />
      <div className="h1_c absolute bottom-[25rem] left-[75rem] p-2 flex flex-col gap-y-5">
        <h1 className="flex items-center gap-2 z-[9999] text-white text-2xl font-bold">
          How can you contact us <MdOutlineContactSupport />
        </h1>
        <h1 className="text-sm font-mono text-white font-bold w-96">
          In any case, stork industry's doors are open to our valued customers.
          And of course, our team can deliver the products to you as fast as a
          stork.
        </h1>
        <div className="flex items-center gap-x-5 text-[#fff] font-bold cursor-pointer">
          <p className="border-b-4 border-[#344955] flex items-center gap-x-3">
            <BsFillTelephoneOutboundFill className="text-[#344955]" />
            +998-93-908-03-35
          </p>
          <p className="border-b-4 border-[#344955] flex items-center gap-x-3">
            <BsFillTelephoneOutboundFill className="text-[#344955]" />
            +998-90-050-40-43
          </p>
        </div>
        <div className="flex gap-x-5 font-bold">
          <button
            className="bg-green-700 flex items-center gap-x-3 px-5 py-1 rounded-xl text-white"
            onClick={handleCall}
          >
            <BsFillTelephoneOutboundFill />
            Call
          </button>
          <button className="bg-[#e1306c] text-white flex items-center gap-x-3 px-5 py-1 rounded-xl">
            <PiInstagramLogoDuotone />
            Instagram
          </button>
          <button className="text-white bg-[red] flex items-center gap-x-3 px-5 py-1 rounded-xl">
            <AiFillYoutube />
            YouTube
          </button>
          <button className="bg-[#4267B2] text-white flex items-center gap-x-3 px-5 py-1 rounded-xl">
            <FaSquareFacebook />
            Facebook
          </button>
        </div>
        <h1 className="text-lg text-[#fff] font-semibold">
          ©2024. stork industry. created by{" "}
          <span className="text-[#344955] font-black text-2xl">Abdulaziz </span>
          and
          <span className="text-[#344955] font-black text-2xl"> Qodirxon</span>
        </h1>
      </div>
      {/* calling page */}
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="clicked_title text-[#a1eebd] text-center pt-16 text-3xl font-mono font-bold">
          {/* "For example, take your phone and just call us like this!" */}
          {title}
        </h1>
        <button
          className="bg-green-700 flex items-center gap-x-3 px-5 py-1 rounded-xl text-white"
          onClick={handleCall}
        >
          view more
        </button>
      </div>
      {showCallingView && (
        // <div className={`view ${showView ? "show" : ""}`}>
        <div className="calling flex flex-col items-center gap-y-10 p-20">
          <BsPersonCircle className="text-[silver] text-9xl" />
          <h1 className="text-[#a1eebd] text-2xl font-semibold">
            +998 93 908 03 35
          </h1>
          <h1 className="bg-green-700 px-5 py-1 rounded-xl text-white">
            Calling...
          </h1>
          <div className="grid grid-cols-3 gap-x-12 gap-y-16 items-center">
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <GoPerson className="text-3xl" />
              <h1 className="text-lg font-semibold">Contacts</h1>
            </span>
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <AiOutlinePlus className="text-3xl" />
              <h1 className="text-lg font-semibold">Add another...</h1>
            </span>
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <PiNotePencilDuotone className="text-3xl" />
              <h1 className="text-lg font-semibold">Notes</h1>
            </span>
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <BsMicMute className="text-3xl" />
              <h1 className="text-lg font-semibold">Mute</h1>
            </span>
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <AiOutlinePauseCircle className="text-3xl" />
              <h1 className="text-lg font-semibold">Pause</h1>
            </span>
            <span className="flex flex-col items-center gap-y-3 text-[#a1eebd] cursor-pointer">
              <IoIosRecording className="text-3xl" />
              <h1 className="text-lg font-semibold">Recorder</h1>
            </span>
          </div>
          <div className="flex text-5xl items-center gap-x-28 py-10">
            <FiVolume2 className="text-[#a1eebd] cursor-pointer" />
            <LiaPhoneSlashSolid className="text-[red] rounded-full cursor-pointer" />
            <PiDotsNineBold className="text-[#a1eebd] cursor-pointer" />
          </div>
        </div>
        // </div>
      )}
    </div>
  );
}
