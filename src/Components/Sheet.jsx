import React from "react";
import { sheetImg1, sheetImg2, sheetImg3 } from "../assets";
import { SheetSection, fadeIn } from "../constants/constants";
import { motion } from "framer-motion";

const SheetBox = ({ index, image, name }) => (
  <motion.div
    className=" p-5 h-[240px] bg-primary-light rounded-lg flex flex-col"
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.5 }}
  >
    <img src={image} alt="" className="rounded-lg h-[170px]" />
    <h3 className="text-[15px] text-white font-semibold mt-4">{name}</h3>
  </motion.div>
);

const Sheet = () => {
  return (
    <div className="px-8">
      <div className="flex justify-between">
        <h3 className="section-header">New Song Sheet</h3>
        <a href="#" className="text-base text-nav-color font-medium">
          View all
        </a>
      </div>
      <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {SheetSection.map((sheet, index) => (
          <SheetBox key={index} index={index} {...sheet} />
        ))}
      </div>
    </div>
  );
};

export default Sheet;
