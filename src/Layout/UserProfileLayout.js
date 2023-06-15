import React from 'react';
import Navber from '../shared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const UserProfileLayout = () => {
    return (
        <div>
           <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default UserProfileLayout;