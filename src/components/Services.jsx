import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiGasPump } from "react-icons/gi";
import { SiWindicss } from "react-icons/si";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-black text-lg">{title}</h3>
      <p className="mt-1 text-black text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="w-full justify-center items-center gradient-bg-services">
    <div className="items-center justify-between md:p-20 py-12 px-4">
      <div className="justify-center items-start">
        <h1 className="text-black text-3xl sm:text-5xl justify-center py-2 ml-5 text-gradient pb-10">
          Why Choose Volant?
        </h1>
      </div>

      <div className="flex-1 flex flex-col md:flex-row justify justify-center items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Extremely Secure"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
         
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Gas Optimized"
          icon={<GiGasPump fontSize={21} className="text-white" />}
        
        />
        <ServiceCard
          color="bg-[#008080]"
          title="Fast Transactions"
          icon={<SiWindicss fontSize={21} className="text-white" />}
        
        />
      </div>
    </div>
  </div>
);

export default Services;
