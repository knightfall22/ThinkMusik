import React from "react";
import {
  Navigation,
  OnBoarding,
  Request,
  Feature,
  ActiveCourses,
  Courses,
  Sheet,
  List,
} from "./";

const HomeScreen = ({ toggleMobileBar }) => {
  return (
    <div className="w-[100%] bg-primary-dark space-y-[75px] md:space-y-[65px]">
      <Navigation toggleMobileBar={toggleMobileBar} />
      <OnBoarding />
      <Request />
      <Feature />
      <ActiveCourses />
      <Courses />
      <Sheet />
      <List />
    </div>
  );
};

export default HomeScreen;
