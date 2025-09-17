import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
export default function About() {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between  gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:-right-[-22%]">
                    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[25px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                       <div className="flex items-center justify-between  ">
                                                <div className='flex items-center gap-[6px] lg:gap-3'>
                                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>the most frindly</p>
                                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]'></p>
                                          
                                            </div>
                                        </div>
                                        <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full '>Experince</div>
                                        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                                            <p className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor"></p> Doctors 
                                        </div>
                                        </div>
                </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[770px] order-1 lg:order-2'>
                <h2 className='heading'>praud to be one of the nations best </h2>
                <p className='text__para mt-[30px] pb-[30px]'>Founded generations ago in the heart of Jableh, [Your Clinic Name] has grown from a local practice into a cornerstone of community health, built on a legacy of trust and a simple, unwavering principle: that every individual and family deserves access to compassionate, comprehensive, and high-quality healthcare.

Today, our team comprises highly-skilled specialists and caring staff who are not just medical professionals, but your neighbors. We are deeply committed to Jableh and its people. We integrate advanced diagnostic tools and evidence-based treatment protocols with a personal touch, offering a wide range of services from general practice and pediatrics to specialized consultations. We speak your language, understand your concerns, and are dedicated to providing a comfortable, respectful environment where you are heard.

More than just a clinic, we are a partner in your health journey. From preventive care and education to managing chronic conditions and acute treatments, our mission is to nurture the well-being of our community, ensuring a healthier, brighter future for Jableh, one patient at a time.</p>

                <Link to='/' className='btn mt-[30px] '><button>learn more</button></Link>
            </div>
            </div>
        </div>
    </section>
  )
}
