import React from 'react'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PatintAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
export default function Testimonial() {
  return (
    <>
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center">What  our patints say</h2>
                <p className='text__para text-center'>world-class care for everyone .our health System offers unmatched expert health care</p>
            </div>
        </div>
    </section>
    <div className=' container mt-[30px] lg:mt-[50px]'>
    <Swiper 
  modules={[Pagination]} 
  spaceBetween={30} 
  slidesPerView={1} 
  pagination={{
    clickable: true,
    dynamicBullets: true,
    
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }}
>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-1">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-2">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-2">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-2">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-2">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px- rounded-[13px] '>
                <div className="flex items-center gap-[13px] ml-2">
                    <img src={PatintAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'> kahtan Dayoub</h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                            <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text__para'> i have ben taking medical services from them ,they treat very well and they are prividing the pest medical services</p>
            </div>
        </SwiperSlide>
        
    </Swiper>
    </div>
    </>
    

  )
}
