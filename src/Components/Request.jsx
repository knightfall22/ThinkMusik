import React from "react";
import { Money_Bag, Rocket } from "../assets";

const Request = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <a href="#" className="request-btn">
        <img src={Money_Bag} alt="" />
        Invite a friend
      </a>
      <a href="#" className="request-btn">
        <img src={Rocket} alt="" />
        Request a feature
      </a>
    </div>
  );
};

export default Request;
