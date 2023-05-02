import React from 'react';
import { Outlet } from 'react-router-dom';
import './Content.css';

const Content = () => {
    return (
        <div className='content'>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Content;