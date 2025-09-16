import { react , useEffect ,useRef} from 'react'
import { NavLink , Link } from 'react-router-dom'
import userImg from '../assets/images/avatar-icon.png'
import{BiMenu} from 'react-icons/bi'
const navLinks = [
  {path: '/', display: 'Home'}, 
  { path: '/doctors', display: 'Find a doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact'}
]
export default function Header() {
  const headerRef = useRef(null);
  const menuRef =useRef(null)
  const handleStickyHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader();
    return window.removeEventListener('scroll',handleStickyHeader)
  })
  const toggleMenu=()=>menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
      <div className='flex items-center justify-between'>
        {/*-------logo-------  */}
        <div className='text-2xl font-bold text-headingColor flex items-center '>
         <span className='text-primaryColor text-[50px] font-bold'>+</span>Jableh Clinic
        </div>
        {/*-------menu-------  */}
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index} className='nav-item'>
                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font[600]' :
                   'text-textColor text-[16px] leading-7 font[500] hover:text-primaryColor'}>{link.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-4 '>
          <div className='hidden'>
            <Link to='/'>
            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden'>
              <img src={userImg} className='w-full' alt="avatar" />
            </figure>
            </Link>
          </div>
            <Link to="/login">
            <button className='bg-primaryColor py-2 px-6 text-white flex items-center justify-center rounded-[50px] font-[600] h-[44px]'> login</button>
            </Link>
          
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
        </div>
      </div>
      </div>
    </header>
  )
}
