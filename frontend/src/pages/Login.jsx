import {useState} from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hellow <span className='text-primaryColor'>Welcome</span> Back </h3>
        <form>
          <div className='mb-5'>
            <input type='email' className='w-full p-3 border border-borderColor rounded-md outline-none focus:border-primaryColor' placeholder='Email Address' value={formData.email} onChange={handleInputChange} />
          </div>
          <div className='mb-5'>
            <input type='password' className='w-full p-3 border border-borderColor rounded-md outline-none focus:border-primaryColor' placeholder='Password' value={formData.password} onChange={handleInputChange} />
          </div>
          <div className='mb-5 flex justify-between items-center'>
            <div>
              <input type='checkbox' id='remember' className='mr-2' />
              <label htmlFor='remember' className='text-textColor'>Remember me</label>
            </div>
            <div>
              <a href='/' className='text-primaryColor'>Forgot Password?</a>
            </div>
          </div>
          <div>
            <button type='submit' className='btn w-full rounded-md'>Login</button>
          </div>
        </form>
        <p className='text-textColor text-center mt-5'>Don't have an account? <Link to='/signup'><span className='text-primaryColor'>Signup</span></Link></p>
      </div>
    </section>
  )
}
