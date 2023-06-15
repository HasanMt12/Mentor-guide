import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { HiUsers } from 'react-icons/hi';

const DashboardInitial = () =>{
    const {data: users = [] , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://product-sell-server.vercel.app/users');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });

    return(
        <div className='py-4'>
       
        <div className='grid lg:gird-cols-4 md:grid-cols-4 grid-cols-2 gap-2 w-[full] mx-auto p-16 bg-[#FFF6BD]'>
        <div className='bg-[#F6B461] rounded-md border-x-4 border-[#0D0D0D] p-6 shadow-lg'>
                <div className='flex justify-between place-items-center text-[#0D0D0D] text-lg font-semibold '>
                    <HiUsers></HiUsers>
                    <h2 >Users : {users.lenght} </h2>
                </div>
            </div>
            <div className='bg-[#F6B461] rounded-md border-x-4 border-[#0D0D0D] p-6 shadow-lg'>
                <div className='flex justify-between place-items-center text-[#0D0D0D] text-lg font-semibold '>
                    <HiUsers></HiUsers>
                    <h2 >Users : {users.lenght}</h2>
                </div>
            </div>
            <div className='bg-[#F6B461] rounded-md border-x-4 border-[#0D0D0D] p-6 shadow-lg'>
                <div className='flex justify-between place-items-center text-[#0D0D0D] text-lg font-semibold '>
                    <HiUsers></HiUsers>
                    <h2>Users : {users.lenght}</h2>
                </div>
            </div>
            <div className='bg-[#F6B461] rounded-md border-x-4 border-[#0D0D0D] p-6 shadow-lg'>
                <div className='flex justify-between place-items-center text-[#0D0D0D] text-lg font-semibold '>
                    <HiUsers></HiUsers>
                    <h2 >Users : {users.lenght}</h2>
                </div>
            </div>
        </div>

        </div>

    )
}
export default DashboardInitial;