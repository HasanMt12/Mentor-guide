import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mentorHub logo.png'
import './index.css'
import { AuthContext } from '../Context/AuthProvider';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [open, setOpen] = useState(false);
    const {user , logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( ()=> {} )
        .catch(error => console.log(error));
    }
   
    const menuItems = <React.Fragment>

     
       <Link to='/upComing'> <li className='cursor-Pointer hover:text-[#C31F48] '>Find Your Mentor</li></Link>
       <Link to='/courses'><li className='cursor-Pointer hover:text-[#C31F48] '>Courses</li></Link> 
       <Link to='/training'> <li className='cursor-Pointer hover:text-[#C31F48] '>Training</li></Link>
      <Link to='/upComing'>  <li className='cursor-pointer hover:text-[#C31F48] '>For Business</li></Link>
      <Link to='/blog'>  <li className='cursor-pointer hover:text-[#C31F48] '>Blog</li></Link> 
      <Link to='/upComing'> <li className='cursor-pointer hover:text-[#C31F48] '>Contact Us</li></Link>
      <li>
         {user?.uid 
       ? <> <button className='bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-2 py-1 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-bold'><Link onClick={handleLogOut}>log out</Link></button> </> 
       
       : <Link to='/login'>
              <button className = 'bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-2 py-1 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-bold' >
              Sign up <span className='text-[#98242C] '>/</span> Login </button>
        </Link>
       }
      </li>
   </React.Fragment>
    return (
          <div className= "bg-gray-100 shadow-2xl" >
      <div className= "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" >
        <div className= "relative flex items-center justify-between" >
           <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center "
            >
             
          Mentor Guide
            </a>
          <ul className= "items-center text-slate-600 font-semibold  hidden space-x-8 lg:flex" >
                {menuItems}
                {/* <div className="flex justify-center mt-20">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2 bg-white border rounded-md"
        >
          <span className="mr-2">Dropdown Button</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg bg-black shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm bg-black hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
    </div> */}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center "
                            >
                       Mentor Guide
                       </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                     {menuItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;