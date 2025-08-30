import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import '../style/mainLayout.css';
import { Outlet , useLocation } from 'react-router-dom'; 
import BackButton from './backbutton';

const MainLayout = () => {

     const location = useLocation();
    const showBack = location.pathname !== "/";

    return (
        <div className ="page">
            <NavBar showBack = {showBack} />
            <div className="calcRem">
                {/* {showBack && <BackButton />} */}
                <Outlet />  
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;