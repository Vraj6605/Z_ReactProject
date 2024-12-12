import React from "react";
import ServiceCard from "./ServiceCard";
import { S25, S26, S27 } from "../Assets";
import serviceData from "./serviceData.json";

function Service() {
  let data2 = serviceData.map((item) => <ServiceCard item={item} />);

  return (
    <section>
      <div className="lg:mt-[129px] mt-[40px] mb-[182px] ">
        <h1 id="Services" className="font-Rubik font-[500] lg:text-[48px] text-[40px] leading-[56.88px] text-center mb-[2px]">
          SERVICES
        </h1>
        {/* Border -Start */}
        <div className="flex items-center  ml-auto w-[238px] m-auto">
          <p className="w-[62px] h-[7px] rounded-lg bg-[#A9A9A9]"></p>
          <p className="h-[2px] w-[176px] bg-[#A9A9A9]"></p>
        </div>
        {/* Border -End */}

        <div className="relative overflow-hidden">
          {data2}
          <img
            className="sm:w-[250px] w-[100px] sm:h-[431px] h-auto absolute right-0 bottom-[1030px]"
            src={S25}
          />
          <img
            className="sm:w-[259px] w-[130px] sm:h-[471px] h-auto absolute rotate-6 right-[-40px] bottom-[150.61px]"
            src={S26}
          />
          <img
            className="sm:w-[259px] w-[150px] sm:h-[471px] h-auto absolute left-[-52px] bottom-[510px]"
            src={S27}
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
