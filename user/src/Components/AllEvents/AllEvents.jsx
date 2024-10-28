import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { FaPersonRunning } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import banner from "../../Assets/banner.webp";
import { FaSliders } from "react-icons/fa6";
import { FaSortAmountDown } from "react-icons/fa";
import EventsCard from "./EventsCard";
// import data from '../Card/Data';
import Footer from "../Footer/Footer";
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";

export default function AllEvents() {
  // const dataSet = data;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://trac-for-sports-server.vercel.app/show-events")
      .then((response) => setData(response.data), setLoading(false))
      .catch((error) => console.error(error));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className="bg-slate-50 h-[250px]">
        <h1 className="text-[17px] font-pop flex font-[500] justify-start mx-[76px] pt-[20px]">
          All Events
        </h1>
        <div className="flex flex-row justify-center">
          <div className="w-[250px] bg-white h-[50px] mr-[40px] rounded-lg shadow-md flex justify-start items-center pl-[20px] gap-3 font-pop text-[15px] font-[500] text-slate-600 ">
            <FaPersonRunning className="size-[19px] text-black " />
            Sports
          </div>
          <div className="w-[250px] bg-white h-[50px] mr-[40px] rounded-lg shadow-md flex justify-start items-center pl-[20px] gap-3 font-pop text-[15px] font-[500] text-slate-600 ">
            <IoCalendarNumberOutline className="size-[19px] text-black" />
            Date
          </div>
          <div className="w-[250px] bg-white h-[50px] mr-[40px] rounded-lg shadow-md flex justify-start items-center pl-[20px] gap-3 font-pop text-[15px] font-[500] text-slate-600 ">
            <GrLocation className="size-[19px] text-black" />
            Location
          </div>
        </div>
        <label className="relative flex flex-row justify-center">
          <BiSearchAlt className="pointer-events-none absolute top-[65px] size-[22px] text-slate-700 transform -translate-y-1/2 right-[14%]" />
          <input
            type="text"
            placeholder="Search...."
            className=" w-[75vw] h-[50px] rounded-lg mt-[40px] px-[25px] text-[17px] font-pop shadow-md border-solid  border-[1px] border-slate-300"
          />
        </label>
        <div className="flex flex-row justify-center mt-[20px] gap-5">
          <h1 className="font-pop font-[600]">
            Perks of booking with Let’s Do This
          </h1>
          <h1 className="font-custom">
            {" "}
            <span className="text-[#248933] font-[600]">&#10004; </span>Best
            price guarantee
          </h1>
          <h1 className="font-custom">
            See our <span className="font-[500]">1,041</span> reviews on{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center my-[50px]  m-auto">
        <div className="mb-5 text-[16px] font-pop font-[600]">
          From Our Partner
        </div>
        <img src={banner} alt="" className="max-w-[90vw] rounded-xl" />
      </div>
      <h1 className="font-custom text-[35px] font-[600]">All Events</h1>

      <div className="flex flex-row justify-center items-center gap-[50px] mt-[15px] ">
        <div className="flex flex-row justify-center items-center border-2 border-black rounded-[50px] w-[120px] h-[40px] text-[20px] gap-3 font-custom">
          <FaSliders />
          Filter
        </div>

        <div className="flex flex-row justify-center items-center border-2 border-black rounded-[50px] w-[120px] h-[40px] text-[20px] gap-3 font-custom">
          <FaSortAmountDown />
          Sort
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[30px]">
        {data.map((event, index) => (
          <a href={`/event/${event._id}`}>
            <EventsCard
              key={index}
              date={event.eventdate}
              loc={event.location}
              name={event.title}
              price={event.entryfee}
              img={event.imageurl}
              subname={event.subForms}
            />
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
}
