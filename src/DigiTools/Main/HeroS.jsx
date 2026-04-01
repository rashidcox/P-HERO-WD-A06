import React from "react";
import Banner from "../../assets/banner.png";
import { RiRadioButtonLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

function HeroS() {
  return (
    <div className="w-10/12 p-10 mx-auto">
      <div className="flex justify-between">
        <div>
          <div className="bg-[#e1e7ff] px-3 py-1 rounded-full my-5 inline-flex">
            <span className="flex items-center gap-2 text-lg font-semibold text-blue-900"> <RiRadioButtonLine /> <p>New: AI-Powered Tools Available</p>  </span>
          </div>
          <div className="my-5">
            <h2 className="text-5xl font-bold text-gray-800">Supercharge Your Digital Workflow</h2>
          </div>
          <div className="my-5">
            <p>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          </div>
          <div className="my-5 flex gap-5">
            <button className="bg-linear-to-bl from-[#9415fa] to-[#612ff7] text-white px-5 py-2 rounded-full font-semibold">Explore Products</button>
            <button className="hover:bg-linear-to-bl hover:from-[#9415fa] hover:to-[#612ff7] hover:text-white border border-blue-900 text-blue-900 px-5 py-2 rounded-full font-semibold flex gap-2 items-center"><CiPlay1 /> Watch Demo</button>
          </div>
        </div>
        <div>
          <div><img src={Banner} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default HeroS;
