import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
export default function ServicesCard({service , index}) {
    const {name,desc,bgColor,textColor}=service
  return (
    <div className='py-[30px] px-3 lg:px-5 '>
        <h2 className='text-[26px] leading-9 text-headingColor font[700] '>{name}</h2>
        <p className='text__para mt-3'>{desc}</p>
        <div className="flex items-center justify-between mt-[30px]">
            <Link to='/services' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
             flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className='groub-hover:  w-6 h-5' />
            </Link>
            <span className='w-[44px] h-[44px] text-[18px] leading-[30px] rounded-[6px] flex items-center justify-center font-[600]' style={{background:bgColor,color:textColor}}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
                        
        </div>
    </div>
  )
}
