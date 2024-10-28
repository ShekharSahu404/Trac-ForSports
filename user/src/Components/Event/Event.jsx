import Header from "../Header/Header";
import { GiTicket } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import { MdSports } from "react-icons/md";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Event() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleRegistration = () => {
    if (!currentUser) {
      navigate("/signup");
    } else {
      navigate(`/event/${id}/register`);
    }
  };

  useEffect(() => {
    axios
      .get(`https://trac-for-sports-server.vercel.app/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })

      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="h-[750px]">
        <Header />

        <div className="bg-[#ebff00]  h-[400px] pt-[25px] ">
          <img
            src="https://res.cloudinary.com/letsdothiscom/image/upload/v1683108015/event-assets/i1bdeszsunsq9qodeoh9.png"
            alt=""
            className=" size-[90px] m-auto object-fill rounded-xl"
          />

          <h1 className="text-[50px]   font-pop font-[700] mt-4">
            {<div>{data.title}</div>}
          </h1>
          <div className="w-[100%] h-[500px]  mt-[20px] flex flex-row justify-center overflow-hidden gap-[40px]">
            <img
              src={data.imageurl}
              alt=""
              className="h-[450px] w-[900px]  object-cover rounded-xl"
            />
            <img
              src={data.imageurl}
              alt=""
              className="h-[450px] max-w-[800px] object-cover rounded-xl"
            />
            <img
              src={data.imageurl}
              alt=""
              className="h-[450px] max-w-[800px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <nav className="flex flex-row w-[100%] m-auto mt-[50px] sticky top-0 justify-between px-[15%] items-center bg-white">
        <div className="flex flex-row justify-center items-center gap-2">
          <GiTicket className="size-[25px]" />
          <h1 className="text-pop text-[17.5px] font-[600]">
            Booked 649 times in the last week
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <h1 className="font-pop text-[23px] font-[500]">
            Rs.{data.entryfee}
          </h1>
          <div
            onClick={handleRegistration}
            className=" h-[40px] w-[120px] text-[16px] flex my-3  bg-blue-600 text-white justify-center m-auto items-center text-center rounded-[50px] font-pop hover:bg-blue-700 font-[500] "
          >
            Register
          </div>
        </div>
      </nav>

      <div className="h-[60vh] bg-[#F5F7F8] flex flex-col items-center justify-center">
        <h1 className="font-Yusei text-[30px] font-[600]">About</h1>
        <p className="w-[40%] mt-[10px] font-pop">
          {data.about}
          {/* {data.subForms.map((subEvent, index) => (
            <li key={index}>
              <p>Sub Event: {subEvent.subEvent}</p>
              <p>Date: {subEvent.date}</p>
              <p>Time: {subEvent.time}</p>
              <p>Price: ${subEvent.price}</p>
              <p>Category: {subEvent.category}</p>
            </li>
          ))} */}
        </p>
        <div className="grid grid-cols-4 grid-rows-1 mt-[50px]  ">
          <div className="flex flex-col justify-center items-center gap-3">
            <FaRoad className="size-[35px]" />

            <h1 className="font-pop font-[500] text-blue-700">View Detail</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <MdCalendarMonth className="size-[35px]" />
            <h1 className="font-pop w-[60%] font-[500]">
              {" "}
              {data.eventday}, {data.eventdate}
            </h1>
            <h1 className="font-pop font-[500] text-blue-700">
              View Logistics
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <FaLocationDot className="size-[35px]" />
            <h1 className="font-pop w-[60%] font-[500]">{data.location}</h1>
            <h1 className="font-pop font-[500] text-blue-700">View Location</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <FaStar className="size-[35px]" />
            <h1 className="font-pop w-[60%] font-[500]">4.4 Stars</h1>
            <h1 className="font-pop font-[500] text-blue-700">View Review</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-[600] text-[30px] mt-[100px] font-Yusei">
          When and Where
        </h1>
        <h1 className="text-[25px] mt-[8px] font-custom">Location</h1>
        <h1 className="text-[16px] m-auto font-pop w-[40%] text-slate-800 mt-[5px]">
          {data.location}
        </h1>
        <h1 className="text-[25px] mt-[8px] font-custom">Start time</h1>
        <h1 className="text-[16px] m-auto font-pop w-[40%] text-slate-900 font-[500] mt-[5px]">
          {data.eventday}, {data.eventdate}
        </h1>
        <h1 className="text-[16px] m-auto font-pop w-[40%] text-slate-800 mt-[5px]">
          Family Run: 9:00 am | 10k : 9:30 am | Half Marathon: 10:30 am{" "}
        </h1>

        <h1 className="font-[600] text-[30px] mt-[20px] font-Yusei">
          Event Summerry
        </h1>
        <p className="text-[16px] m-auto font-pop w-[40%] text-slate-800 mt-[10px] font-[500] ">
          {data.summery}
        </p>

        <div className="flex justify-center items-center w-[60vw] m-auto gap-[70px] mt-[30px] mb-[80px]">
          {data.subForms.map((subEvent, index) => (
            <div
              key={index}
              className="h-[230px] w-[250px]  flex flex-col justify-center rounded-xl shadow-2xl"
            >
              <h1 className="text-[22px] text-slate-700 font-pop font-[500] mt-5">
                {subEvent.subEvent}
              </h1>
              <FaPersonRunning className="m-auto size-[50px] mt-[8px]" />
              <h1 className="font-custom text-[15px]">{subEvent.date}</h1>
              <h1 className="font-pop text-[20px] font-[500] mt-[5px]">
                Rs.{subEvent.price}
              </h1>
              <div
                onClick={handleRegistration}
                className=" h-[40px] w-[150px] text-[16px] flex my-3  bg-blue-600 text-white justify-center m-auto items-center text-center rounded-[50px] font-pop hover:bg-blue-700 font-[500] "
              >
                Register
              </div>
            </div>
          ))}
          {/* <div className="h-[230px]  flex flex-col justify-center rounded-xl shadow-2xl">
            <h1 className="text-[22px] text-slate-700 font-pop font-[500] mt-5">
              10 Kilometer Run
            </h1>
            <MdSports className="m-auto size-[50px] mt-[8px]" />
            <h1 className="font-custom text-[15px]">12 KM</h1>
            <h1 className="font-pop text-[20px] font-[500] mt-[5px]">$20.0</h1>
            <div className=" h-[40px] w-[150px] text-[16px] flex my-3  bg-blue-600 text-white justify-center m-auto items-center text-center rounded-[50px] font-pop hover:bg-blue-700 font-[500] ">
              Register
            </div>
          </div>
          <div className="h-[230px]  flex flex-col justify-center rounded-xl shadow-2xl">
            <h1 className="text-[22px] text-slate-700 font-pop font-[500] mt-5">
              Family Run
            </h1>
            <FaPersonRunning className="m-auto size-[50px] mt-[8px]" />
            <h1 className="font-custom text-[15px]">12 KM</h1>
            <h1 className="font-pop text-[20px] font-[500] mt-[5px]">$50.0</h1>
            <div className=" h-[40px] w-[150px] text-[16px] flex my-3  bg-blue-600 text-white justify-center m-auto items-center text-center rounded-[50px] font-pop hover:bg-blue-700 font-[500] ">
              Register
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
