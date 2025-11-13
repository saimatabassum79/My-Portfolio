import React from 'react';
import { Outlet } from 'react-router';
import Navber from './Navber';
import { Footer } from './Footer';


const Layout = () => {
    return (
        <div className='bg-black'>
            <Navber></Navber>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Layout;