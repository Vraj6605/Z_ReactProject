import React from "react";
import { COU, S21, AU, SET } from "../Assets";

function About() {
  return (
    <section className="sm:w-[100%]">
      <div className="mt-[77.81px] sm:gap-[80px] lg:justify-between lg:flex flex-1">
        {/* Left Part-- Start */}
        <div className="sm:ml-[120px] sm:flex mt-[91px]">
          <img
            className="lg:w-[612px] sm:w-[412] lg:h-[408px] h-[auto] "
            src={AU}
          />
        </div>
        {/* Left Part-- End */}

        {/* Right Part-- Start */}
        <div className="lg:w-[658px] w-[100%] lg:h-[475px] h-[auto] lg:mr-[130px] mr-[0px] sm:p-[20px]">
          <h1 id="About" className="font-Rubik font-[500] sm:text-[48px] text-[40px] leading-[56.88px] text-center lg:text-start">
            ABOUT US
          </h1>

          {/* Border -Start */}
          <div className="flex items-center lg:ml-0 m-auto w-[238px]  mb-[30px]">
            <p className="w-[156px] h-[7px] rounded-lg bg-[#A9A9A9]"></p>
            <p className="h-[1px] w-[82px] bg-[#A9A9A9]"></p>
          </div>
          {/* Border -End */}

          <p className="font-Rubik font-[300] lg:ml-0 ml-3 text-left   text-[18px] leading-[26.55px]  text-[#2C2C2C]">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creaKvity, results and
            excepKonal levels of customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>

          <div className="sm:flex flex-1  sm:justify-between  mt-[40px]">
            <div className="sm:w-[273px] w-[90%] lg:h-[89px] h-auto m-auto flex-1 justify-start">
              <img className="w-[40px] h-[41px]" src={SET} />
              <h1 className="font-Rubik font-[500] text-[24px] leading-[28.44px] mt-[25px]">
                Engagement
              </h1>
              <p className="sm:w-[273px] w-[100%] sm:h-[89px] font-Rubik text-[18px] font-[400] leading-[26.55px] mt-[15px]">
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum. READ MORE
              </p>
            </div>

            <div className="sm:w-[273px] w-[90%] lg:h-[89px] h-[auto] m-auto lg:mt-[0px] mt-[30px] flex-1 justify-start">
              <img className="w-[40px] h-[41px]" src={COU} />
              <h1 className="font-Rubik font-[500] text-[24px] leading-[28.44px] mt-[25px]">
                Communications
              </h1>
              <p className="sm:w-[273px] w-[100%] sm:h-[89px] font-Rubik text-[18px] font-[400] leading-[26.55px] mt-[15px]">
                We are award-winning leaders in communications and campaign
                management. READ MORE
              </p>
            </div>
          </div>
        </div>
        {/* Right Part-- End */}
      </div>
    </section>
  );
}

export default About;
