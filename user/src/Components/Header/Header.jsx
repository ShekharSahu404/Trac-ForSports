import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Event from "../Event/Event";
import AllEvents from "../AllEvents/AllEvents";
import axios from "axios";
import Example from "../DropDown/DropDown";
import { TbLogin } from "react-icons/tb";

export default function Header() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header className="bg-[#ebff00] h-[3.9em] flex  justify-center items-center ">
        <nav className="flex justify-between w-[90%] ">
          <div>
            <a href="/" className="text-[30px]   font-bold font-custom ">
              TRAC
            </a>
          </div>
          <div className=" sm2:flex mt-[5px] justify-center items-center gap-[20px] font-[550]  font-pop text-[17px] ">
            <div className="xsm:hidden  sm2:flex">
              <Link to="/allEvents">
                {<h1 className="mx-[15px]">Sports</h1>}
              </Link>
              <Link to="/">
                <h1 href="" className="mx-[15px] ">
                  About Us
                </h1>
              </Link>
            </div>

            {currentUser ? (
              <Example
                username={currentUser?.username}
                handleLogout={handleLogout}
              />
            ) : (
              <Link to="/login">
                <div className="flex justify-center items-center  px-[15px] py-[6px] gap-2  bg-[#0f32fa] text-white  rounded-md">
                  <TbLogin className="size-[23px] text" />
                  <div className=" bg-[#0f32fa] text-white  rounded-md">
                    Login
                  </div>
                </div>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
