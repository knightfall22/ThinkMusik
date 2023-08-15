import React from "react";
import {
  Play,
  Plus_Circle,
  courseImg1,
  courseImg2,
  courseImg3,
} from "../assets";
import { CourseLists, fadeIn } from "../constants/constants";
import { motion } from "framer-motion";

const CourseBox = ({ item, title, subtitle, image, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.5 }}
    className="h-[305px] p-5 bg-primary-light gap-4 rounded-lg"
  >
    <img
      src={image}
      alt=""
      className="rounded-lg object-cover object-center w-full max-h-[170px]"
    />
    <div className="mt-4">
      <h3 className="text-[18px] font-semibold text-white mb-3">{title}</h3>
      <div className="flex justify-between items-center ">
        <p className="text-[13px] font-medium text-secondary-grey">
          {subtitle}
        </p>
        <div className="flex gap-7 items-center">
          <img src={Plus_Circle} alt="" />
          <img src={Play} alt="" />
        </div>
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <div className="px-8">
      <div className="flex justify-between">
        <h3 className="section-header">New Courses</h3>
        <a href="#" className="text-base text-nav-color font-medium">
          View all
        </a>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CourseLists.map((item, index) => (
          <CourseBox key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
