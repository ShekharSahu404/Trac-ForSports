import React from "react";
import pic3 from "../../Assets/sports2.jpg";
import { GiTicket } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

function Card({
  key,
  EventName,
  User,
  Team,
  Total,
  Date,
  Location,
  SubEvents,
  Img,
}) {
  return (
    <div
      key={key}
      className="  h-[280px] px-3 flex flex-row justify-start my-4 items-start pt-[25px] rounded-xl border-[2px] border-b-2 gap-5 bg-[#f8f9fa] hover:bg-slate-100 hover:cursor-pointer"
    >
      <img
        src={Img}
        alt=""
        className="w-[400px] h-[230px] object-cover rounded-xl"
      />
      <div className="flex flex-col justify-start items-start mt-1 ">
        <h1 className="font-pop text-slate-500">{Date}</h1>
        <h1 className="font-pop text-[20px] font-[600] mt-2 hover:underline ">
          {EventName}
        </h1>
        <h1 className="font-pop text-slate-600 flex flex-row justify-center items-center mt-2 text-[16px] gap-2">
          <IoLocationOutline className="size-[20px]" /> {Location}
        </h1>
        <h1 className="font-pop text-slate-800 flex flex-row justify-center items-center mt-2 gap-2 text-[17px]">
          <GiTicket className="size-[20px]" /> Rs.{Total}
        </h1>
        <div className="flex gap-4">
          {SubEvents.map((sub, index) => (
            <div
              key={index}
              className=" mt-[20px] border-[2px] border-slate-400 rounded-md h-[30px]  bg-slate-100 font-pop text-[18px] font-semibold text-slate-800 flex flex-col items-center justify-center w-[120px]"
            >
              {sub}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
