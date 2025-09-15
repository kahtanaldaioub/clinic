import React from 'react'

export default function DoctorAbout() {
  return (
    <>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>About of 
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dr. Stella Kane </span>
        </h3>
        <p className='text__para mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra donec in est
            auctor quam. Pellentesque in felis erat amet, amet, sed duis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Officia expedita exercitationem soluta alias ad et accusamus quaerat, facilis officiis quod eaque?
              Non excepturi rem cupiditate aliquid adipisci ipsa incidunt obcaecati.
            </p>

        

    </div>
    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='list-disc list-inside mt-5 text__para'>
            <li>Graduated from Harvard Medical School in 2008</li>
            <li>Completed a residency at the Mayo Clinic in 2012</li>
            <li>Fellowship in Minimally Invasive Surgery at Johns Hopkins Hospital</li>
        </ul>
    </div>
    <div className='mt-12 mb-20'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='list-disc list-inside mt-5 text__para'>
            <li>Over 10 years of experience in general and laparoscopic surgery</li>
            <li>Specialized in minimally invasive techniques for gallbladder, hernia, and appendectomy surgeries</li>
            <li>Published numerous research papers in leading medical journals on surgical innovations</li>
        </ul>

    </div>
    </>
  )
}
