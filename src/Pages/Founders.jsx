import React from "react";
import Bir from "../img/founders/founders1.jpg";
import Ikki from "../img/founders/founders2.jpg";
import Uch from "../img/founders/founders3.jpg";
import Tort from "../img/founders/founders4.jpg";
import Besh from "../img/founders/founders5.jpg";
import Olti from "../img/founders/founders6.jpg";

export default function Founders() {
  let f_datas = [
    {
      id: 1,
      img: Bir,
    },
    {
      id: 2,
      img: Ikki,
    },
    {
      id: 3,
      img: Uch,
    },
    {
      id: 4,
      img: Tort,
    },
    {
      id: 5,
      img: Besh,
    },
    {
      id: 6,
      img: Olti,
    },
  ];

  return (
    <div>
      <div className=" text-[#a1eebd] flex flex-col items-center gap-y-10 py-10 container m-auto">
        <h1 className="founders_h1 text-4xl font-bold cursor-text">Founders</h1>
        <p className="founders_p text-lg font-semibold rounded-xl p-10 cursor-text">
          Welcome to Stork Industry! We're a team of dedicated individuals who
          share a common passion for revolutionizing the delivery industry. Our
          journey began with a simple yet powerful idea: to redefine convenience
          and reliability in the realm of delivery services. As founders, we saw
          an opportunity to bridge the gap between efficiency and customer
          satisfaction. With relentless determination and a commitment to
          excellence, we've transformed Stork Industry into a premier platform
          for seamless delivery solutions. Our mission is clear: to connect
          people with the goods they need, when they need them, all while
          prioritizing speed, security, and sustainability. At Stork Industry,
          innovation is our driving force, and customer-centricity is our
          mantra. Join us as we continue to soar to new heights, delivering more
          than just packages – delivering peace of mind.
        </p>
      </div>
      <div className="container m-auto">
        <div className="names text-4xl font-bold cursor-text flex justify-center gap-x-40 uppercase">
          <h1>ergashev abdulaziz</h1>
          <h1>qirgizboyev qodirxon</h1>
        </div>
        <div className="cards_father grid grid-cols-3 gap-x-[18rem] gap-y-20 py-10">
          {f_datas.map((item) => (
            <div
              className="card_img w-[20rem] h-[20rem] border-4 border-[#a1eebd]"
              key={item.id}
            >
              <img
                src={item.img}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
