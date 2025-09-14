import React from 'react'
import DoctorsList from './DoctorsList'
export default function Doctors() {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center">Our great doctors</h2>
                <p className='text__para text-center'>world-class care for everyone .our health System offers unmatched expert health care</p>
            </div>
            <DoctorsList/>
        </div>
    </section>
  )
}
