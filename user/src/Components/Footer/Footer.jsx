import React from "react";
import "./Footer.css";
import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="h-[280px] bg-gray-950 flex flex-row w-[100%]  bottom-0  py-[35px] xsm:px-[20%] md:px-[10%] justify-between items-start  pt-[80px] ">
      <div className=" text-white flex flex-col justify-start items-start gap-2">
        <h1 className="font-pop text-[19px] font-[500]">Company</h1>
        <h1>About Us</h1>
        <h1>Events</h1>
        <h1>Contact</h1>
      </div>
      <h1 className=" text-[#ebff00] xsm:hidden md:block font-custom xl:text-[50px] sm1:text-[25px] sm2:text-[40px] mt-[20px] font-[600]">
        LET'S DO THIS
      </h1>
      <div className=" text-white flex flex-col justify-start gap-4 mr-[60px] items-start">
        <h1 className="text-[19px] font-pop font-[500]">Follow Us</h1>
        <div className="flex flex-row gap-[30px] ">
          <GrInstagram className=" size-[25px] s" />
          <GrFacebookOption className=" size-[25px] s" />
          <GrTwitter className=" size-[25px] s" />
        </div>
      </div>
    </div>
  );
}
