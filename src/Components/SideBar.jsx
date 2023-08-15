import React, { useEffect } from "react";
import { Logo, Menu } from "../assets";
import { ReactSVG } from "react-svg";
import {
  SiderBarIcons,
  SiderBarItems,
  SiderBarItemsBottom,
} from "../constants/constants";

/* Icon Sidebar */
const Icon_Sidebar = ({
  handleToggle,
  handleMouseEnter,
  handleMouseLeave,
  hoveredItem,
}) => (
  <div className="bg-primary-light xl:w-[8%] md:w-[12%] md:block hidden w-0">
    <div className="flex flex-col items-center justify-center gap-4 mt-[1rem]">
      <div>
        <img
          src={Menu}
          onClick={() => handleToggle()}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex flex-col gap-4 items-center justify-center">
        {SiderBarIcons.map((item) => (
          <li
            className="flex flex-col items-center justify-center text-[12px] text-white gap-3 icon-menu-items"
            key={item.name}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
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
      </ul>
    </div>
  </div>
);

/* Sidebar */
const SideBar = () => {
  /* Toggle dictate the currently shown navbar */
  const [toggle, setToggle] = React.useState(false);
  /* Display icon logic */
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [breakpoint, setBreakpoint] = React.useState(false);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleToggle = () => {
    if (breakpoint) {
      setToggle(false);
    } else {
      setToggle(!toggle);
    }
  };
  /* Set Icon nav to be only visible nav on 1280 breakpoint*/
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setBreakpoint(true);
        setToggle(true);
      } else {
        setBreakpoint(false);
        setToggle(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  {
    /* Display Icon sidebar depending on toggle state */
  }
  if (toggle) {
    return (
      <Icon_Sidebar
        handleToggle={handleToggle}
        toggle={toggle}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        hoveredItem={hoveredItem}
        disabled
      />
    );
  }

  return (
    <div className="bg-primary-light md:w-[25%] md:block hidden w-0 ">
      <div className="flex items-center justify-center gap-4 h-[60px]">
        <img
          src={Menu}
          alt=""
          onClick={() => handleToggle()}
          className="cursor-pointer"
        />
        <img src={Logo} alt="" />
      </div>

      <ul className="mt-3 space-y-1">
        {SiderBarItems.map((item) => (
          // Change Icon displayed depending on hovered
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
          // Change Icon displayed depending on hovered
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
    </div>
  );
};

export default SideBar;
