import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/images/avatar-icon.png'
export default function Signup() {
  const [SelectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleFileChange = async (e) => {
    const file=e.target.files[0];
    setSelectedFile(file);
    console.log(file);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    photo:'SelectedFile',
    role: 'patient',
    gender: '',
    bloodType: '',
    appointments: [],
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  return (
    <section className="px-5 lg-px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create An <span className='text-primaryColor'> Account</span> </h3>
        <form onSubmit={submitHandler}>
          <div className='mb-5'>
            <input type='email' className='  sm:mx-[2px] w-full p-3 border border-borderColor rounded-md outline-none focus:border-primaryColor' placeholder='Email Address' value={formData.email} onChange={handleInputChange}   />
          </div>
          <div className='mb-5'>
            <input type='password' className=' sm:mx-[2px] w-full p-3 border border-borderColor rounded-md outline-none focus:border-primaryColor' placeholder='Password' value={formData.password}  onChange={handleInputChange}  />
          </div>
          <div className='mb-5'>
            <input type='name' className=' sm:mx-[2px] w-full p-3 border border-borderColor rounded-md outline-none focus:border-primaryColor' placeholder='Full name' value={formData.name} onChange={handleInputChange}   />
          </div>
          <div className='mb-5 flex items-center justify-between'>
            <label htmlFor=""   className='text-headingColor font-bold text-[16px] leading-7'>
              Are you a: 
              <select name="role" onChange={handleInputChange} id="role" className='ml-2 p-2 border border-borderColor rounded-md outline-none focus:border-primaryColor' value={formData.role}  >
                <option value="patient">Patient</option>
                <option value="admin">Doctor</option>
              </select>
            </label>
            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
            Gender 
              <select name="role"  onChange={handleInputChange} id="role" className='ml-2 p-2 border border-borderColor rounded-md outline-none focus:border-primaryColor' value={formData.gender}  >
                <option value="patient">Male</option>
                <option value="admin">Female</option>
              </select>
            </label>
          </div>
          <div className='mb-5 flex items-center gap-3 '>
            <figure className='w-[60px] h-[60px] rounded-full border border-primaryColor p-1 cursor-pointer'>
              <img className='w-full rounded-full' src={avatar} alt="" />
            </figure>
            <div className='relative w-[130px] h-[50px]'>
              <input className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' type="file" name='photo' id='customfile' accept='.jpg, .png' onChange={handleFileChange}/>
              <label className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-md truncate cursor-pointer ' htmlFor="customfile" >Upload Photo</label>
            </div>
          </div>
          <div>
            <button type='submit' className='btn w-full rounded-md'>Signup</button>
          </div>
        </form>
        <p className='text-textColor text-center mt-5'>Already have an account? <Link to='/login'><span className='text-primaryColor'>Login</span></Link></p>
      </div>
    </section>

  )
}
