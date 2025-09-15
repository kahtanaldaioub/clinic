import {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);    
    const [reviewText, setReviewText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();}
  return (
    <form className='    '>
        <div>
            <h3 className='text-[16px] leading-[30px] text-headingColor font-semibold mb-5 '>How would you rate your experience?</h3>
            <div className=''>
                {[...Array(5).keys()].map((star,index)=>{ index+=1;
                    return(
                        <button onClick={()=>setRating(index)} type='button' key={index}
                                onMouseEnter={()=>setHover(index)}
                                onMouseLeave={()=>setHover(rating)}
                                onDoubleClick={()=>{setRating(0); setHover(0)} }
                                className={` ${index<= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'}   bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                          
                        >
                            <AiFillStar />
                        </button>

                    )
                })}      
            </div>

        </div>
        <div className='mt-[30px]'>
            <h3 className='text-[16px] leading-[30px] text-headingColor font-semibold mb-5 '>Write your review</h3>
            <textarea onChange={(e)=>setReviewText(e.target.value)} rows={5} className='w-full p-3 border border-solid border-[#0066ff34] rounded focus:outline outline-primaryColor resize-none h-[150px]' placeholder='Write your comments here...'></textarea>
        </div>
        <div className='mt-5 text-center'>
            <button type='submit'  onClick={handleSubmit} className='btn'>Submit Feedback</button>

        </div>
    </form>
  )
}
