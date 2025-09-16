import React from 'react' 
import DoctorsCard from '../../components/Doctors/DoctorsCard'
import {doctors} from '../../assets/data/doctors'
import Testimonial from '../../components/Testimonial/Testimonial'

export default function Doctors() {
  return (
    <>
    <section className=''>
      <div className="comtainer text-center">
        <h2 className=''>Find a doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input type='Search' className='py-4 pl-4 pr-2 bg-transparent w-full focus-outline-none cursor-pointer placeholder:text-textColor' placeholder='Search doctor '></input>
          <button className='btn mt-0 rounded-[0] rounded-r-md '>Search</button>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 lg:gap-[30px] '>
                {doctors.map((doctor)=>(
                    <DoctorsCard  doctor={doctor} key={doctor.id}/>
                ))}
            </div>
            <Testimonial />
      </div>
    </section>
    </>
  )
}
