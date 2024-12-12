import React from "react";

function Footer() {
  return (
    <div className="lg:flex flex-1 lg:justify-evenly  lg:w-[1340px] w-[100%]  lg:h-[208px] h-auto bg-[#BFDBFF] m-auto py-[41px] lg:px-[111px] px-[50px] lg:mb-[22px] mb-0 flex-wrap">
      <div>
        <h1 className="font-Rubik font-[700] text-[16px] leading-[35.36px] lg:text-start text-center">
          Social
        </h1>
        <ul className="text-[#2C2C2C] font-Rubik font-[400] text-[14px] leading-[30.94px] text-center">
          <li className="list-image-[url('./assets/Face.png')] list-inside lg:list-outside">Facebook</li>
          <li className="list-image-[url('./assets/Link.png')] list-inside lg:list-outside">LinkedIn</li>
          <li className="list-image-[url('./assets/Goog.png')] list-inside lg:list-outside">Google+</li>
        </ul>
      </div>
      <div>
        <h1 className="font-Rubik font-[700] text-[16px] leading-[35.36px] text-center">
          Explore
        </h1>
        <ul className="text-[#2C2C2C] font-Rubik font-[400] text-[14px] leading-[30.94px] text-center">
          <li>Services</li>
          <li>Team</li>
          <li>Clients</li>
        </ul>
      </div>
      <div>
        <h1 className="font-Rubik font-[700] text-[16px] leading-[35.36px] text-center">
          Contact
        </h1>
        <ul className="text-[#2C2C2C] font-Rubik font-[400] text-[14px] leading-[30.94px] text-center">
          <li>Lorem Ipsum dummy address</li>
          <li>used for display</li>
          <li>1234567890</li>
        </ul>
      </div>
      <div>
        <h1 className="font-Rubik font-[700] text-[16px] leading-[35.36px] text-center">
          Email
        </h1>
        <ul className="text-[#2C2C2C] font-Rubik font-[400] text-[14px] leading-[30.94px] text-center">
          <li>mendlesoncommunication@email.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

