import {useState} from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import {HiStar} from 'react-icons/hi'
import DoctorFeedback from './DoctorFeedback'
import DoctorAbout from './DoctorAbout'
import SidePanel from './SidePanel'

export default function DoctorDetails() {
  const [tab, setTab] = useState('about')
  
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto ">
        <div className="grid md:grid-cols-3 gap-[50px] ">
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5 '>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} className='w-full' alt="" />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-3 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7  font-semibold rounded'> Surgeon</span>
                <h2 className='text-[22px] lg:text-[30px] font-bold text-headingColor mt-3'>Dr. Stella Kane</h2>
                <p className='text__para mt-2'>BDS, MDS - Oral & Maxillofacial Surgery</p>
                <div className="flex items-center gap-3 mt-3">
                  <p className='text__para'>4.5</p>
                  <div className="flex items-center gap-[2px] ">
                    <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                    <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                    <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                    <HiStar className='text-[#FFC107] w-[18px] h-5'/>
                    <HiStar className='text-[#E4E5E9] w-[18px] h-5'/>
                  </div>
                  <p className='text__para'>(256)</p> 
                </div>
              </div>
            </div> 
            
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button 
                onClick={() => setTab('about')} 
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button 
                onClick={() => setTab('feedback')} 
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            
            {/* Add content for each tab */}
            <div className='mt-[30px]'>
              {tab === 'about' && (
                <div>
                  <DoctorAbout />
                </div>
              )}
              
              {tab === 'feedback' && (
                <div>
                  <DoctorFeedback />
                </div>
              )}
            </div>
          </div>
          
          <div className=''>
           <SidePanel />
          </div>
        </div>
      </div>
    </section>
  )
}