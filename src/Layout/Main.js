import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer2 from '../shared/Footer2';

import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
       
           <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer2></Footer2>
        </div>
    );
};

export default Main;