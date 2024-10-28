import React from 'react'
import './Card.css'

import { GrLocation, GrTicket } from "react-icons/gr";

export default function Card( { id, img, date, name, loc, price }) {
   
    return (
    <div className='flex flex-col h-[350px] items-center justify-center  my-[50px] m-auto w-[250px]'>
      <div >
        <img src={img} alt=""  className='size-[250px] object-cover rounded-xl'/>
      </div>
      <div className='flex flex-col gap-[5px] font-pop items-start  w-[250px] ml-2 justify-start'>
        <h1 className='text-[15px] mt-[10px] text-slate-500'>{date}</h1>
        <h1 className='text-[17px] text-left font-[550] w-[250px] mt-1 hover:underline cursor-pointer'>{name}</h1>
       <div className='flex flex-row text-slate-500 justify-center items-center gap-1'>
       <GrLocation className='size-[15px]'/>
        <h1 className='text-[15px]  text-slate-500'>{loc}</h1>
       </div>
       <div className='flex flex-row text-slate-500 justify-center items-center gap-[6px]'>
       <GrTicket className='size-[14px]'/>
        <h1 className='text-[14px]  text-slate-500'>{price}</h1>
       </div>
      </div>
    </div>
  )
}
