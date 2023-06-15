import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import './project.css'

import 'swiper/css/navigation';
import career from '../../assets/Career.png'
import digital from '../../assets/Digital & Tech.png'
import Startups from '../../assets/Startups.png'
import Finance from '../../assets/Finance.png'
import Tourism from '../../assets/Tourism.png'
import Business from '../../assets/Business.png'

import Development from '../../assets/Skill Development.png'
import Language from '../../assets/Language.png'
import Cultural from '../../assets/Cultural.png'
import Religion from '../../assets/Religion.png'
import Skill from '../../assets/Skill Development.png'
import Entrepreneurship from '../../assets/Creative.png'
import Creativen from '../../assets/Creative.png'
import Health from '../../assets/Health.png'
import life from '../../assets/Life.png'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay ,  A11y } from "swiper";
import 'swiper/css/scrollbar';
// Import Swiper React components
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
const Section = () =>{
       useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
    return(
        <div className='my-20'>
<div className='flex justify-center items-center'>
            <div>
                <h2  className='text-center text-4xl font-bold text-[#650006]'>Skill Sectors</h2>
                <h2 className='text-xl text-[#220109] font-semibold text-center w-[60%] mx-auto'>
                With our expert mentors, you can grow your skills, achieve your goals, and take your career or business or life to the next level.
                </h2>
                </div>
            </div>
         
                

            <Swiper className='w-[80%] mx-auto'
          slidesPerview={1.2}
           spaceBetween={20}
           breakpoints={{
             850: {
               slidesPerView: 4,
             },
             
           }}
          style={{
            paddingLeft :"20px",
            paddingRight: "20px",
            
          }}
          pagination={{
          clickable: true,
        }}
          loop={true}
            autoplay={{ delay: 3000,}}
           
            modules={[Pagination, Autoplay, A11y,]}
           
          >
           
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={life} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Life</h2>
                            </div>
                      </div>
              </SwiperSlide>
                <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={career} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Career</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={digital} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Digital & Tech</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Startups} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Startups</h2>
                            </div>
                      </div>
              </SwiperSlide>  
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Finance} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Finance</h2>
                            </div>
                      </div>
              </SwiperSlide>
              
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Tourism} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Tourism</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Business} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Business</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Development} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Development Sector</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Language} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Language</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Cultural} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Cultural</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Religion} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Religion</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Skill} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Skill Development</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Entrepreneurship} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Entrepreneurship</h2>
                            </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Creativen} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Creative</h2>
                            </div>
                      </div>
              </SwiperSlide><SwiperSlide  className='my-20'>
                   <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center rounded-full w-[200px] h-[200px] shadow-lg hover:shadow-2xl'>
                            <img className='' src={Health} alt=''></img>
                                </div>
                                <h2 data-aos="fade-up"  className='text-center text-[#220109] font-semibold my-4'>Health</h2>
                            </div>
                      </div>
              </SwiperSlide>
                
          </Swiper>
        </div>

       
    )
}
export default Section;