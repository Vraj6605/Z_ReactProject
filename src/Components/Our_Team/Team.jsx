import React from 'react'
import teamData from "./teamData.json"
import Card from './Card';
import { S22 } from '../Assets';

function Team() {

  let team = teamData.map((item) => <Card team={item} />);
  
  return (
    <div className="relative">
      <h1 id='Team' className="lg:text-[48px] text-[40px] font-Rubik font-[500] text-center leading-[56.88px] ">OUR TEAM</h1>
       {/* Border -Start */}
       <div className="flex items-center w-[238px] m-auto mb-[40px] ">
          <p className="w-[101px] h-[7px] rounded-lg bg-[#A9A9A9]"></p>
          <p className="h-[2px] w-[140px] bg-[#A9A9A9]"></p>
        </div>
        {/* Border -End */}
      <div className="lg:flex flex-1 justify-center items-center lg:mx-[244px] mx-auto gap-[139px]">{team}</div>
      <img className="lg:w-[366px] w-[110px] lg:h-[431px] h-auto absolute lg:bottom-[301px] bottom-[1190px]"  src={S22} />
    </div>
  );
}

export default Team
