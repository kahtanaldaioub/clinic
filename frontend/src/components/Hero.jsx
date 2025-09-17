import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import heroimg01 from '../assets/images/hero-img01.png'
import heroimg02 from '../assets/images/hero-img02.png'
import heroimg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
export default function Hero() {
  return (
    <>
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
          <div className="container">
            <div className=" flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* -------hero content--------- */}
              <div>
                <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] lg:mb-[12px] md:text-[60px] md:leading[70px] '>we help patinets live a healthy , longer life</h1>
                  <p className='text__para'> Welcome to <span className='text-primaryColor'>Jableh Clinic</span>, a trusted haven for health and well-being in the heart of Jableh. For generations, our community has stood strong, and we are honored to be a part of your family's story. Our dedicated team of healthcare professionals is committed to providing you with compassionate, comprehensive medical care using modern practices, all within a environment of comfort and respect. Your health is our priority. Together, we build a healthier, brighter future for Jableh. </p>
                  <button className='btn'>Request an Appointment</button>
                </div>
                {/* -------hero counter------- */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap[30px]'>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Years Of Experience</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Clinic Location</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'> Patient Satisfuction</p>
                  </div>
                </div>
              </div>
              {/* -------hero content--------- */}
              <div className='flex gap-[30px] justify-end hidden  lg:flex'>
                <div>
                  <img className='w-full' src={heroimg01} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <img className='w-full mb-[30px] ' src={heroimg02} alt="" />
                  <img className='w-[75%] mb-[30px] ' src={heroimg03} alt="" />
                </div>
              </div>
            </div>
          </div>
          </section>
          <section>
            <div className="container">
              <div className='lg:w-[470px] mx-auto  '>
                <h2 className='heading text-center '>providing the best medical services</h2>
                <p className='text__para text-center'>world-class caer for everyone. our health system offers unmatches, expert health care</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
                <div className='py-[30px] px-5 '>
                  <div className='flex items-center justify-center'> <img src={icon01} alt="" /></div>
                <div className='mt-[20px]'>
                  <h2 className='text-[22px] font-[600] text-headingColor mb-[10px] text-center'>Expert Doctors</h2>
                  <p className='text__para text-center'>Our physicians bring years of experience and advanced expertise to every consultation, ensuring you receive world-class care right here in our community.</p>
                  <Link to='/doctors' 
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className='groub-hover:  w-6 h-5' />
                   </Link>
                   </div>
                </div>
                <div className='py-[30px] px-5 '>
                  <div className='flex items-center justify-center'> <img src={icon02} alt="" /></div>
                <div className='mt-[20px]'>
                  <h2 className='text-[22px] font-[600] text-headingColor mb-[10px] text-center'>Quality Services</h2>
                  <p className='text__para text-center'>Delivering exceptional medical care across a spectrum of specialties. Your well-being is our focus, ensured through precision, and a personal touch.</p>
                  <Link to='/sevices' 
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className='groub-hover:  w-6 h-5' />
                   </Link>
                    </div>
                </div>
                <div className='py-[30px] px-5 '>
                  <div className='flex items-center justify-center'> <img src={icon03} alt="" /></div>
                <div className='mt-[20px]'>
                  <h2 className='text-[22px] font-[600] text-headingColor mb-[10px] text-center'>Affordable Prices</h2>
                  <p className='text__para text-center'>We believe everyone deserves access to quality healthcare. Our services are priced fairly and transparently, with your well-being as our primary focus.</p> 
                  <Link to='/doctors' 
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className='groub-hover:  w-6 h-5' />
                   </Link>
                   </div>
                </div>
              </div>
              </div>
          </section>
    </>
  )
}
