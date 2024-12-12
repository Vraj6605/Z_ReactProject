import React from "react";
import { S23, C1, C2, C3, C4, C5, C6, C7, C8, C9 } from "../Assets";
function Client() {
 
  return (
    <div className="flex-1 mb-[75px] relative ">
      <h1 className="text-center font-Rubik font-[500] lg:text-[48px] text-[40px] leading-[56.88px] ">
        OUR CLIENTS
      </h1>
      {/* Border -Start */}
      <div className="flex items-center w-[310px] mb-[45px] m-auto">
        <p className="w-[104px] h-[7px] rounded-lg bg-[#A9A9A9]"></p>
        <p className="h-[2px] w-[206px] bg-[#A9A9A9]"></p>
      </div>
      {/* Border -End */}
      <div className="lg:w-[1112px] w-[100%] lg:h-[452px] h-auto m-auto flex justify-center flex-wrap items-center lg:gap-8 gap-11 px-[20px] lg:px-0" >
        <img src={C1} />
        <img src={C2} />
        <img src={C3} />
        <img src={C4} />
        <img src={C5} />
        <img src={C6} />
        <img src={C7} />
        <img src={C8} />
        <img src={C9} />
      </div>
      <img className="absolute  lg:bottom-[189px] bottom-[900px]" src={S23} />
    </div>
  );

}

export default Client;
