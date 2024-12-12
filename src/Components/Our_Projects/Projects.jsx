import React from "react";
import { Oimg1,Oimg2,Oimg3,S24 } from "../Assets";

function Projects() {
  return (
    <div className="mb-[128px] relative overflow-x-clip">
      <h1 className="font-Rubik lg:text-[48px] text-[40px] font-[500] leading-[56.88px] text-center ">
        OUR PROJECTS
      </h1>
      {/* Border -Start */}
      <div className="flex items-center w-[362px] mb-[34px] m-auto">
        <p className="w-[103px] h-[7px] rounded-lg bg-[#A9A9A9]"></p>
        <p className="h-[2px] w-[259px] bg-[#A9A9A9]"></p>
      </div>
      {/* Border -End */}
      <div className="lg:w-[1130px] w-[100%] m-auto grid lg:grid-cols-2 grid-cols-1  gap-[22px] px-[20px] lg:px-0">
        <div className="row-span-2 flex justify-center ">
          <img src={Oimg1} />
        </div>
        <div className="flex justify-center">
          <img src={Oimg2} />
        </div>
        <div className="flex justify-center">
          <img src={Oimg3} />
        </div>
      </div>
      <img
        className=" lg:w-[371.17px] w-[200px] lg:h-[476.12px] h-auto rotate-6 absolute right-[-40.12px] lg:bottom-[561.73px] bottom-[1300px]"
        src={S24}
      />
    </div>
  );
}

export default Projects;
