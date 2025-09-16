import React from 'react'
import ServicesList from './ServicesList'

export default function Services() {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center">Our medical services</h2>
                <p className='text__para text-center'>Comprehensive care for all your health needs. From prevention to treatment, our expert team is here for you and your family.</p>
            </div>
            <ServicesList/>
        </div>
    </section>
  )
}
