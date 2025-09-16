import React from 'react'
import DoctorsList from './DoctorsList'
export default function Doctors() {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center">Our great doctors</h2>
                <p className='text__para text-center'>Trusted Experts, Compassionate Care. Our dedicated team of skilled physicians is committed to your health and well-being</p>
            </div>
            <DoctorsList/>
        </div>
    </section>
  )
}
