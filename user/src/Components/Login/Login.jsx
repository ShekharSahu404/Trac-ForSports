import React, { useState } from "react";
import Header from "../Header/Header";
import Signup from "../Signup/Signup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    console.log(err);
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        ...inputValue,
      });

      localStorage.setItem("currentUser", JSON.stringify(data));
      const { username, success, message } = data;
      if (success) {
        navigate("/");
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
      <div>
        <div className="h-[98vh]  flex-auto  bg-[#F9F9FD]  flex felx-row p-[20px] justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="bg-white h-[500px] w-[380px] rounded-xl mx-[20px] shadow-lg">
              <h1 className="font-custom pt-[20px] text-[27px]   font-[600]">
                Login with email
              </h1>
              <div className="flex flex-col justify-start items-start mt-[25px] mx-[40px] font-pop ">
                <h1 className="text-[16px]">Email address</h1>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={email}
                  placeholder="Email address"
                  className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                />
                <h1 className="text-[16px] mt-[15px]">Password</h1>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Password"
                  className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-800 focus:border-blue-800"
                />
                <button
                  type="submit"
                  className="my-[20px] w-[100%] bg-[#0f32fa] text-white h-[37px] rounded-[50px] flex items-center justify-center text-[16px] font-[600] hover:bg-[#020D77] cursor-pointer"
                >
                  Log in
                </button>
              </div>
              <div className="bg-slate-50 flex flex-col justify-center items-center mt-[10px] mx-[40px] rounded-xl h-[110px] font-pop ">
                <h1 className="font-[500]">Don't have an account yet? </h1>
                <Link to="/signup">
                  <span className="bg-white w-[120px] h-[35px] rounded-2xl flex justify-center items-center text-[#0f32fa] font-[500] mt-[15px] hover:bg-slate-200 hover:border-[#0f32fa] hover:border-[2px]">
                    Sign up
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
      <div className="bg-gray-950 h-[70px] font-custom text-[30px] flex flex-row justify-center items-center text-yellow-300 top-[-100%]">
        Let's Do This
      </div>
    </>
  );
}
