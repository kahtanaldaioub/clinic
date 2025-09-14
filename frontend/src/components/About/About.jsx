import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import abutCardImg from '../../assets/images/about-card.png'
export default function About() {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between  gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:-right-[-22%]">
                    <img src={abutCardImg} alt="" />
                </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[770px] order-1 lg:order-2'>
                <h2 className='heading'>prud to be one of the nations best </h2>
                <p className='text__para mt-[30px] pb-[30px]'>For 30 years in a row ,syrian news and arabs reports recognised us as one of the best clinics in the eria #1 Syrian clinic we worked in the most deficult times and provided the best experiance with the top spetialist in the eria   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga, facere, illo beatae nemo officia reprehenderit quam nobis architecto ipsam corrupti totam quas ipsa incidunt dolor! Recusandae excepturi et nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda excepturi voluptatum reiciendis minus ut totam alias nemo, odio temporibus modi. Dolore inventore asperiores reprehenderit magni, nihil voluptatibus quidem aspernatur illum! </p>
                <Link to='/' className='btn mt-[30px] '><button>learn more</button></Link>
            </div>
            </div>
        </div>
    </section>
  )
}
