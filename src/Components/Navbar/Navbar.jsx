import React from "react";
import { LT, TR, logo } from "../Assets";


function Navbar() {
  return (
    <header  className="sticky top-0 bg-white z-40 ">
      <nav className="lg:flex flex-1">
        {/* Left Navbar --Start */}
        <div className="lg:w-[50%] w-[100%] flex lg:flex-1 gap-[11px] ">
          <img
            className="sm:w-[119px] w-[85px] sm:h-[111px] h-[80px]"
            src={LT}
            alt="No image"
          />
          <a href="#Home">
          <img
            className="lg:w-[295px] lg:h-[85px] w-[195px] h-[80px] aspect-auto "
            src={logo}
            alt="Logo"
          />
          </a>
        </div>
        {/* Right Navbar --End */}

        {/* Right Navbar --Start */}
        <div className="lg:w-[60%] w-[100%] flex relative sm:overflow-x-clip lg:pb-0 pb-[20px]">
          <ul className="sm:flex flex-1  lg:gap-[35px] gap-[20px] lg:justify-end sm:justify-center lg:items-center mr-[130px]">
            <li className="text-[18px] leading-[21.09px] font-[500]">
              <a href="#About">AboutUs</a>
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
            <a href="#Services">Services</a>
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
              <a href="#Team">Team</a>
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
              <a href="#Clients">Clients</a>
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500] z-20">
              <a href="#Contact">ContactUs</a>
            </li>
          </ul>
          <div>
            <img
              className="w-[359px] h-[376px] absolute sm:top-[-9px] sm:right-[-77px] max-lg:hidden"
              src={TR}
              alt="No Image"
            />
          </div>
        </div>
        {/* Right Navbar --End */}
      </nav>
    </header>
  );
}

export default Navbar;
