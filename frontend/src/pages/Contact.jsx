import React from 'react'

export default function Contact() {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center '> Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>got a ticnical issue? want to send a feedback about a beta feature? let us know</p>
        <form action="" className='space-y-8'>
          <div>
             <label htmlFor="email" className='form__lable'>your Email</label>
             <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1'/> 
          </div>
          <div>
             <label htmlFor="Subject" className='form__lable'>Subject</label>
             <input type="text" id='Subject' placeholder='let us know how we can help you ' className='form__input mt-1'/> 
          </div>
          <div className='sm:col-span-2'>
             <label htmlFor="message" className='form__lable'>Message</label>
             <textarea raws="6" type="text" id='message' placeholder='Leave a Comment ...' className='form__input mt-1'/> 
          </div>
          <button  type="submit" className='btn rounded sm:w-fit'>Submit</button>
      </form>
      </div>
      
    </section>
  )
}
