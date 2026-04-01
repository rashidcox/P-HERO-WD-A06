import React from "react";
import Banner from "../../assets/banner.png";
import { RiRadioButtonLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

function HeroS() {
  return (
    <div>
      <div className="p-10 gap-20 container mx-auto grid max-sm:grid-cols-1 grid-cols-2 items-center">
        <div>
          <div className="bg-[#e1e7ff] px-3 py-1 rounded-full my-5">
            <p className="flex items-center gap-2 text-lg font-semibold text-blue-900"> <RiRadioButtonLine /> New: AI-Powered Tools Available </p>
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
            <button className="bg-blue-900 text-white px-5 py-2 rounded-full font-semibold">Explore Products</button>
            <button className="border border-blue-900 text-blue-900 px-5 py-2 rounded-full font-semibold flex gap-2 items-center"><CiPlay1 /> Watch Demo</button>
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
