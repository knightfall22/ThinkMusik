import React from "react";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

import { Logo, Menu } from "../assets";
import {
  OverlayVariants,
  SideVariants,
  SiderBarItems,
  SiderBarItemsBottom,
} from "../constants/constants";

const Mobile_Sidebar = ({ isMobileBarOpen, setIsMobileBarOpen }) => {
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="">
      <motion.div
        className=" h-[100%] fixed bg-black bg-opacity-50 z-[1000] inset-0 overflow-hidden"
        onClick={() => setIsMobileBarOpen(false)}
        variants={OverlayVariants}
        initial="hidden"
        animate={isMobileBarOpen ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={`bg-primary-light w-[290px] fixed inset-0 z-[2000] `}
        variants={SideVariants}
        initial="hidden"
        animate={isMobileBarOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-center gap-4 h-[60px]">
          <img src={Menu} alt="" className="cursor-pointer" />
          <img src={Logo} alt="" />
        </div>

        <ul className="mt-3 space-y-1">
          {SiderBarItems.map((item) => (
            <li
              className="py-3.5 pl-10 flex text-[13px] font-medium text-secondary-grey gap-4 items-center menu-item"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {hoveredItem !== item.name ? (
                <ReactSVG
                  src={item.icon}
                  beforeInjection={(svg) => {
                    svg.classList.add("menu-icon");
                  }}
                />
              ) : (
                <ReactSVG
                  src={item.highlight}
                  beforeInjection={(svg) => {
                    svg.classList.add("menu-icon");
                  }}
                />
              )}
              {item.name}
            </li>
          ))}

          <hr className=" border-secondary-grey border-opacity-30"></hr>
        </ul>

        <ul className="mt-3 space-y-1">
          {SiderBarItemsBottom.map((item, index) => (
            <li
              className="py-3.5 pl-10 flex text-[13px] font-medium text-secondary-grey gap-4 items-center menu-item"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {hoveredItem !== item.name ? (
                <ReactSVG
                  src={item.icon}
                  beforeInjection={(svg) => {
                    svg.classList.add("menu-icon");
                  }}
                />
              ) : (
                <ReactSVG
                  src={item.highlight}
                  beforeInjection={(svg) => {
                    svg.classList.add("menu-icon");
                  }}
                />
              )}
              {item.name}
              {index === SiderBarItemsBottom.length - 1 ? (
                <div
                  href="#"
                  className="bg-coming-soon-color bg-opacity-30 p-2 rounded-3xl"
                >
                  <h4 className=" text-coming-soon-color text-[12px]">
                    Coming Soon
                  </h4>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Mobile_Sidebar;
