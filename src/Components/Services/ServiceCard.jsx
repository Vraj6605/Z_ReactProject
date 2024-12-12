import React from 'react'

function Service({item}) {
  return (
    <div className={`lg:flex flex-1  lg:w-[1136px] w-[100%] items-center mt-[50px] m-auto gap-[160px] ${item.flag && "flex-row-reverse"}`}>
      <div>
        <img className='m-auto'  src={item.img} />
      </div>
      <div className='sm:w-[529px] w-[100%] m-auto sm:h-[196px] '>
        <h1 className={`font-Rubik font-[500] sm:mb-[20px] mb-[5px] text-[#2C2C2C] lg:text-[42px] text-[30px] leading-[49.77px] text-center lg:mt-0 mt-4
          ${item.flag ? "lg:text-right" : "lg:text-start"} `} >{item.heading}</h1>
        <p className={`font-Rubik font-[400] text-[16px] leading-[23.6px] text-right 
          lg:${item.flag ? "text-right" : "text-start"} text-start pl-[20px] sm:p-[0px]`}>{item.para}</p>
      </div>
    </div>
  )
}

export default Service
