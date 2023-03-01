import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/images/logo.jpeg";
import Model from '../../components/Home/Banner/Model';


import NavLinks from "../Layouts/Navlink";
const MinCategory = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="  ">
      <div className="   sm:hidden lg:items-center lg:font-medium lg:justify-around">
        <div className="p-2 md:w-auto w-[50%] flex justify-between">
          
          <div className="text-3xl md:hidden z-50 " onClick={() => setOpen(!open)}>
            <ion-icon style={{color:"black"}} name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
         
          <NavLinks />
        </ul>
      
        {/* Mobile nav */}
        <ul
               className={`  z-20 
        md:hidden bg-white fixed w-[50%] top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          
        
          <NavLinks />
         
        </ul>
      </div>
    </nav>
  );
};

export default MinCategory;
