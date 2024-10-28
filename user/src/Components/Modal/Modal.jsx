import React, { useEffect, useRef, useState } from "react";
import moment from "../../Assets/moments.png";
import data from "../Card/Data";


const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto felx flex-col relative ">

      {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <input
            ref={trigger}
            onChange={() => setModalOpen(true)}
            type="text"
            placeholder="Search by sports, events or location..."
            className="sm2:h-[60px] sm2:w-[500px] rounded-full focus:outline-0  mt-6 p-4 px-8 sm1:text-[18px]"
          />

        <div
          className={`absolute mt-[-10px] flex h-full m-auto min-h-screen xsm:w-[320px] sm2:w-[500px] items-start justify-center xsm:ml-[-40px] sm2:ml-0 bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="sm2:w-[500px] sm2:max-w-[570px] xsm:w-[300px] xsm:h-[225px] sm2:max-h-[380px] rounded-l-[15px] rounded-r-[10px] bg-white  text-center dark:bg-dark-2  whitespace-nowrap overflow-auto scrollbar-hide md:py-[10px]"
          >
         
          {
            data.map((item) =>(
                <div className="flex flex-row items-center justify-start gap-[8px] hover:bg-slate-200 py-[8px] px-[20px]">
                <img src={item.img} alt=""  className="size-[55px] object-cover rounded-lg"/>
                <div className="flex flex-col justify-start items-start">
                    <h1 className="font-pop font-[600] text-[15px]">{item.name} </h1>
                    <h1 className="font-pop text-[14px] text-slate-500 mt-[-2px]">{item.date}</h1>
                    <h1 className="font-pop text-[14px] font-[500] text-slate-800 mt-[-3px]">{item.loc}</h1>
                </div>
               </div>
            ))

          }
           {/* <div className="flex flex-row items-start justify-start gap-[8px] hover:bg-slate-200 py-[5px] px-[20px]">
            <img src={moment} alt=""  className="size-[60px] object-cover rounded-lg"/>
            <div className="flex flex-col justify-start items-start">
                <h1 className="font-pop font-[500]">{item.name} </h1>
                <h1 className="font-pop text-[15px] text-slate-500 mt-[-2px]">item.date</h1>
                <h1 className="font-pop text-[15px] text-slate-700 mt-[-3px]">item.loc</h1>
            </div>
           </div> */}
          
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

    
   
    
{/* <button
onClick={() => setModalOpen(false)}
className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
>
Cancel
</button> */}

