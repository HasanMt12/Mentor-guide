import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoardOutlet from '../Component/Dashboardoutlet';

import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdminSecurity';

import Navber from '../shared/Navber';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
        console.log(isAdmin)

    return (
        <div>
          
             <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <DashBoardOutlet></DashBoardOutlet>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
             
                    <ul className="menu my-4 ml-4 p-4 bg-[#cbc2b5]  w-80 rounded text-base-content">
                         <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  bg-[#F6B461]  border-x-4 border-[#0D0D0D]  text-[#2b2a2a] ">
                 
                            <div className="space-y-4 text-center divide-y divide-gray-700">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>                        
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">                                                 
                                    </div>
                                </div>
                            </div>
                            {/* only admin can access this route */}
                    {isAdmin &&<>
                     <li className='hover:text-[#2b2a2a] mt-2 bg-[#2b2a2a] border-x-2 border-[#FFF6BD] hover:border-[#2b2a2a] text-[#F6B461] hover:rounded-xl font-semibold hover:bg-[#FFF6BD]  mb-2'><Link to="/dashboard/users">All users</Link></li>
                     <li className='hover:text-[#2b2a2a] bg-[#2b2a2a] border-x-2 border-[#FFF6BD] hover:border-[#2b2a2a] text-[#F6B461] hover:rounded-xl font-semibold hover:bg-[#FFF6BD]  mb-2'><Link to="/dashboard/blogPost">Post Blog</Link></li>
                     <li className='hover:text-[#2b2a2a] bg-[#2b2a2a] border-x-2 border-[#FFF6BD] hover:border-[#2b2a2a] text-[#F6B461] hover:rounded-xl font-semibold hover:bg-[#FFF6BD]  mb-2'><Link to="/dashboard/blogAction">Blog Action</Link></li>
                     </>
                    }
                    <li className='hover:text-[#2b2a2a] bg-[#2b2a2a] border-x-2 border-[#FFF6BD] hover:border-[#2b2a2a] text-[#F6B461] hover:rounded-xl font-semibold hover:bg-[#FFF6BD]  mb-2'><Link to="/dashboard/coming">user Dashboard</Link></li>
                        
                           
                            
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;