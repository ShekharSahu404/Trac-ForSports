import React from "react";
import { GiTicket } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

const EventsCard = ({ price, date, img, name, loc, subname }) => {
  return (
    <div className="w-[90vw] xsm:h-[300px]  md:h-[280px] flex  sm:flex-col md:flex-row sm:items-center flex-row justify-start xsm:border-[2px] items-start pt-[25px] rounded-xl md:gap-5 hover:bg-slate-100 hover:cursor-pointer">
      <img
        src={img}
        alt=""
        className="xsm:w-[70%] md:w-[400px] xsm:h-[150px] md:h-[230px] object-cover rounded-xl"
      />
      <div className="flex flex-col justify-start items-start md:mt-1 xsm:mt-0 ">
        <h1 className="font-pop text-slate-500">{date}</h1>
        <h1 className="font-pop text-[20px] font-[600] md:mt-2 xsm:mt-0 hover:underline ">
          {name}
        </h1>
        <h1 className="font-pop text-slate-600 flex flex-row justify-center items-center md:mt-2 xsm:mt-0 text-[16px] gap-2">
          <IoLocationOutline className="size-[20px]" /> {loc}
        </h1>
        <h1 className="font-pop text-slate-800 flex flex-row justify-center items-center md:mt-2 xsm:mt-0 gap-2 text-[17px]">
          <GiTicket className="size-[20px]" /> Rs.{price}
        </h1>
        <div className="md:flex gap-4 xsm:hidden md:flex-row">
          {subname.map((sub) => (
            <div
              key={sub.subEvent}
              className=" mt-[20px] border-[2px] border-slate-300 rounded-[50px] h-[30px]  bg-slate-200 font-pop text-[14px] text-slate-800 flex items-center justify-center w-[120px]"
            >
              {sub.subEvent}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventsCard;
