import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import video from "../../Assets/GBHomepage-Edit.mp4";
import pic1 from "../../Assets/sport1.webp";
import pic2 from "../../Assets/images.jpg";
import pic3 from "../../Assets/sports2.jpg";
import banner from "../../Assets/banner.webp";
import more from "../../Assets/more-about-us.jpg";
import Slider from "../Slider/SliderPart";
import moment from "../../Assets/moments.png";
import footer from "../../Assets/footer.webp";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <>
      <div className=" sm2:h-[35em] xsm:h-[20em] sm:h-[27em] bg-[#ebff00] w-[100%]  ">
        <Header />
        <div>
          <div className="  m-0 flex justify-center items-center  flex-col ">
            <h1 className=" xsm:text-[35px] sm:text-[50px]  sm2:text-[90px]  font-custom font-semibold ">Moments</h1>

            <div className="  bg-[#0f32fa]  sm2:mt-[-25px]   font-medium flex justify-center sm:w-[200px]  sm1:w-[260px] sm1:mt-[-15px] sm2:w-[450px] sm:h-[50px] sm:mt-[-15px] xsm:h-[40px] xsm:mt-[-10px] xsm:w-[180px]
            sm:text-[40px] sm2:h-[90px] origin-bottom rotate-[-2deg]">

              <h1 className=" font-custom  font-medium sm2:text-[85px] sm2:mt-[-20px] sm1:mt-[-10px] xsm:text-[40px] sm:mt-[-6px] text-white sm1:text-[50px] xsm:mt-[-5px] ">
                MAKE US
              </h1>

            </div>
          </div>
        </div>
        <div className=" sm2:m-auto sm2:w-[600px] sm1:m-x-[100px] sm2:mt-[45px]">
          <p className="sm2:text-[18px] sm1:text-[14px] sm:mx-[20px] sm2:mx-0 font-pop sm1:mt-[15px] sm:text-[14px] xsm:mt-[20px] xsm:text-[12px] xsm:mx-[20px] ">
            Whether you run, cycle, swim, climb, or clamber... for the heat of
            the competition or fun with friends... Let’s Do This will help you
            find, book and share your next momentous experience.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col  sm:mt-[-170px] xsm:mt-[-100px] ">
        <div className="zindex z-20">
         <Modal/>
        </div>
        <video src={video} autoPlay="{true}" loop muted className="vid sm:h-[250px] sm2:h-[450px]"></video>
      </div>
      <h2 className="mt-[50px] mb-5 xsm:text-[20px] sm1:text-[30px] font-pop font-[700]">
        Moments For Everyone
      </h2>


      <div className="flex md:flex-row xsm:flex-col w-[90vw] md:justify-between md: m-auto xsm:gap-8 xsm:justify-center xsm:items-center overflow-hidden">

         
        <div
          className="bg-cover rounded-xl sm2:w-[420px] cursor-pointer sm2:h-[320px] flex hover:underline text-white justify-end flex-col items-start sm1:pl-[25px] xsm:px-[15px] pb-[25px] sm1:size-[300px] xsm:h-[250px]"
          style={{
            backgroundImage: `url(${pic1})`,
          }}
        >
          <h1 className="text-white xsm:text-[25px] sm1:text-[30px] text-stroke-3   text-stroke-black font-pop font-[1000]">
            Marathon Events
          </h1>
          <h1 className="text-white xsm:text-[18px] sm1:text-[20px] font-pop font-[600]">
            More than 100 events
          </h1>
        </div>

        <div
          className="bg-cover rounded-xl sm2:w-[420px] sm2:h-[320px] cursor-pointer flex hover:underline text-white justify-end flex-col items-start sm1:pl-[25px] xsm:px-[30px] pb-[25px] sm1:size-[300px] xsm:h-[250px]"
          style={{
            backgroundImage: `url(${pic2})`,
          }}
        >
          <h1 className="text-white  xsm:text-[25px] sm1:text-[30px] text-stroke-3   text-stroke-black font-pop font-[1000]">
            Cycling Events
          </h1>
          <h1 className="text-white  xsm:text-[18px] sm1:text-[20px]  font-pop font-[600]">
            More than 100 events
          </h1>
        </div>

        <div
          className="bg-cover rounded-xl sm2:w-[420px] sm2:h-[320px] cursor-pointer flex hover:underline text-white justify-end flex-col items-start sm1:pl-[25px] xsm:px-[15px] pb-[25px] sm1:size-[300px] xsm:h-[250px]"
          style={{
            backgroundImage: `url(${pic3})`,
          }}
        >
          <h1 className="text-white xsm:text-[25px] sm1:text-[30px]text-stroke-3   text-stroke-black font-pop font-[1000] xsm:mr-[8px]">
            Marathon Events
          </h1>
          <h1 className="text-white  xsm:text-[18px] sm1:text-[20px]  font-pop font-[600]">
            More than 100 events
          </h1>
        </div>
      </div>

     <div className="flex justify-center items-center ">
        <div className="grid min-[1200px]:grid-cols-6 sm2:grid-cols-3 xsm:grid-cols-2 mt-[50px]   gap-8 mb-4 max-w-[80vw] m-auto">
          
          <div className="button">Swimming</div>
          <div className="button">Football</div>
          <div className="button">Cricket</div>
          <div className="button">Marathon</div>
          <div className="button">Kabbadi</div>
          <div className="button">Volleyball</div>
         
        </div>
      </div>
        <Link to="/allEvents">
        <div className=" h-[40px] w-[150px] text-[18px] flex my-3 xsm:mt-[20px]  bg-blue-600 text-white justify-center m-auto items-center text-center rounded-[50px] font-pop hover:bg-blue-700 font-[500]">
          All Events
        </div>
        </Link>
      

      <div className="flex flex-col items-center my-[50px]  m-auto">
        <div className="mb-5 text-[20px] font-pop font-[500]">
          From Our Partner
        </div>
        <img src={banner} alt="" className="max-w-[90vw] rounded-xl" />
      </div>

      <div className="w-[100%] bg-[#F5F7F8] mt-16  ">
        {/* More about us */}

         <div className="flex flex-row md:w-[80vw] m-auto sm2:justify-between xsm:justify-center items-center mt-7 sm2:mx-[20px] md:m-auto" >

          <div className="md:w-[450px] sm1:w-[350px] flex flex-col justify-center items-start ml-6">
            <p className="font-custom md:text-[40px] xsm:text-[30px] leading-[38px] w-[350px]  text-left mt-[80px] font-[600]">
              Here To Make You Feel Alive.
            </p>
            <p className="font-pop text-left md:w-[350px] xsm:w-[280px] mt-6">
              We’re on a mission to inspire more people to experience amazing
              moments, discovering incredible new places, people and
              communities.
            </p>

            <div className=" h-[40px] w-[150px] text-[15px] flex my-3 outline text-blue-700 justify-center items-center text-center rounded-[50px] font-pop hover:bg-slate-200 mt-6 font-[500]">
              More About Us
            </div>
          </div>
          <div>
            <img
              src={more}
              alt=""
              className="xsm:hidden sm2:block sm2:w-[300px]  md:w-[700px]  mt-[80px] rounded-2xl object-cover sm2:h-[300px]  md:h-[400px] "
            />
          </div>
        </div> 
        {/* Most popular */}
        <h1 className="mt-[50px] mb-5 text-[30px] font-pop font-[700]">
          Most Popular
        </h1>

        <p className="sm2:text-[17px] xsm:text-[17px] font-pop mb-5">
          Experiences our community is loving right now...
        </p>

        <Slider />

        {/* Make moments */}
        <div className="flex flex-row justify-center items-center my-[80px] w-[90vw] m-auto gap-[50px]">
          <img src={moment} alt="" className="md:h-[400px] xsm:w-[50%] rounded-xl object-cover xsm:hidden md:block" />
          <div className=" flex flex-col justify-center items-center gap-[5px]">
            <h1 className="text-[40px] font-custom font-semibold text-white bg-[#0f32fa] w-[230px] origin-bottom rotate-[1deg]">
              MOMENTS
            </h1>
            <div className="  bg-[#0f32fa]  mt-[-10px]  font-medium flex justify-center  w-[190px] h-[60px] origin-bottom rotate-[-2deg]">
              <h1 className=" font-custom  font-medium text-[45px] mt-[-5px]  text-white  ">
                MAKERS
              </h1>
            </div>
            <h1 className="mt-[20px] mb-4 text-[25px] font-pop font-[700]">
              Threshold Sports
            </h1>
            <p className="text-[14px] font-pop  ">
              Whether you’re looking for a breathtakingly scenic 5k walk or a
              gruelling 1000 mile cycling challenge, Threshold Sports’ walk, run
              and cycle events will give you the...
            </p>
            <div className=" h-[40px] w-[150px] text-[18px] flex my-3 outline text-blue-700 justify-center items-center text-center rounded-[50px] font-pop hover:bg-slate-300 mt-6 font-[500]">
              All Events
            </div>
          </div>
        </div>

        <div className="bg-[#ebff00] flex flex-row py-[35px] px-[10%] justify-between items-between m-auto g-5">
          <div className="flex flex-col xsm:items-center md:items-start gap-2">
            <h1 className="xl:text-[40px] xsm:text-[30px] font-custom  font-semibold">
              Moments Chosen & Made For You
            </h1>
            <p className="md:text-left text-[15px] font-pop xsm:w-[100%]  xl:w-[90%] xsm:text-center">
              Want the latest event recommendations straight to your inbox?
              We’ve got you. Sign up for these, as well as tips and training
              hacks.
            </p>
            <div className="mt-4 flex items-start">
              <input
                type="text"
                placeholder="Enter Emial Address"
                className="h-[50px] md:w-[330px] rounded-l-full focus:outline-0  p-4 px-8 text-[18px]"
              />
              <button className="h-[50px] bg-blue-700 w-[130px] rounded-[50px] text-white font-custom border-4 border-white text-[18px]  ml-[-22px]">
                Sign Up
              </button>
            </div>
          </div>
          <img
            src={footer}
            alt=""
            className="w-[850px] h-[14em]  rounded-xl object-cover my-[50p] max-[820px]:hidden md:block"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
