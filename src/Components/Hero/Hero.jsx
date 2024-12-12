import React from "react";
import { BL, BR, hu } from "../Assets";

function Hero() {
  return (
    <section className="lg:flex flex-1">
      {/* Hero Left -- Start */}
      <div className="flex lg:items-end lg:w-[60%] w-[100%] relative bg-[url('././assets\BC.png')] bg-no-repeat sm:bg-cover max-lg:bg-bottom">
        <img
          className="lg:w-[266px] w-[100px] lg:h-[580px] h-[360px] lg:mt-[209px] mt-[20px]"
          src={BL}
          alt="No image"
        />
        <img
          className="lg:w-[643.63px] sm:w-[420px] w-[390px] lg:h-[438.44px] sm:h-[300px] h-[210px] absolute bottom-0 lg:left-[148.19px] left-0 max-sm:hidden"
          src={hu}
          alt="No image"
        /> 
        <div className="w-[210px] absolute lg:invisible visible lg:right-[130px] sm:right-[60px] right-[30px] sm:font-[500] sm:text-[30px] mt-[40px] ">
          <h1 className="max-sm:font-[700] text-[26px]">
            Mendleson Communication and Engagement
          </h1>
        </div>
      </div>
      {/* Hero Left -- End */}

      {/* Hero Right -- Start */}
      <div className="lg:w-[40%] w-[100%] lg:relative max-lg:hidden block">
        {/* Text Data --Start */}
        <div className="lg:w-[459px] lg:h-[198px] lg:mt-[161px] lg:visible invisible ">
          <h1 className="lg:font-[500] lg:text-[56px] leading-[66.36px]">
            Mendleson Communication and Engagement{" "}
          </h1>
        </div>
        <div className="lg:w-[544px] lg:h-[67px] lg:mt-[25px]  lg:visible invisible ">
          <p className="text-[18px] lg:leading-[21.33px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            sed ipsum, ut quam volutpat, tortor.
          </p>
        </div>
        {/* Text Data --End */}

        <div className="overflow-hidden max-lg:hidden block lg:mr-[-33px]">
          <img
            className="w-[207px] h-[249px] lg:absolute lg:bottom-[11.19px] lg:right-0 "
            src={BR}
            alt="No Image"
          />
        </div>
      </div>
      {/* Hero Right -- End */}
      
    </section>
  );
}

export default Hero;

