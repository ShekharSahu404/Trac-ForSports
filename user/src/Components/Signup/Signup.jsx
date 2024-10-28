import React, { useState } from "react";
import Header from "../Header/Header";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { username, email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //   axios({
    //     url: "http://localhost:3000/signup", // URL to make request
    //     method: "POST", // post method to send data
    //     data: {
    //       username: inputValue.username,
    //       email: inputValue.email,
    //       password: inputValue.password
    //      }, // attaching the files
    //  })
    //  .then((res) => {
    //     // handle response
    //     console.log(res);
    //  })
    //  .catch((err) => {
    //     // handle errors
    //     console.error(err);
    //  });
    try {
      const { data } = await axios.post("https://trac-for-sports-server.vercel.app/signup", {
        ...inputValue,
      });
      console.log("success");
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        navigate("/login");
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      console.log("error XOXOX");
    }
    setInputValue({
      ...inputValue,
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
      <div
        className={`h-full py-[25px] flex-auto   bg-[#F9F9FD] flex felx-row justify-center items-center `}
      >
        <div className="bg-white py-[20px] w-[380px] rounded-xl mx-[20px] shadow-lg">
          <h1 className="font-custom mt-[0px] text-[27px] font-[600]">
            Signup with email
          </h1>
          <h1 className="font-pop text-[15px] mt-[10px]">
            Enter your details to create an account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-start items-start mt-[25px] mx-[40px] font-pop ">
              <h1 className="text-[16px]">Full Name</h1>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Full Name"
                className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
              />
              <h1 className="text-[16px] mt-[15px]">Email address</h1>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email address"
                className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
              />
              <h1 className="text-[16px] mt-[15px] ">Password</h1>
              <input
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-800 focus:border-blue-800"
              />
              {/* <h1 className="text-[16px] mt-[15px]">Confirm Password</h1>
          <input
            type="text"
            placeholder="Confirm Password"
            className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-800 focus:border-blue-800"
          /> */}
              <button
                type="submit"
                className="my-[20px] w-[100%] bg-[#0f32fa] text-white h-[37px] rounded-[50px] flex items-center justify-center text-[16px] font-[600] hover:bg-[#020D77]"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="bg-slate-50 flex flex-col justify-center items-center mt-[10px] mx-[40px] rounded-xl h-[110px] font-pop ">
            <h1 className="font-[500]">Already have an account? </h1>
            <span className="bg-white w-[120px] h-[35px] rounded-2xl flex justify-center items-center text-[#0f32fa] font-[500] mt-[15px] hover:bg-slate-200 hover:border-[#0f32fa] hover:border-[2px]">
              <Link to={"/login"}>Login</Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div className="bg-gray-950 h-[70px] font-custom text-[30px] flex flex-row justify-center items-center text-yellow-300 top-[-100%]">
        Let's Do This
      </div>
    </>
  );
}
