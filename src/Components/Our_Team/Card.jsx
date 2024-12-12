import React from "react";

function Card({ team }) {
  return (
    <div className="flex-1 lg:mb-[119px] mb-[40px]">
      <div className="flex justify-center">
      <img src={team.img} />
      </div>
      <div className="flex justify-center">
        <h1 className="font-Rubik font-[400] text-[24px] leading-[28.44px] lg:mt-[53px] mt-[20px]">
          {team.name}
        </h1>
      </div>
    </div>
  );
}

export default Card;
