import {useState} from 'react'
import avatar from "../../assets/images/avatar-icon.png"
import { HiStar } from 'react-icons/hi'
import FeedbackForm from './FeedbackForm'
export default function DoctorFeedback() {
    const[showFeedbackForm,setShowFeedbackForm]=useState(false);
  return (
    <div>
        <div className='mb-50px'>
            <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews</h4>
            <div className="flex justify-between gap-10 mb-[30px]">
                <div className="flex gap-3 ">
                    <figure className='w-10 h-10 rounded-full'>
                        <img className='w-full' src={avatar} alt="" />
                    </figure>
                    <div>
                        <h5 className='text-[16px] leading-6 text-primaryColor font-bold '>Ali Ahmed</h5>
                <p className='text__para text-[14px]'>feb,14,2025</p>
                <p className="text__para">good service,highly recommended</p>
                    </div>
                    
                </div>
                
                <div className="flex items-center gap-[2px] ">
                    {[...Array(5)].map((star,index)=>(
                        <HiStar key={index} className='text-[#FFC107] w-[18px] h-5'/>
                    )
                    )
                    }
                    </div>
            </div>
            </div>
            {!showFeedbackForm && <div className='text-center'><button onClick={()=>setShowFeedbackForm(true)} className="btn">Give Feedback</button></div>}
            {showFeedbackForm && <FeedbackForm />}
    </div>
  )
}
