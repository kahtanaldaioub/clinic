import React from 'react'

import About from '../components/About/About'
import Hero from '../components/Hero'
import Services from '../components/Services/Services'
import Feature from '../components/Feature'
import Doctors from '../components/Doctors/Doctors'
export default function Home() {
  return (
    <>
          <Hero />
          <About />
          <Services />
          <Feature />
          <Doctors />
    </>
  )
}
