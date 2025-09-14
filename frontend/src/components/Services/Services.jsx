import React from 'react'
import ServicesList from './ServicesList'

export default function Services() {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center">Our medical services</h2>
                <p className='text__para text-center'>world-class care for everyone .our health System offers unmatched expert health care</p>
            </div>
            <ServicesList/>
        </div>
    </section>
  )
}
