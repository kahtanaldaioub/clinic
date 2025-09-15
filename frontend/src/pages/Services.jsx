import React from 'react'
import {services} from "../assets/data/services"
import ServicesCard from '../components/Services/ServicesCard'
export default function Services() {
  return (
    <section>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
                {services.map((service,index)=>(
                    <ServicesCard index={index} service={service} key={index}/>
                ))}
            </div>
      </div>
    </section>
  )
}
