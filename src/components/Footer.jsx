import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-center items-center flex-col p-4 gradient-bg-footer">
 
        <a className="justify-center" href="/"><img src={logo} alt="logo" className="w-32" /></a>

     
 

    <div className="flex justify-center items-center flex-col mt-5">
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-black text-left text-xs">YouCodes</p>
      <p className="text-black text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
