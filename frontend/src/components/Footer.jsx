import React from 'react'
import {Link} from 'react-router-dom'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {icon: <RiLinkedinFill/>, path: 'https://www.linkedin.com/in/'},
  {icon: <AiFillYoutube/>, path: 'https://www.youtube.com/'},
  {icon: <AiFillGithub/>, path: 'https://github.com/'},
  {icon: <AiOutlineInstagram/>, path: 'https://www.instagram.com/'},
]
const footerLinks1 = [
  {name: 'Home', path: '/'},
  {name: 'Doctors', path: '/doctors'},
  {name: 'Services', path: '/services'},
  {name: 'Contact', path: '/contact'},
]
const footerLinks2 = [
  {name: 'Blog', path: '/blog'},
  {name: 'Careers', path: '/careers'},
  {name: 'Privacy Policy', path: '/privacy-policy'},
  {name: 'Terms of Service', path: '/terms-of-service'},
]
const footerLinks3 = [
  {name: 'Support', path: '/support'},
  {name: 'FAQs', path: '/faqs'},
  {name: 'Sitemap', path: '/sitemap'},
  {name: 'Feedback', path: '/feedback'},
  {name: 'Help Center', path: '/help-center'},
]
export default function Footer() {
  const years=new Date().getFullYear()
  return (
    <footer className='container  py-10'  >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between mb-8'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold mb-4 text-headingColor relative pl-[22px]'><span className='text-primaryColor text-[45px] font-bold absolute bottom-0 left-0'>+</span>Jableh Clinic</h2>
            <p className='text-gray-400'>Helping every patinets is our goal and dream.</p>
            <div className='flex space-x-4 mt-4'>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.path} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-primaryColor text-2xl'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-semibold mb-4 text-headingColor'>Quick Links</h3>
              <ul>
                {footerLinks1.map((link, index) => (
                  <li key={index} className='mb-2'>
                    <Link to={link.path} className='text-gray-400 hover:text-primaryColor'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4 text-headingColor'>Resources</h3>
              <ul>
                {footerLinks2.map((link, index) => (  
                  <li key={index} className='mb-2'>   
                    <Link to={link.path} className='text-gray-400 hover:text-primaryColor'>{link.name}</Link>
                  </li>
                ))} 
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4 text-headingColor'>Support</h3>
              <ul>
                {footerLinks3.map((link, index) => (  
                  <li key={index} className='mb-2'>   
                    <Link to={link.path} className='text-gray-400 hover:text-primaryColor'>{link.name}</Link>
                  </li>
                ))} 
              </ul>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-4 text-center text-gray-500'>
          &copy; {years} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
