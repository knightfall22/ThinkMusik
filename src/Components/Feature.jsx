import React from "react";
import { FeatureImg } from "../assets";

const Feature = () => {
  return (
    <div className="px-8">
      <div
        className={`bg-cover sm:bg-center bg-right w-full h-[240px] rounded-lg p-7 flex flex-col justify-center items-start]`}
        style={{ backgroundImage: `url(${FeatureImg})` }}
      >
        <div className="flex flex-col justify-center items-center sm:items-start gap-4">
          <h3 className="text-white text-[20px] font-semibold w-[75%] sm:w-[33%]  text-center sm:text-left drop-shadow-text">
            Buy Quality Cheap Musical Instrument and get it delivered in 1-2days
          </h3>
          <a
            href="#"
            className="py-2 px-10 bg-white text-black rounded-3xl font-bold text-[15px]"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
