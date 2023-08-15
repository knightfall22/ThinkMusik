import React from "react";
import {
  Arrow_Down,
  Guitar,
  Search,
  Notification,
  Menu,
  Arrow_Right,
} from "../assets/";

// Search Bar Opens Only on Mobile screen - Link with mobile version of search icon
const SearchBar = ({ handleOpenSearchBar }) => (
  <div className="bg-primary-light py-1.5 px-8">
    <div className=" items-center w-full flex gap-4">
      <img
        src={Arrow_Right}
        alt=""
        className=" rotate-180 cursor-pointer"
        onClick={() => handleOpenSearchBar()}
      />
      <div className="flex-1 flex relative">
        <input
          type="text"
          className=" bg-primary-dark outline-none p-3 px-5 rounded-3xl text-sm font-medium text-white w-full"
          placeholder="Search"
        />
        <div className=" p-3 bg-slate-700 rounded-tr-3xl rounded-br-3xl absolute top-[1.5px] right-[2px] cursor-pointer hover:bg-primary-light transition-all duration-500 ease-in-out">
          <img src={Search} alt="Search" className="" />
        </div>
      </div>
    </div>
  </div>
);

const Navigation = ({ toggleMobileBar }) => {
  const [openSearchBar, setOpenSearchBar] = React.useState(false);

  // Toggle Mobile Bar
  const handleOpenSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };
  // Display Search Icon on mobile screen
  if (openSearchBar) {
    console.log("test");
    return <SearchBar handleOpenSearchBar={handleOpenSearchBar} />;
  }
  return (
    <div className=" bg-primary-light py-1.5 flex justify-between items-center px-5 sm:px-8 z-[500]">
      <div className="flex gap-2 md:gap-8 items-center cursor-pointer">
        {/* Display Menu on mobile screen */}
        {/* Open mobile sidebar */}
        <img
          src={Menu}
          alt=""
          className="block md:hidden "
          onClick={() => toggleMobileBar()}
        />
        <div className="flex gap-3 items-center">
          <img src={Guitar} alt="Bass" className=" sm:w-8 sm:h-8 w-7 h-7" />
          <div className="flex gap-3 sm:gap-6 cursor-pointer">
            <h3 className="text-[18px] md:text-[21px] text-white font-semibold">
              Bass
            </h3>
            <img src={Arrow_Down} alt="Open Menu" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* Display Search Icon on mobile screen */}
        {/* Open search bar on click */}
        <img
          src={Search}
          alt="Search"
          className="block sm:hidden mr-[10px] cursor-pointer hover:bg-gray-500 rounded-full p-2 hover:bg-opacity-30 transition-all duration-500 ease-in-out h-9 w-9"
          onClick={() => handleOpenSearchBar()}
        />
        {/* Hide Search Icon on mobile screen */}
        <div className="hidden sm:flex w-[250px] h-10 bg-primary-dark items-center gap-2 px-5 rounded-[5px] mr-[30px]">
          <img src={Search} alt="" />
          <input
            type="text"
            className="bg-transparent outline-none p-0 text-sm font-medium text-white"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <img
            src={Notification}
            alt="Notification"
            className="mr-[20px] md:mr-[38px] cursor-pointer hover:bg-gray-500 rounded-full p-2 hover:bg-opacity-30 transition-all duration-500 ease-in-out"
          />

          <div className="flex items-center gap-4">
            <div className="bg-secondary-light h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center">
              <h3 className="font-semibold text-[18px]">SA</h3>
            </div>
            <img src={Arrow_Down} alt="Open Settings" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
