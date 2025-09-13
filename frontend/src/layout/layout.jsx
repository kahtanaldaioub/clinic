import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routers from '../routes/routers'
export default function layout() {
  return (
    <>
    <Header />
    <main>
        <Routers />
    </main>
    <Footer />
    </>

  )
}
