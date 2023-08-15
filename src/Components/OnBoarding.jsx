import React from "react";
import { Arrow_Right, Smile } from "../assets";
import { Information, fadeIn } from "../constants/constants";
import { motion } from "framer-motion";

const OnBoardingBox = ({ index, icon, title, subtitle }) => {
  /* Fade in course box from right with delay*/
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="h-40 flex flex-col justify-center items-center gap-2 onboarding_boxes"
      >
        <img src={icon} alt="Book" />
        <h3 className="section-header">{title}</h3>
        <div className="flex gap-2">
          <p className="text-sm font-medium text-secondary-grey">{subtitle}</p>
          <img src={Arrow_Right} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

const OnBoarding = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col">
        <div className="flex mb-[7px]">
          <img src={Smile} alt="" className="mr-[6.5px]" />
          <h3 className="section-header">Welcome, Samuel!</h3>
        </div>
        <p className="section-text">
          Take your first steps towards building successful learning habits.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Information.map((info, index) => {
          return <OnBoardingBox key={info.title} index={index} {...info} />;
        })}
      </div>
    </div>
  );
};

export default OnBoarding;
