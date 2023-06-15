import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa"

const ComingSoon = () => {
    return (
        
         <div className="relative mb-10 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          
          <h2 className = "mb-5 font-sans text-3xl font-bold tracking-tight text-[#53091c] sm:text-4xl sm:leading-none" >
            Coming soon
          </h2>
          <h2 className= "mb-5 font-sans text-lg font-semibold tracking-tight text-slate-700 sm:text-2xl sm:leading-none" >
            We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!
          </h2>
           <button className='bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-2 py-1 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-bold'><Link to='/' >Back to hom</Link></button>

        </div>

              <ul class="flex justify-start  items-end gap-2 ">
        <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <RiFacebookCircleFill className='text-[#334F5D] text-lg'></RiFacebookCircleFill>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <ImLinkedin2 className='text-[#334F5D] text-sm'></ImLinkedin2>
        </li>
        <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <ImYoutube className='text-[#334F5D] text-sm'></ImYoutube>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <FiInstagram className='text-[#334F5D] text-sm'></FiInstagram>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <FaWhatsapp  className='text-[#334F5D] text-sm'></FaWhatsapp>
        </li>
        

      </ul>
      </div>
    </div>
    );
};

export default ComingSoon;