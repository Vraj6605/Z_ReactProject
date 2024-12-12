import React from "react";
import { LT, TR, logo } from "../Assets";
function Navbar() {
  return (
    <header>
      <nav className="lg:flex flex-1 ">
        {/* Left Navbar --Start */}
        <div className="lg:w-[50%] w-[100%] flex lg:flex-1 gap-[11px] ">
          <img
            className="sm:w-[119px] w-[85px] sm:h-[111px] h-[80px]"
            src={LT}
            alt="No image"
          />
          <img
            className="lg:w-[295px] lg:h-[85px] w-[195px] h-[80px] aspect-auto "
            src={logo}
            alt="Logo"
          />
        </div>
        {/* Right Navbar --End */}

        {/* Right Navbar --Start */}
        <div className="lg:w-[60%] w-[100%] flex relative sm:overflow-x-clip">
          <ul className="sm:flex flex-1 lg:gap-[35px] gap-[20px] lg:justify-end sm:justify-center lg:items-center mr-[130px]">
            <li className="text-[18px] leading-[21.09px] font-[500]">
              About Us
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
              Services
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">Team</li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
              Clients
            </li>
            <li className="text-[18px] leading-[21.09px] font-[500]">
              Contact Us
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
