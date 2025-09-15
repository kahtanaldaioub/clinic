import React from 'react'

export default function SidePanel() {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md '> 
    <div className="flex items-center justify-between">
      <p className='text__para font-semibold mt-0'>Ticket Price</p>
      <span className='text-[16px] leading-7 lg:tec-[22px] lg:leading-8 text-headingColor font-bold'>25 000 S.P</span>
    </div>
    <div className='mt-[30px] '>
      <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slets :</p>
      <ul className='mt-3 '>
        <li className='flex items-center justify-between mb-2 '>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> Sunday </p>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> 9:00 AM - 1:00 PM </p>
        </li>
        <li className='flex items-center justify-between mb-2 '>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> Tuseday </p>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> 9:00 AM - 1:00 PM </p>
        </li>
        <li className='flex items-center justify-between mb-2 '>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> Wednesday </p>
          <p className="text-[15px] leading-6 font-semibold text-textColor"> 9:00 AM - 1:00 PM </p>
        </li>
      </ul>
    </div>
    <button className='btn mt-2 rounded-md w-full '> Book Appointment</button>
     </div>
  )
}
