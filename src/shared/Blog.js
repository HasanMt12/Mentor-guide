import React from 'react';
import deal from '../assets/deal.jpg'
import summer from '../assets/summer.jpg'
import brand1 from '../assets/hotels.png'
import brand2 from '../assets/Nike.png'
const Blog = () => {
    return (
        <div className='relative'>
        {/* background color -1 */}
            <div className='absolute z-0 bottom-[70%] right-[30%] w-[20%] h-[20%]  blurBackGroundColor  ' ></div>
        {/* background color-2 */}
            <div  className='absolute z-1 bottom-[20%] right-[10%] w-[20%] h-[20%]  blurBackGroundColor ' ></div>
     
        <div className='mb-10 z-3 px-6 grid lg:grid-cols-2 bg-gray-50 md:grid-cols-2 shadow-lg '>
            
        
            <div>
                 <h2 className='text-black font-bold text-2xl my-4'>Deals</h2>
                <div className='px-12  cursor-pointer  hover:shadow-[8px_9px_20px_10px_rgba(70,177,157,0.35)] shadow-xl my-8 py-4 rounded-xl bg-gray-100'>
                    <h2 className='GradiantTextColour text-2xl text-center'>Hottest Deals of the Week - 04/04/23</h2>
                    <div className='flex justify-center items-center'>
                        <img className='w-[70%] my-4' src={deal} alt=''></img>
                    </div>
                    <div className='flex justify-end items-center'>
                        <h2 className='text-xs text-gray-600 '> 7 nov 2023</h2>
                    </div>
                    <h2 className='text-black text-sm'>
                        This Week's Hottest Deals with Cash Back Check out what your fellow Mark down Today members are loving this week! headphone & monitor 'Ema-Jhon shop'  + Up to 75% ...
                    </h2>
                    <button className='bg-[#ED3A58] hover:bg-[#ce1836] hover:shadow-lg my-4 px-4 text-md rounded-sm text-white'>Shop Now</button>
                </div>
                <div className='px-12  cursor-pointer hover:shadow-[8px_9px_20px_10px_rgba(70,177,157,0.35)] shadow-xl my-8 py-4 rounded-xl bg-gray-100'>
                    <h2 className='GradiantTextColour text-2xl text-center'>Summer for Brand-New Deals on Dazar Mart Devices</h2>
                    <div className='flex justify-center items-center'>
                        <img className='w-[70%] my-4' src={summer} alt=''></img>
                    </div>
                    <div className='flex justify-end items-center'>
                        <h2 className='text-xs text-gray-600 '> 7 April 2023</h2>
                    </div>
                    <h2 className='text-black text-sm'>
                        Summer is in the Hot, and that means some incredible Hot deals on Dazar Mart devices with up to 5 % cash back from Mark Down Today.
                    </h2>
                    <button className='bg-[#ED3A58] hover:bg-[#ce1836] hover:shadow-lg my-4 px-4 text-md rounded-sm text-white'>Shop Now</button>
                </div>
                 <div className='px-12  cursor-pointer z-3 hover:shadow-[8px_9px_20px_10px_rgba(70,177,157,0.35)] shadow-xl my-8 py-4 rounded-xl bg-gray-100'>
                    <h2 className='GradiantTextColour text-2xl text-center'>Hottest Deals of the Week - 04/04/23</h2>
                    <div className='flex justify-center items-center'>
                        <img className='w-[70%] my-4' src={deal} alt=''></img>
                    </div>
                    <div className='flex justify-end items-center'>
                        <h2 className='text-xs text-gray-600 '> 7 nov 2023</h2>
                    </div>
                    <h2 className='text-black text-sm'>
                        This Week's Hottest Deals with Cash Back Check out what your fellow Mark down Today members are loving this week! headphone & monitor 'Ema-Jhon shop'  + Up to 75% ...
                    </h2>
                    <button className='bg-[#ED3A58] hover:bg-[#ce1836] hover:shadow-lg my-4 px-4 text-md rounded-sm text-white'>Shop Now</button>
                </div>
                <div className='px-12  cursor-pointer hover:shadow-[8px_9px_20px_10px_rgba(70,177,157,0.35)] shadow-xl my-8 py-4 rounded-xl bg-gray-100'>
                    <h2 className='GradiantTextColour text-2xl text-center'>Summer for Brand-New Deals on Dazar Mart Devices</h2>
                    <div className='flex justify-center items-center'>
                        <img className='w-[70%] my-4' src={summer} alt=''></img>
                    </div>
                    <div className='flex justify-end items-center'>
                        <h2 className='text-xs text-gray-600 '> 7 April 2023</h2>
                    </div>
                    <h2 className='text-black text-sm'>
                        Summer is in the Hot, and that means some incredible Hot deals on Dazar Mart devices with up to 5 % cash back from Mark Down Today.
                    </h2>
                    <button className='bg-[#ED3A58] hover:bg-[#ce1836] hover:shadow-lg my-4 px-4 text-md rounded-sm text-white'>Shop Now</button>
                </div>
                

            </div>
            
            <div className='px-36'>
            <h2 className='text-black font-bold text-2xl my-4'>Favorites</h2>
            <div className=' h-[400px] w-11/12 bg-white shadow-[5px_4px_20px_7px_rgba(51,79,93,0.23)] rounded-xl overflow-y-scroll'>
                <img className='w-6/12 mx-auto mt-6' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Blog;
