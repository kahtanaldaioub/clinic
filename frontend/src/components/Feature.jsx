import React from 'react'
import { Link } from 'react-router-dom'
import featureImg from "../assets/images/feature-img.png"
import vedioImg from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
export default function Feature() {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row gap-5 lg:gap-[30px]">
                <div className='xl:w-[670px]'>
                    <h2 className="heading">get vertual treatment <br/> anytime</h2>
                    <ul className="pl-4">
                        <li className="text__para">1. Schedule the appointment directily</li>
                        <li className="text__para">2. Search for your physician here, and contact their office .</li>
                        <li className="text__para">3. View our physicians who are accepting new patinets , use the online Scheduling to select an appointment time.</li>
                        
                    </ul>
                    <Link to="/"><button className='btn '>Learn More</button></Link>
                </div>
                <div className='relative z-10 xl-w[770px] flex jsutify-end mt-[50px] lg:mt-0'>
                    <img src={featureImg} className='w-3/4' alt="" />
                    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[25px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                        <div className="flex items-center justify-between  ">
                            <div className='flex items-center gap-[6px] lg:gap-3'>
                                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>tue, 24</p>
                                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]'>10:00 AM</p>
                      
                        </div>
                        <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[5px] lg:px-[9px]'>
                            <img src={vedioImg} alt="" />
                            
                        </span>
                    </div>
                    <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full '>Counsulatin</div>
                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                        <img src={avatarIcon} alt="" />
                        <p className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor"></p>Dr. Stella Kane 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
